import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from "dat.gui";

var height = window.innerHeight;
var width = window.innerWidth;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(width,height);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement); 

const ambientLight = new THREE.AmbientLight(0x112233);
scene.add(ambientLight);

//const directinalLight = new THREE.DirectinalLight(0xFFFFFF, 0.7);
//directinalLight.position.set(-20, 20, 0);
//scene.add(directinalLight);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);
//const dirLightHelper = new THREE.DirectionalLightHelper(directinalLight);
//scene.add(dirLightHelper);


camera.position.set(0,10,-40);
//scene.add(camera);
orbit.update();


var radius = 10;
var height = 10;

const pyrimidGeo = new THREE.CylinderGeometry(0, radius, height, 4, 1)
const pyrimidMat = new THREE.MeshBasicMaterial({color: 0xC9A764});
const pyrimid = new THREE.Mesh(pyrimidGeo, pyrimidMat);
pyrimid.position.set(0, 5, 0);
scene.add(pyrimid);

const planeGeo = new THREE.BoxGeometry(60,60,0.01);
const planeMat = new THREE.MeshBasicMaterial({color: 0x876011, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotateX( -.5 * Math.PI);
scene.add(plane);

const sunGeo = new THREE.SphereGeometry(5, 15, 15);
const sunMat = new THREE.MeshBasicMaterial({color: 0xFFD700, wireframe: false});
const sun = new THREE.Mesh(sunGeo, sunMat);
sun.position.set(-20,10,40);
scene.add(sun);

const gui = new dat.GUI();
const guiOption = {
    isFunctionEnabled: false,
};
const guiScene = {
  isPyrimid: true,
}

gui.add(guiOption, 'isFunctionEnabled').name('NightMode').onChange(function (enabled) {
  // This function will be called when the checkbox state changes
  if (enabled) {
    // Call your function when the checkbox is checked
    MoonToggle();
  } else {
    // Handle the case when the checkbox is unchecked (optional)
    // You can add code here to do something when the function is disabled
    sun.material.color.set(0xFFD700);
  }
});
gui.add(guiScene, 'isPyrimid').name('Scene One').onChange(function(enabled){
  if(enabled){
    scene.add(pyrimid);
    scene.add(plane);
  } else{
    removeObject(pyrimid);
    removeObject(plane);
    EarthScene();
  }
});
const rad = 30; // Radius of the circular path
const speed = 0.1; // Angular speed
const rotationSpeed = 0.01; 

function animate(time){
    pyrimid.rotation.x += 0.00;
    pyrimid.rotation.y += 0.01;

    const angle = Date.now() * 0.01; // Get time in seconds
    const x = Math.cos(angle * speed) * rad;
    const z = Math.sin(angle * speed) * rad;
    const y = Math.sin(angle * speed) * rad;

    // Set the new position of the sphere
    sun.position.set(x, y, z);

    renderer.render(scene,camera);
}

function MoonToggle(){
    sun.material.color.set(0x6F749C);
}
function removeObject(object) {
    scene.remove(object);
}
function PyrimidScene(){
  const pyrimidGeo = new THREE.CylinderGeometry(0, radius, height, 4, 1)
  const pyrimidMat = new THREE.MeshBasicMaterial({color: 0xC9A764});
  const pyrimid = new THREE.Mesh(pyrimidGeo, pyrimidMat);
  pyrimid.position.set(0, 5, 0);
  scene.add(pyrimid);
}
function EarthScene(){
  const earthGeo = new THREE.SphereGeometry(5, 15, 15);
  const earthMat = new THREE.MeshBasicMaterial({color: 0x0347BC, wireframe: false});
  const earth = new THREE.Mesh(earthGeo, earthMat);
  sun.position.set(-20,10,40);
  scene.add(earth);
}
renderer.setAnimationLoop(animate);
