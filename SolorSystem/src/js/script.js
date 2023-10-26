//import here
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import space from '../img/Star.jpg'; //https://opengameart.org/node/25677
import rings from '../img/Rings.jpg';
//all textures: https://www.solarsystemscope.com/textures/
import sunText from '../img/2k_sun.jpg';
import merText from '../img/2k_mercury.jpg';
import venText from '../img/2k_venus.jpg';
import earthText from '../img/2k_earth_daymap.jpg';
import marsText from '../img/2k_mars.jpg';
import jupText from '../img/2k_jupiter.jpg';
import nepText from '../img/2k_neptune.jpg';
import satText from '../img/2k_saturn.jpg';
import UrText from '../img/2k_uranus.jpg';
import moonText from '../img/2k_moon.jpg';
import Rings from '../img/2k_saturn_ring.png';

//window setup
var width = window.innerWidth;
var height = window.innerHeight;
//var viewAngle = 45;

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(width,height);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();


//background
const cubeLoader = new THREE.CubeTextureLoader();
scene.background = cubeLoader.load([space,space,space,space,space,space]);
//textures
const textureLoader = new THREE.TextureLoader();
const Suntexture = textureLoader.load(sunText); 
const MercuryTexture = textureLoader.load(merText);
const VenusTexture = textureLoader.load(venText);
const EarthTexture =textureLoader.load(earthText);
const MarsTexture = textureLoader.load(marsText);
const SaturnTexture = textureLoader.load(satText);
const JupiterTexture = textureLoader.load(jupText);
const UranusTexture = textureLoader.load(UrText);
const NeptuneTexture = textureLoader.load(nepText);
const MoonTexture = textureLoader.load(moonText);


renderer.setClearColor(0x334455);

//camera
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10500);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-100, 0, 400);
orbit.update();

//axes
const axesHelper = new THREE.AxesHelper(50);
//scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(400);
//scene.add(gridHelper);


//Light
const pl = new THREE.PointLight(0xFFFFFF, 1);
pl.position.set(0, 0, 0);
pl.decay = 0;
scene.add(pl);


//Instantaite objects here
const sunGeo = new THREE.SphereGeometry(20, 40, 40);
const sunMat = new THREE.MeshBasicMaterial({ wireframe: false, map: Suntexture});
const sun = new THREE.Mesh(sunGeo, sunMat);
sun.position.set(0, 0 ,0);
scene.add(sun);

const MurcuryGeo = new THREE.SphereGeometry(4, 40, 40);
const MurcuryMat = new THREE.MeshStandardMaterial({ wireframe: false, map: MercuryTexture });
const Murcury = new THREE.Mesh(MurcuryGeo, MurcuryMat);
scene.add(Murcury);
const MurcuryOBJ = new THREE.Object3D();
MurcuryOBJ.add(Murcury);
scene.add(MurcuryOBJ);
Murcury.position.set(sun.position.x + 60, sun.position.y, sun.position.z + 18);


const VenusGeo = new THREE.SphereGeometry(12, 40, 40);
const VenusMat = new THREE.MeshStandardMaterial({ wireframe: false, map: VenusTexture });
const Venus = new THREE.Mesh(VenusGeo, VenusMat);
scene.add(Venus);
const VenusOBJ = new THREE.Object3D();
VenusOBJ.add(Venus);
scene.add(VenusOBJ);
Venus.position.set(sun.position.x - 80, sun.position.y, sun.position.z + 47);

const EarthGeo = new THREE.SphereGeometry(12, 40, 40);
const EarthMat = new THREE.MeshStandardMaterial({wireframe: false, map: EarthTexture });
const Earth = new THREE.Mesh(EarthGeo, EarthMat);
scene.add(Earth);
const EarthOBJ = new THREE.Object3D();
EarthOBJ.add(Earth);
scene.add(EarthOBJ);
Earth.position.set(sun.position.x - 130, sun.position.y, sun.position.z);
//const MoonGeo = new THREE.SphereGeometry(3,30,30);
//const MoonMat = new THREE.MeshStandardMaterial({map: MoonTexture});
//const Moon = new THREE.Mesh(MoonGeo, MoonMat);
//scene.add(Moon);
//const MoonOBJ = new THREE.Object3D();
//MoonOBJ.add(Moon);
//scene.add(MoonOBJ);

const MarsGeo = new THREE.SphereGeometry(6, 40, 40);
const MarsMat = new THREE.MeshStandardMaterial({ wireframe: false, map: MarsTexture });
const Mars = new THREE.Mesh(MarsGeo, MarsMat);
scene.add(Mars);
const MarsOBJ = new THREE.Object3D();
MarsOBJ.add(Mars);
scene.add(MarsOBJ);
Mars.position.set(sun.position.x + 230, sun.position.y, sun.position.z + 30);

