import React, { useState, useEffect, useRef } from 'react';
import { Camera, RotateCcw, PenTool, Save, Shield, Swords, ArrowDownToLine, Hand, Eye, X, Zap, Layers, Trash2, FileText, PlusCircle, UserCog, BookOpen, Edit3, Menu } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const VolleyTacticsPro = () => {
  const mountRef = useRef(null);
  const [isThreeLoaded, setIsThreeLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state
  
  // --- STATE ---
  const [rotation, setRotation] = useState(1);
  const [phase, setPhase] = useState('serve_receive'); 
  const [interactionMode, setInteractionMode] = useState('move'); 
  const [drawMode, setDrawMode] = useState(false); 
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showCoverage, setShowCoverage] = useState(true); 
  const [showAllAttacks, setShowAllAttacks] = useState(false);

  // Data Management
  const [savedTactics, setSavedTactics] = useState([]); 
  const [activeTacticData, setActiveTacticData] = useState({}); 
  const [currentTacticName, setCurrentTacticName] = useState(null); 
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveNameInput, setSaveNameInput] = useState("");
  const [playerNameInput, setPlayerNameInput] = useState("");
  
  // Active Action Overlay
  const [activeActionName, setActiveActionName] = useState(null);

  // --- REFS ---
  const modeRef = useRef(interactionMode);
  const drawModeRef = useRef(drawMode);
  const tacticDataRef = useRef(activeTacticData);
  const phaseRef = useRef(phase);
  const rotRef = useRef(rotation);
  const showCovRef = useRef(showCoverage);

  useEffect(() => { modeRef.current = interactionMode; }, [interactionMode]);
  useEffect(() => { drawModeRef.current = drawMode; }, [drawMode]);
  useEffect(() => { tacticDataRef.current = activeTacticData; }, [activeTacticData]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);
  useEffect(() => { rotRef.current = rotation; }, [rotation]);
  useEffect(() => { showCovRef.current = showCoverage; }, [showCoverage]);

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null); 
  const playersRef = useRef([]); 
  const enemiesRef = useRef([]); 
  const dragPlaneRef = useRef(null);
  const tacticalGroupRef = useRef(null); 
  const linesRef = useRef([]);
  const raycasterRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const handlesRef = useRef([]); 
  const zoneMeshesRef = useRef({}); 

  const dragStateRef = useRef({ 
      isDown: false, isDragging: false, object: null, offset: null, startScreen: { x: 0, y: 0 }, type: null, handleIndex: -1, ownerId: null
  });

  // --- CONFIG ---
  const DEFAULT_ZONE_POINTS = [ { x: -1.5, z: -1.5 }, { x: 1.5, z: -1.5 }, { x: 1.5, z: 1.5 }, { x: -1.5, z: 1.5 } ];

  const initialPlayers = [
    { id: 'S', label: 'S', color: '#fbbf24', role: 'setter' },      
    { id: 'H1', label: 'H1', color: '#3b82f6', role: 'wing' },     
    { id: 'H2', label: 'H2', color: '#3b82f6', role: 'wing' },
    { id: 'M1', label: 'M1', color: '#22c55e', role: 'middle' },   
    { id: 'M2', label: 'M2', color: '#22c55e', role: 'middle' },
    { id: 'L', label: 'L', color: '#ef4444', role: 'libero' },     
    { id: 'O', label: 'OPP', color: '#a855f7', role: 'opposite' }, 
  ];

  const initialEnemies = [
    { id: 'E_S', label: 'S', color: '#64748b', pos: {x: -2, z: -2} }, 
    { id: 'E_H1', label: 'H1', color: '#64748b', pos: {x: 3, z: -2} },
    { id: 'E_H2', label: 'H2', color: '#64748b', pos: {x: -3, z: -6} },
    { id: 'E_M1', label: 'M1', color: '#475569', pos: {x: 0, z: -2} },
    { id: 'E_M2', label: 'M2', color: '#475569', pos: {x: 0, z: -6} },
    { id: 'E_L', label: 'L', color: '#ef4444', pos: {x: 3, z: -6} },
  ];

  const PREMADE_STRATEGIES = [
      { id: 'u19_research', name: 'U19 Onderzoek (L5/H6)' },
      { id: 'standard_3man', name: 'Standaard 3-Man Pass' },
      { id: 'perimeter_def', name: 'Perimeter Verdediging' },
      { id: 'rotation_def', name: 'Rotatie Verdediging' }
  ];

  const ATTACK_OPTIONS = {
      wing: [ 
          { name: "Meter (High)", type: "attack", style: "normal", target: { x: -4, z: 0.5 }, height: 4 },
          { name: "Tempo (Snel)", type: "attack", style: "fast", target: { x: -4, z: 0.5 }, height: 2.8 },
          { name: "Pipe (Back)", type: "attack", style: "pipe", target: { x: 0, z: 2.5 }, height: 3.5 }
      ],
      middle: [ 
          { name: "Stijg (A)", type: "attack", style: "quick", target: { x: 1, z: 0.5 }, height: 2.6 },
          { name: "Achter (C)", type: "attack", style: "quick", target: { x: 2.5, z: 0.5 }, height: 2.6 },
          { name: "Slide", type: "attack", style: "slide", target: { x: 4, z: 0.5 }, height: 2.8 }
      ],
      opposite: [ 
          { name: "Achterover", type: "attack", style: "normal", target: { x: 4, z: 0.5 }, height: 4 },
          { name: "Kruis (X)", type: "attack", style: "cross", target: { x: 1.5, z: 1.0 }, height: 2.8 },
          { name: "D-Bal (Back)", type: "attack", style: "backrow", target: { x: 3, z: 2.5 }, height: 3.5 }
      ]
  };

  const DEFENSE_OPTIONS = {
      block: [{ name: "Blok: Positie", type: "defense", style: "block", offset: { x: 0, z: 0 }, color: 0xff0000 }],
      dig: [{ name: "Verdedig: Hier", type: "defense", style: "dig", target: { x: -3.5, z: 7 }, color: 0x00ff00 }]
  };

  // --- INIT ---
  useEffect(() => {
    // Direct init instead of loading scripts
    setIsThreeLoaded(true);
  }, []);

  useEffect(() => {
    if (!isThreeLoaded || !mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e293b); 
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    resetCamera(camera);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.enabled = false;
    controlsRef.current = controls;

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 20, 5);
    scene.add(dirLight);

    const court = new THREE.Mesh(new THREE.PlaneGeometry(11, 22), new THREE.MeshStandardMaterial({ color: 0x3b82f6 }));
    court.rotation.x = -Math.PI / 2; court.position.y = -0.01; scene.add(court);
    const innerCourt = new THREE.Mesh(new THREE.PlaneGeometry(9, 18), new THREE.MeshStandardMaterial({ color: 0xf97316 }));
    innerCourt.rotation.x = -Math.PI / 2; innerCourt.receiveShadow = true; scene.add(innerCourt);

    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    const drawLine = (z) => {
        const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-4.5, 0.02, z), new THREE.Vector3(4.5, 0.02, z)]);
        scene.add(new THREE.Line(geo, lineMat));
    };
    drawLine(0); drawLine(-3); drawLine(3); 

    const net = new THREE.Mesh(new THREE.BoxGeometry(10, 2.43, 0.1), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }));
    net.position.set(0, 1.215, 0); scene.add(net);

    const dragPlane = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ visible: false }));
    dragPlane.rotation.x = -Math.PI / 2; dragPlaneRef.current = dragPlane; scene.add(dragPlane);

    const tacticalGroup = new THREE.Group();
    scene.add(tacticalGroup); tacticalGroupRef.current = tacticalGroup;

    raycasterRef.current = new THREE.Raycaster();
    mouseRef.current = new THREE.Vector2();

    initialPlayers.forEach(p => createPlayerMesh(scene, p, false));
    initialEnemies.forEach(e => createPlayerMesh(scene, e, true));

    updateSceneState();

    const animate = () => {
      requestAnimationFrame(animate);
      if(controlsRef.current) controlsRef.current.update();
      if(rendererRef.current) rendererRef.current.render(scene, camera);
    };
    animate();

    const canvas = renderer.domElement;
    // Use Pointer Events for unified touch/mouse support
    canvas.addEventListener('pointerdown', onMouseDown);
    canvas.addEventListener('pointermove', onMouseMove);
    canvas.addEventListener('wheel', onWheel, {passive: false});
    window.addEventListener('pointerup', onMouseUp);

    // Resize handler
    const handleResize = () => {
        if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        if(mountRef.current && renderer.domElement) mountRef.current.removeChild(renderer.domElement);
         window.removeEventListener('pointerup', onMouseUp);
        window.removeEventListener('resize', handleResize);
    };
  }, [isThreeLoaded]);

  useEffect(() => { if(isThreeLoaded) updateSceneState(); }, [rotation, phase, activeTacticData, isThreeLoaded]);
  useEffect(() => { if(isThreeLoaded) renderTactics(); }, [showCoverage, interactionMode, isThreeLoaded, showAllAttacks]);
  useEffect(() => { if(controlsRef.current) controlsRef.current.enabled = (interactionMode === 'camera'); }, [interactionMode]);

  // --- LOGIC ---

  const resetCamera = (cam = cameraRef.current) => {
      if(!cam) return; cam.position.set(0, 20, 22); cam.lookAt(0, 0, -2);
  };

  const createPlayerMesh = (scene, pData, isEnemy) => {
      const geo = new THREE.CylinderGeometry(0.4, 0.4, 1.8, 32);
      const mat = new THREE.MeshStandardMaterial({ color: pData.color });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = { id: pData.id, role: pData.role, isEnemy: isEnemy, type: 'player', label: pData.label };
      updatePlayerTexture(mesh, pData.label);
      if(isEnemy) { mesh.position.set(pData.pos.x, 0.9, pData.pos.z); enemiesRef.current.push(mesh); } 
      else { playersRef.current.push(mesh); }
      scene.add(mesh);
  };

  const updatePlayerTexture = (mesh, labelText) => {
      const canvas = document.createElement('canvas'); canvas.width = 128; canvas.height = 64;
      const ctx = canvas.getContext('2d'); 
      ctx.fillStyle = 'white'; ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; 
      ctx.fillText(labelText, 64, 32);
      const oldSprite = mesh.children.find(c => c.type === 'Sprite');
      if (oldSprite) mesh.remove(oldSprite);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas) }));
      sprite.position.y = 1.6; sprite.scale.set(1.5, 0.75, 1.0); 
      mesh.add(sprite);
  };

  const updateSceneState = () => {
      const currentKey = `${rotation}_${phase}`;
      const data = activeTacticData[currentKey];
      const customNames = activeTacticData.names || {};

      if (data && data.players) {
          playersRef.current.forEach(m => {
              const p = data.players[m.userData.id];
              if(p) { m.position.set(p.x, p.visible?0.9:-100, p.z); m.visible = p.visible; }
              const name = customNames[m.userData.id] || m.userData.label;
              if (m.userData.currentLabel !== name) {
                  updatePlayerTexture(m, name);
                  m.userData.currentLabel = name;
              }
          });
          if(data.enemies) enemiesRef.current.forEach(m => {
              const p = data.enemies[m.userData.id];
              if(p) m.position.set(p.x, 0.9, p.z);
          });
      } else {
          applyDefaultPositions(rotation, phase);
      }
      renderTactics();
  };

  const applyDefaultPositions = (rot, ph) => {
      const zonesMap = getRotationRoles(rot);
      const backZones = [1,5,6];
      let activeLiberoZone = null, middleToReplace = null;
      if(backZones.includes(zonesMap['M1'])) { middleToReplace = 'M1'; activeLiberoZone = zonesMap['M1']; }
      else if(backZones.includes(zonesMap['M2'])) { middleToReplace = 'M2'; activeLiberoZone = zonesMap['M2']; }

      const Z = { 1: {x:3, z:6}, 2: {x:3, z:1.5}, 3: {x:0, z:1.5}, 4: {x:-3, z:1.5}, 5: {x:-3, z:6}, 6: {x:0, z:6} };
      const customNames = activeTacticData.names || {};

      playersRef.current.forEach(m => {
          const pid = m.userData.id;
          const name = customNames[pid] || m.userData.label;
          if (m.userData.currentLabel !== name) { updatePlayerTexture(m, name); m.userData.currentLabel = name; }

          let zone = zonesMap[pid];
          let isHidden = false;
          if(pid === 'L') { if(activeLiberoZone) zone = activeLiberoZone; else isHidden = true; } 
          else if (pid === middleToReplace) { isHidden = true; }

          if(isHidden) { m.visible = false; m.position.y = -100; }
          else {
              m.visible = true;
              let pos = Z[zone];
              if (ph==='serve_receive' && ['L','H1','H2'].includes(pid)) {
                 if(zone===1) pos = {x:3, z:6.5}; if(zone===6) pos={x:0, z:7}; if(zone===5) pos={x:-3, z:6.5};
              }
              m.position.set(pos.x, 0.9, pos.z);
          }
      });
  };

  const getRotationRoles = (rot) => {
      const order = ['S', 'H1', 'M1', 'O', 'H2', 'M2'];
      const shifted = [...order];
      for(let i=0; i<rot-1; i++) shifted.unshift(shifted.pop());
      return { [shifted[0]]: 1, [shifted[1]]: 2, [shifted[2]]: 3, [shifted[3]]: 4, [shifted[4]]: 5, [shifted[5]]: 6 };
  };

  // --- STRATEGY GENERATION ---

  const generatePlaybookData = (type) => {
      const allData = {};
      const rotations = [1, 2, 3, 4, 5, 6];
      const phases = ['serve_receive', 'defense', 'attack'];
      const BASE = {
          1:{x:3,z:6}, 2:{x:3,z:1.5}, 3:{x:0,z:1.5}, 4:{x:-3,z:1.5}, 5:{x:-3,z:6}, 6:{x:0,z:6},
          deep5: {x:-3.5, z:7.5}, deep6: {x:0, z:7.5}, deep1: {x:3.5, z:7.5}
      };

      rotations.forEach(r => {
          const zonesMap = getRotationRoles(r);
          const backZones = [1,5,6];
          let activeLZone = null, mOut = null;
          if(backZones.includes(zonesMap['M1'])) { mOut='M1'; activeLZone=zonesMap['M1']; }
          else { mOut='M2'; activeLZone=zonesMap['M2']; }

          phases.forEach(ph => {
              const pPos = {}; const roles = {};
              initialPlayers.forEach(pl => {
                  const pid = pl.id;
                  let z = zonesMap[pid];
                  let vis = true;
                  if(pid==='L') { if(activeLZone) z=activeLZone; else vis=false; }
                  else if(pid===mOut) vis=false;

                  if(!vis) { pPos[pid] = {x:0, z:-100, visible:false}; return; }

                  let pos = BASE[z];
                  
                  if (type === 'u19_research') {
                      if (ph === 'serve_receive') {
                          if (pid === 'L') pos = {x:-3, z:6.5}; 
                          else if (['H1','H2'].includes(pid)) {
                              if (backZones.includes(z)) pos = {x:0, z:7}; 
                              else pos = {x:3, z:6.5};
                          }
                          else {
                              if(pid==='S') pos = {x:2.5, z:2};
                              if(['M1','M2'].includes(pid)) pos = {x:0, z:3};
                              if(pid==='O') pos = {x:4, z:2}; 
                          }
                      }
                      else if (ph === 'defense') {
                          if (!backZones.includes(z)) {
                              pos = {x: (z===4?-3.5:z===2?3.5:0), z: 0.5}; roles[pid] = 'block';
                          } else {
                              roles[pid] = 'defend';
                              if (pid === 'L') pos = BASE.deep5;
                              else if (['H1','H2'].includes(pid)) pos = BASE.deep6; 
                              else pos = BASE.deep1; 
                          }
                      }
                  } 
                  else {
                      if(ph === 'serve_receive' && ['L','H1','H2'].includes(pid)) {
                          if(z===1) pos={x:3,z:6.5}; if(z===6) pos={x:0,z:7}; if(z===5) pos={x:-3,z:6.5};
                      }
                      else if (ph === 'defense') {
                          if(!backZones.includes(z)) { pos.z=0.5; roles[pid]='block'; }
                          else { roles[pid]='defend'; pos.z=7.5; }
                      }
                  }
                  pPos[pid] = { x: pos.x, z: pos.z, visible: true };
              });
              const ePos = {}; initialEnemies.forEach(e => ePos[e.id] = { x:e.pos.x, z:e.pos.z });
              allData[`${r}_${ph}`] = { players: pPos, enemies: ePos, roles: roles, zones: {} };
          });
      });
      return allData;
  };

  const loadPremade = (type, name) => {
      const data = generatePlaybookData(type);
      setActiveTacticData(data);
      setCurrentTacticName(name);
      setTimeout(() => updateSceneState(), 50); 
  };

  // --- RENDER VISUALS ---

  const renderTactics = () => {
      if(!tacticalGroupRef.current) return;
      while(tacticalGroupRef.current.children.length > 0) tacticalGroupRef.current.remove(tacticalGroupRef.current.children[0]);
      handlesRef.current = [];
      zoneMeshesRef.current = {};

      if (showAllAttacks && phaseRef.current === 'attack') renderAllAttacks();
      if(!showCovRef.current && modeRef.current !== 'edit_zones') return;

      const currentKey = `${rotRef.current}_${phaseRef.current}`;
      const tacticData = tacticDataRef.current[currentKey] || {};
      const zonesData = tacticData.zones || {};
      const rolesData = tacticData.roles || {};

      playersRef.current.forEach(player => {
          if(!player.visible) return;
          const pid = player.userData.id;
          let isBlocker = false;
          if (rolesData[pid]) isBlocker = rolesData[pid] === 'block';
          else isBlocker = player.position.z < 2.0 && phaseRef.current === 'defense';

          if (isBlocker) {
              const shadowShape = new THREE.Shape();
              shadowShape.moveTo(-0.5, 0); shadowShape.lineTo(0.5, 0); shadowShape.lineTo(2.0, -9); shadowShape.lineTo(-2.0, -9); shadowShape.lineTo(-0.5, 0);
              const shadowGeo = new THREE.ShapeGeometry(shadowShape);
              const shadowMat = new THREE.MeshBasicMaterial({ color: 0x1f2937, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
              const shadow = new THREE.Mesh(shadowGeo, shadowMat);
              shadow.rotation.x = -Math.PI / 2; shadow.position.set(player.position.x, 0.05, player.position.z + 0.5);
              tacticalGroupRef.current.add(shadow);
          } else {
              const points = zonesData[pid] || JSON.parse(JSON.stringify(DEFAULT_ZONE_POINTS));
              
              const zoneShape = new THREE.Shape();
              zoneShape.moveTo(points[0].x, points[0].z);
              for(let i=1; i<points.length; i++) zoneShape.lineTo(points[i].x, points[i].z);
              zoneShape.lineTo(points[0].x, points[0].z); 

              const zoneGeo = new THREE.ShapeGeometry(zoneShape);
              const zoneMat = new THREE.MeshBasicMaterial({ color: 0x9333ea, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
              const zoneMesh = new THREE.Mesh(zoneGeo, zoneMat);
              
              zoneMesh.rotation.x = Math.PI / 2; 
              zoneMesh.position.set(player.position.x, 0.05, player.position.z);
              
              tacticalGroupRef.current.add(zoneMesh);
              zoneMeshesRef.current[pid] = zoneMesh;

              if(modeRef.current === 'edit_zones') {
                  points.forEach((pt, idx) => {
                      const handle = new THREE.Mesh(new THREE.SphereGeometry(0.3), new THREE.MeshBasicMaterial({ color: 0xd8b4fe }));
                      handle.position.set(player.position.x + pt.x, 0.3, player.position.z + pt.z);
                      handle.userData = { type: 'handle', ownerId: pid, index: idx };
                      tacticalGroupRef.current.add(handle);
                      handlesRef.current.push(handle);
                  });
              }
          }
      });
  };

  const renderAllAttacks = () => {
      if (!tacticalGroupRef.current) return;
      const routes = [ATTACK_OPTIONS.wing[1], ATTACK_OPTIONS.middle[0], ATTACK_OPTIONS.opposite[1]];
      const setterMesh = playersRef.current.find(p => p.userData.id === 'S');
      const startPos = setterMesh ? setterMesh.position.clone() : new THREE.Vector3(2, 0, 0);
      startPos.y = 2.4;
      routes.forEach(attack => {
           const endPos = new THREE.Vector3(attack.target.x, 2.6, attack.target.z); 
           const midPoint = new THREE.Vector3().lerpVectors(startPos, endPos, 0.5);
           midPoint.y = attack.height; 
           const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
           const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
           const color = attack.style === 'quick' ? 0xff0000 : 0xffff00;
           const material = new THREE.LineBasicMaterial({ color: color, linewidth: 2, transparent: true, opacity: 0.6 });
           const line = new THREE.Line(geometry, material);
           tacticalGroupRef.current.add(line);
      });
  };

  const visualizeAction = (action, originMesh) => {
      if (!tacticalGroupRef.current || !action) return;
      const startPos = originMesh.position.clone();
      
      if (action.type === 'attack') {
          const setterMesh = playersRef.current.find(p => p.userData.id === 'S');
          const setStart = setterMesh ? setterMesh.position.clone() : startPos; setStart.y = 2.4; 
          const endPos = new THREE.Vector3(action.target.x, 2.6, action.target.z); 
          const midPoint = new THREE.Vector3().lerpVectors(setStart, endPos, 0.5); midPoint.y = action.height; 
          const curve = new THREE.QuadraticBezierCurve3(setStart, midPoint, endPos);
          const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(25));
          const mat = new THREE.LineDashedMaterial({ color: action.style==='quick'?0xff0000:0xffff00, linewidth: 4, dashSize: 0.5, gapSize: 0.2, scale: 1 });
          const line = new THREE.Line(geo, mat); line.computeLineDistances(); tacticalGroupRef.current.add(line);
      } else if (action.type === 'defense') {
          startPos.y = 0.1;
          let endPos;
          if (action.style === 'block') {
              endPos = new THREE.Vector3(startPos.x + action.offset.x, 0.1, startPos.z - 2);
          } else {
              endPos = new THREE.Vector3(action.target.x, 0.1, action.target.z);
          }
          const points = [startPos, endPos];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({ color: action.color || 0x00ff00, linewidth: 3 });
          const line = new THREE.Line(geometry, material);
          tacticalGroupRef.current.add(line);
          
          if (action.style === 'dig') {
             originMesh.position.x = action.target.x;
             originMesh.position.z = action.target.z;
             snapshotState(); 
          }
      }
      setActiveActionName(action.name);
  };

  // --- INTERACTION ---

  const getIntersects = (e, objs) => {
      if(!mountRef.current || !cameraRef.current || !raycasterRef.current) return [];
      const rect = mountRef.current.getBoundingClientRect();
      const m = mouseRef.current;
      m.x = ((e.clientX - rect.left)/rect.width)*2 -1; m.y = -((e.clientY - rect.top)/rect.height)*2 +1;
      raycasterRef.current.setFromCamera(m, cameraRef.current);
      return raycasterRef.current.intersectObjects(objs);
  };

  const onMouseDown = (e) => {
      // Allow interactions even if not left click if it's touch (pointerType check could be added)
      if(!isThreeLoaded || modeRef.current === 'camera') return;
      if(drawModeRef.current) { startDrawing(e); return; }

      // Check Handles first
      const handleHits = getIntersects(e, handlesRef.current);
      if(handleHits.length > 0) {
          const h = handleHits[0].object;
          if(controlsRef.current) controlsRef.current.enabled = false;
          dragStateRef.current = { isDown: true, isDragging: false, object: h, type: 'handle', ownerId: h.userData.ownerId, handleIndex: h.userData.index, startScreen: {x: e.clientX, y: e.clientY} };
          return;
      }
      const pObjs = [...playersRef.current, ...enemiesRef.current];
      const pHits = getIntersects(e, pObjs);
      if(pHits.length > 0) {
          const p = pHits[0].object;
          const intersect = pHits[0].point;
          const offset = p.position.clone().sub(intersect);
          if(controlsRef.current) controlsRef.current.enabled = false;
          dragStateRef.current = { isDown: true, isDragging: false, object: p, type: 'player', offset: offset, startScreen: {x: e.clientX, y: e.clientY} };
          return;
      }
  };

  const onMouseMove = (e) => {
      // Prevent scrolling on touch
      // e.preventDefault(); 
      if(!isThreeLoaded) return;
      if(drawModeRef.current && dragStateRef.current.isDown) { drawPoint(e); return; }
      const ds = dragStateRef.current;

      if(ds.isDown) {
          const dx = e.clientX - ds.startScreen.x; const dy = e.clientY - ds.startScreen.y;
          if(Math.sqrt(dx*dx+dy*dy) > 3) ds.isDragging = true;
          if(ds.isDragging) {
              const hits = getIntersects(e, [dragPlaneRef.current]);
              if(hits.length > 0) {
                  const pt = hits[0].point;
                  
                  if(ds.type === 'player') {
                      const newPos = pt.add(ds.offset);
                      ds.object.position.set(newPos.x, 0.9, newPos.z);
                      if(showCovRef.current || modeRef.current === 'edit_zones') renderTactics();
                  }
                  else if(ds.type === 'handle') {
                      const owner = playersRef.current.find(p => p.userData.id === ds.ownerId);
                      if(owner) {
                          ds.object.position.set(pt.x, 0.3, pt.z);
                          const relX = pt.x - owner.position.x; 
                          const relZ = pt.z - owner.position.z;
                          
                          const currentKey = `${rotRef.current}_${phaseRef.current}`;
                          const curData = tacticDataRef.current[currentKey] || {};
                          const curZones = curData.zones || {};
                          const curPoints = curZones[ds.ownerId] || JSON.parse(JSON.stringify(DEFAULT_ZONE_POINTS));
                          
                          curPoints[ds.handleIndex] = { x: relX, z: relZ };
                          
                          tacticDataRef.current = { ...tacticDataRef.current, [currentKey]: { ...curData, zones: { ...curZones, [ds.ownerId]: curPoints } } };

                          const zoneMesh = zoneMeshesRef.current[ds.ownerId];
                          if (zoneMesh) {
                              const zoneShape = new THREE.Shape();
                              zoneShape.moveTo(curPoints[0].x, curPoints[0].z);
                              for(let i=1; i<curPoints.length; i++) zoneShape.lineTo(curPoints[i].x, curPoints[i].z);
                              zoneShape.lineTo(curPoints[0].x, curPoints[0].z);
                              zoneMesh.geometry.dispose();
                              zoneMesh.geometry = new THREE.ShapeGeometry(zoneShape);
                          }
                      }
                  }
              }
          }
      }
  };

  const onWheel = (e) => {
      // Future zoom logic
  };

  const onMouseUp = () => {
      const ds = dragStateRef.current;
      if(ds.isDown) {
          if (ds.isDragging) {
              if(ds.type === 'handle') setActiveTacticData({...tacticDataRef.current});
              else snapshotState();
          }
          if(!ds.isDragging && ds.type === 'player' && !ds.object.userData.isEnemy) {
              const p = ds.object;
              setSelectedPlayer(p);
              const currentName = tacticDataRef.current.names?.[p.userData.id] || p.userData.label;
              setPlayerNameInput(currentName);
          }
      }
      dragStateRef.current = { isDown: false, isDragging: false, object: null, offset: null, startScreen: {x:0,y:0} };
      if(controlsRef.current && modeRef.current === 'camera') controlsRef.current.enabled = true;
  };

  // --- STATE HELPERS ---

  const snapshotState = () => {
      const currentKey = `${rotRef.current}_${phaseRef.current}`;
      const pData = {}; playersRef.current.forEach(m => pData[m.userData.id] = {x:m.position.x, z:m.position.z, visible:m.visible});
      const eData = {}; enemiesRef.current.forEach(m => eData[m.userData.id] = {x:m.position.x, z:m.position.z});
      const existingZones = tacticDataRef.current[currentKey]?.zones || {};
      const existingRoles = tacticDataRef.current[currentKey]?.roles || {};
      setActiveTacticData(prev => ({ 
          ...prev, 
          [currentKey]: { 
              ...prev[currentKey], 
              players: pData, 
              enemies: eData,
              zones: existingZones,
              roles: existingRoles
          } 
      }));
  };

  const updateName = () => {
      if (!selectedPlayer) return;
      const pid = selectedPlayer.userData.id;
      setActiveTacticData(prev => ({ ...prev, names: { ...prev.names, [pid]: playerNameInput } }));
  };

  const togglePlayerRole = (pid) => {
      const currentKey = `${rotation}_${phase}`;
      setActiveTacticData(prev => {
          const old = prev[currentKey] || {};
          const oldRoles = old.roles || {};
          const currentRole = oldRoles[pid] || (playersRef.current.find(p=>p.userData.id===pid).position.z < 2 ? 'block' : 'defend');
          return { ...prev, [currentKey]: { ...old, roles: { ...oldRoles, [pid]: currentRole === 'block' ? 'defend' : 'block' } } };
      });
  };

  const saveTactic = () => {
      if(!saveNameInput) return;
      snapshotState();
      setSavedTactics(prev => [...prev, { id: Date.now(), name: saveNameInput, data: activeTacticData }]);
      setShowSaveModal(false); setSaveNameInput("");
  };

  // --- DRAWING ---
  const startDrawing = (e) => {
    dragStateRef.current.isDown = true;
    const hits = getIntersects(e, [dragPlaneRef.current]);
    if(hits.length > 0) {
        const line = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({color: 0xffff00, linewidth: 3}));
        line.userData.points = [hits[0].point]; line.position.y = 0.05; sceneRef.current.add(line); linesRef.current.push(line);
        dragStateRef.current.object = line; 
    }
  };
  const drawPoint = (e) => {
    if(!dragStateRef.current.object) return;
    const hits = getIntersects(e, [dragPlaneRef.current]);
    if(hits.length>0) {
        const line = dragStateRef.current.object;
        line.userData.points.push(hits[0].point);
        line.geometry.setFromPoints(line.userData.points);
    }
  };
  const clearLines = () => { linesRef.current.forEach(l => sceneRef.current.remove(l)); linesRef.current = []; };
  
  return (
    <div className="flex flex-col h-full bg-slate-900 text-white font-sans overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700 z-50">
        <h1 className="text-lg font-bold flex items-center gap-2">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-slate-300">
                <Menu size={24} />
            </button>
            <span className="text-orange-500">Volley</span>Tactics Pro 
            {currentTacticName && <span className="hidden sm:inline-block text-xs bg-slate-700 px-2 py-1 rounded text-slate-300 ml-2">{currentTacticName}</span>}
        </h1>
        <div className="flex gap-1 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6].map(r => (
                <button key={r} onClick={() => setRotation(r)} className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-sm font-bold ${rotation === r ? 'bg-orange-600' : 'bg-slate-700'}`}>P{r}</button>
            ))}
        </div>
      </div>

      <div className="flex flex-1 relative overflow-hidden">
        {/* Sidebar - Mobile Responsive */}
        <div className={`
                fixed inset-y-0 left-0 bg-slate-800 p-4 flex flex-col gap-4 z-40 transform transition-transform duration-300 w-64 border-r border-slate-700 pt-16 md:pt-4 md:relative md:transform-none
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
            
            <div className="flex justify-between md:hidden">
                 <h3 className="font-bold text-slate-400">Menu</h3>
                 <button onClick={()=>setIsSidebarOpen(false)}><X size={20}/></button>
            </div>

            <div className="space-y-1">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase">Fase</h3>
                <button onClick={() => { setPhase('serve_receive'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-2 p-3 md:p-2 rounded text-sm ${phase==='serve_receive'?'bg-blue-600':'bg-slate-700'}`}><ArrowDownToLine size={18}/> Receptie</button>
                <button onClick={() => { setPhase('defense'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-2 p-3 md:p-2 rounded text-sm ${phase==='defense'?'bg-green-600':'bg-slate-700'}`}><Shield size={18}/> Verdediging</button>
                <button onClick={() => { setPhase('attack'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-2 p-3 md:p-2 rounded text-sm ${phase==='attack'?'bg-red-600':'bg-slate-700'}`}><Swords size={18}/> Aanval</button>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-700">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase">Sjablonen</h3>
                {PREMADE_STRATEGIES.map(st => (
                    <button key={st.id} onClick={() => { loadPremade(st.id, st.name); setIsSidebarOpen(false); }} className="w-full text-left p-2 rounded text-xs bg-slate-700 hover:bg-slate-600 flex items-center gap-2">
                        <BookOpen size={14} className="text-orange-400"/> {st.name}
                    </button>
                ))}
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-700">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase">Tools</h3>
                <button onClick={() => setShowCoverage(!showCoverage)} className={`w-full flex items-center gap-2 p-2 rounded text-sm ${showCoverage?'bg-indigo-600':'bg-slate-700'}`}><Layers size={16}/> Zones</button>
                <button onClick={() => setShowAllAttacks(!showAllAttacks)} className={`w-full flex items-center gap-2 p-2 rounded text-sm ${showAllAttacks?'bg-orange-500':'bg-slate-700'}`}><Zap size={16}/> Alle Aanvallen</button>
                <div className="flex gap-1 mt-1">
                    <button onClick={() => setShowSaveModal(true)} className="flex-1 bg-blue-600 p-2 rounded text-xs font-bold flex justify-center items-center gap-1"><Save size={14}/> Save</button>
                    <button onClick={() => { setActiveTacticData({}); setCurrentTacticName(null); }} className="flex-1 bg-slate-600 p-2 rounded text-xs flex justify-center items-center gap-1"><PlusCircle size={14}/> New</button>
                </div>
            </div>

            {/* Mode Selector - Bottom of sidebar */}
            <div className="mt-auto pt-2 border-t border-slate-700">
                 <h3 className="text-[10px] font-bold text-slate-400 uppercase">Modus</h3>
                 <div className="grid grid-cols-2 gap-1">
                    <button onClick={() => {setInteractionMode('move'); setDrawMode(false); setIsSidebarOpen(false);}} className={`p-3 md:p-2 rounded text-xs ${interactionMode==='move'?'bg-blue-600':'bg-slate-700'}`}><Hand size={18} className="mb-1 mx-auto"/> Verplaats</button>
                    <button onClick={() => {setInteractionMode('edit_zones'); setDrawMode(false); setShowCoverage(true); setIsSidebarOpen(false);}} className={`p-3 md:p-2 rounded text-xs ${interactionMode==='edit_zones'?'bg-blue-600':'bg-slate-700'}`}><Layers size={18} className="mb-1 mx-auto"/> Bewerk Zone</button>
                    <button onClick={() => {setInteractionMode('camera'); setDrawMode(false); setIsSidebarOpen(false);}} className={`p-3 md:p-2 rounded text-xs ${interactionMode==='camera'?'bg-blue-600':'bg-slate-700'}`}><Eye size={18} className="mb-1 mx-auto"/> Camera</button>
                    <button onClick={() => {setDrawMode(!drawMode); setInteractionMode('move'); setIsSidebarOpen(false);}} className={`p-3 md:p-2 rounded text-xs ${drawMode?'bg-yellow-500 text-black':'bg-slate-700'}`}><PenTool size={18} className="mb-1 mx-auto"/> Teken</button>
                 </div>
                 <button onClick={clearLines} className="w-full mt-1 bg-slate-700 text-xs p-2 hover:bg-red-900"><RotateCcw size={14} className="inline mr-1"/> Wis Lijnen</button>
            </div>
        </div>
        
        {/* Overlay for sidebar on mobile */}
        {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

        {/* 3D Viewport */}
        <div className="flex-1 bg-gray-900 relative cursor-crosshair h-full" ref={mountRef}>
             {selectedPlayer && (
                 <div className="absolute top-4 right-4 bg-slate-800 p-4 rounded shadow-xl border border-slate-600 z-20 w-64 max-h-[80vh] overflow-y-auto">
                     <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-600">
                         <h3 className="font-bold flex items-center gap-2">Speler Opties</h3>
                         <button onClick={() => setSelectedPlayer(null)}><X size={16}/></button>
                     </div>
                     
                     <div className="mb-3">
                         <label className="text-[10px] text-slate-400 uppercase font-bold">Naam</label>
                         <div className="flex gap-1">
                             <input 
                                className="bg-slate-900 text-white text-sm p-1 rounded w-full border border-slate-600" 
                                value={playerNameInput}
                                onChange={(e) => setPlayerNameInput(e.target.value)}
                                onBlur={updateName}
                                onKeyDown={(e) => e.key === 'Enter' && updateName()}
                             />
                             <button onClick={updateName} className="bg-blue-600 p-1 rounded hover:bg-blue-500"><Edit3 size={14}/></button>
                         </div>
                     </div>

                     <button onClick={() => togglePlayerRole(selectedPlayer.userData.id)} className="w-full bg-slate-700 hover:bg-slate-600 p-2 rounded text-xs flex items-center gap-2 mb-3">
                         <UserCog size={16} /> Wissel Rol (Blok/Verd)
                     </button>

                     <label className="text-[10px] text-slate-400 uppercase font-bold mb-1 block">Acties</label>
                     {(selectedPlayer.userData.role === 'wing' ? ATTACK_OPTIONS.wing : selectedPlayer.userData.role === 'middle' ? ATTACK_OPTIONS.middle : ATTACK_OPTIONS.opposite).map((opt, i) => (
                         <button key={i} onClick={() => visualizeAction(opt, selectedPlayer)} className="w-full text-left p-2 rounded bg-slate-700 hover:bg-slate-600 text-xs mb-1"><span className="font-bold text-slate-200">{opt.name}</span></button>
                     ))}
                     {DEFENSE_OPTIONS.block.map((opt, i) => (
                         <button key={'b'+i} onClick={() => visualizeAction(opt, selectedPlayer)} className="w-full text-left p-2 rounded bg-slate-700 hover:bg-slate-600 text-xs mb-1 border-l-2 border-red-500 pl-2"><span className="font-bold text-slate-200">{opt.name}</span></button>
                     ))}
                     {DEFENSE_OPTIONS.dig.map((opt, i) => (
                         <button key={'d'+i} onClick={() => visualizeAction(opt, selectedPlayer)} className="w-full text-left p-2 rounded bg-slate-700 hover:bg-slate-600 text-xs mb-1 border-l-2 border-green-500 pl-2"><span className="font-bold text-slate-200">{opt.name}</span></button>
                     ))}
                 </div>
             )}

             {showSaveModal && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-slate-800 p-6 rounded w-80">
                        <h3 className="font-bold mb-2">Opslaan</h3>
                        <input value={saveNameInput} onChange={e=>setSaveNameInput(e.target.value)} className="w-full bg-slate-900 p-2 rounded mb-4" placeholder="Naam tactics..."/>
                        <div className="flex justify-end gap-2"><button onClick={()=>setShowSaveModal(false)}>Annuleren</button><button onClick={saveTactic} className="bg-blue-600 px-4 py-2 rounded">Opslaan</button></div>
                    </div>
                </div>
             )}
             
             {interactionMode === 'edit_zones' && (
                 <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto bg-blue-900/80 p-2 rounded text-xs pointer-events-none">
                     <p className="font-bold text-blue-200">Zone Bewerken:</p>
                     Sleep de 4 oranje bollen.
                 </div>
             )}
        </div>
      </div>
    </div>
  );
};

export default VolleyTacticsPro;