//outer planets
const JupiterGeo = new THREE.SphereGeometry(130, 40, 40);
const JupiterMat = new THREE.MeshStandardMaterial({wireframe: false, map: JupiterTexture });
const Jupiter = new THREE.Mesh(JupiterGeo, JupiterMat);
scene.add(Jupiter);
const JupiterOBJ = new THREE.Object3D();
JupiterOBJ.add(Jupiter);
scene.add(JupiterOBJ);
Jupiter.position.set(sun.position.x - 580, sun.position.y, sun.position.z - 90);

var innerRadius = 116;
var outerRadius = 40;

const SaturnGeo = new THREE.SphereGeometry(116, 40, 40);
const SaturnMat = new THREE.MeshStandardMaterial({wireframe: false, map: SaturnTexture });
const Saturn = new THREE.Mesh(SaturnGeo, SaturnMat);
scene.add(Saturn);
const SaturnOBJ = new THREE.Object3D();
SaturnOBJ.add(Saturn);
scene.add(SaturnOBJ);
Saturn.position.set(sun.position.x - 999, sun.position.y, sun.position.z - 90);
//RINGS
//const ringGeometry = new THREE.RingGeometry(innerRadius * 2 , outerRadius * 5 , 64); // Adjust the inner and outer radius as needed
//const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide }); // Adjust the color
//const saturnRings = new THREE.Mesh(ringGeometry, ringMaterial);
//saturnRings.position.copy(Saturn.position);
//saturnRings.rotation.x = Math.PI / 2; // Rotate the rings to be flat
//scene.add(saturnRings);
//const RingOBJ = new THREE.Object3D();
//RingOBJ.add(saturnRings);
//scene.add(RingOBJ);

const ringProperties = [
{ innerRadius: innerRadius*3, outerRadius: outerRadius*6, map: Rings },
{ innerRadius: innerRadius*2, outerRadius: outerRadius*4.5, map: Rings},
{ innerRadius: innerRadius*1.5, outerRadius: outerRadius*4,  map: Rings},
// Add more properties for additional rings
];
// Create an array to store the ring meshes and object3Ds
const ringMeshes = [];
const ringObject3Ds = [];
// Loop through the ring properties and create rings
ringProperties.forEach((props, index) => {
    const ringGeometry = new THREE.RingGeometry(props.innerRadius, props.outerRadius, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: props.color, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    // Position the ring
    const offsetY = index * 30; // Adjust the spacing as needed
    ringMesh.position.copy(Saturn.position);
    ringMesh.rotateX(.5);
    //ringMesh.position.set(offsetY,sun.position.y, sun.position.z - 90);

    // Create an Object3D to group the ring
    const ringObject3D = new THREE.Object3D();
    ringObject3D.add(ringMesh);

    // Add the ring and its Object3D to the arrays
    ringMeshes.push(ringMesh);
    ringObject3Ds.push(ringObject3D);

    // Add the ring to the scene
    scene.add(ringObject3D);
});


const UranusGeo = new THREE.SphereGeometry(50, 40, 40);
const UranusMat = new THREE.MeshStandardMaterial({wireframe: false, map: UranusTexture });
const Uranus = new THREE.Mesh(UranusGeo, UranusMat);
scene.add(Uranus);
const UranusOBJ = new THREE.Object3D();
UranusOBJ.add(Uranus);
scene.add(UranusOBJ);
Uranus.position.set(sun.position.x - 1980, sun.position.y, sun.position.z + 180);

const NeptuneGeo = new THREE.SphereGeometry(49, 40, 40);
const NeptuneMat = new THREE.MeshStandardMaterial({ wireframe: false, map: NeptuneTexture });
const Neptune = new THREE.Mesh(NeptuneGeo, NeptuneMat);
scene.add(Neptune);
const NeptuneOBJ = new THREE.Object3D();
NeptuneOBJ.add(Neptune);
scene.add(NeptuneOBJ);
Neptune.position.set(sun.position.x - 3000, sun.position.y, sun.position.z - 180);

const animationSpeed = 0.01;

function animate(time){


    //rotate planets around sun
    MurcuryOBJ.rotateY(.047/10);
    MurcuryOBJ.rotateZ(.0020);
    VenusOBJ.rotateY(.035/10);
    VenusOBJ.rotateZ(.0009);
    EarthOBJ.rotateY(0.029/10);
    EarthOBJ.rotateZ(0.0001)
    //MoonOBJ.rotateY(0.01);
    //MoonOBJ.rotateZ(.01);
    MarsOBJ.rotateY(.024/10);
    JupiterOBJ.rotateY(.013/10);
    SaturnOBJ.rotateY(.09/10);
    SaturnOBJ.rotateZ(.001);
    UranusOBJ.rotateY(.06/10);
    NeptuneOBJ.rotateY(.05/10);
    ringObject3Ds.forEach((ringObject3D, index) => {
    // Rotate each ringObject3D around its local Y-axis
    ringObject3D.rotateY(.09/10); // Adjust the rotation speed as needed
    ringObject3D.rotateZ(.001);
  });
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener('resize',function() {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    renderer.setSize(width,height);
});