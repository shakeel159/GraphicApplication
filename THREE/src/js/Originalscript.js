import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui';
//import background from '../img/background.jpg'; // Credit: <a href="https://www.freepik.com/free-photo/abstract-flowing-neon-wave-background_15474089.htm#query=background&position=26&from_view=keyword">Image by rawpixel.com</a> on Freepik
import stars from '../img/Star.jpg'; //https://www.pxfuel.com/en/free-photo-obmtg/download
import one from '../img/One.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';
import four from '../img/four.jpg';
import five from '../img/five.jpg';
import six from '../img/six.jpg';


var height = window.innerHeight;
var width = window.innerWidth;

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const mousePos = new THREE.Vector2();

window.addEventListener('mousemove', function(e){
  mousePos.x = (e.clientX/width) * 2 - 1;
  mousePos.y = -(e.clientY/height) * 2 + 1;
});
const rayCaster = new THREE.Raycaster();

const scene = new THREE.Scene();
//renderer.setClearColor(0x334455);
//const textureLoader = new THREE.TextureLoader();
//scene.background = textureLoader.load(stars);

const cubeLoader = new THREE.CubeTextureLoader();
scene.background = cubeLoader.load([stars,stars,stars,stars,stars,stars]);

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

camera.position.set(-10, 20, 20);
orbit.update();

const textureLoader = new THREE.TextureLoader();
//testBox
const boxGeo = new THREE.BoxGeometry(4,4,4);
//const boxMat = new THREE.MeshStandardMaterial({ color: 0x0000FF, wireframe: false, map: textureLoader.load(stars)});
//const box = new THREE.Mesh(boxGeo, boxMat);
const boxMats = [
  new THREE.MeshBasicMaterial({map: textureLoader.load(one)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(two)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(three)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(four)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(five)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(six)})
]
const box = new THREE.Mesh(boxGeo, boxMats);
box.position.set(0,5,10);
scene.add(box);
//testSphere
const sphereGeo = new THREE.SphereGeometry(4, 40, 40);
const sphereMat = new THREE.MeshStandardMaterial({ color: 0x0000FF, wireframe: false, map: textureLoader.load(stars)});
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
scene.add(sphere);

//pyrimid 
var radius = 10;
var height = 10;
const pyrimidGeo = new THREE.CylinderGeometry(0, radius, height, 4, 1)
const pyrimidMat = new THREE.MeshStandardMaterial({color: 0xC9A764});
const pyrimid = new THREE.Mesh(pyrimidGeo, pyrimidMat);
pyrimid.position.set(0, 5, 0);
//scene.add(pyrimid);
pyrimid.castShadow = true;
//Floor
const planeGeo = new THREE.PlaneGeometry(30, 30)
const planeMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeo, planeMat);
scene.add(plane);
plane.name = 'plane';
plane.rotation.x = -.5 * Math.PI;
plane.receiveShadow = true;
//sun
const sunGeo = new THREE.SphereGeometry(5, 15, 15);
const sunMat = new THREE.MeshBasicMaterial({color: 0xFFD700, wireframe: false});
const sun = new THREE.Mesh(sunGeo, sunMat);
sun.position.set(-20,10,40);
scene.add(sun);
//Ambient
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);
//Spot
const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(-20,20,0);
spotLight.castShadow = true;
spotLight.decay = 0;
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

scene.fog = new THREE.Fog(0xFFFFFF,0,200);
scene.fog = new THREE.FogExp2(0xFFFFFF, .01);

const gui = new dat.GUI();
const guiOptions = {
    Day_Night_cycle: false,
    testScene: true,
    PyrimidScene: false,
    SphereColor: '#0000FF',
    wireframe: false,
    speed : 0.01,
    angle: 0.2,
    penumbra: 0,
    intensity : 1
};
gui.addColor(guiOptions, 'SphereColor').onChange(function (e) {
    sun.material.color.set(e);
});
gui.add(guiOptions, 'wireframe').onChange(function (e) {
    sphere.material.wireframe = e;
});
gui.add(guiOptions, 'speed', 0,.1);
gui.add(guiOptions, 'angle', 0, 1);
gui.add(guiOptions, 'penumbra', 0, 1);
gui.add(guiOptions, 'intensity', 0, 1);

gui.add(guiOptions, 'Day_Night_cycle').name('NightMode').onChange(function (enabled) {
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
gui.add(guiOptions, 'testScene').name('Scene One').onChange(function(enabled){
  if(enabled){
    scene.add(sphere);
    scene.add(plane);
    removeObject(pyrimid);
  } else{
    removeObject(sphere);
    PyrimidScene();
  }
});

var bounceAngle = 0;
const rad = 30; // Radius of the circular path
const speed = 0.1; // Angular speed
const rotationSpeed = 0.01;

function animate(time) {

    rayCaster.setFromCamera(mousePos, camera);
    const intersectObj = rayCaster.intersectObjects(scene.children);
    console.log(intersectObj);
  //for(var i = 0; i< intersectObj.lengthl;i++){

  //     if  (intersectObj[i].object.id === sphere.id){
  //
  //        intersectObj[i].object.material.color.set(0xff0000);
  //      }
  //      if  (intersectObj[i].object.name === plane.name){
  //
  //        intersectObj[i].object.material.color.set(0xff0000);
  //      }

  //    };

    bounceAngle += guiOptions.speed;
    sphere.position.y =  10*Math.abs(Math.sin(bounceAngle));

    spotLight.angle = guiOptions.angle;
    spotLight.penumbra = guiOptions.penumbra;
    spotLight.intensity = guiOptions.intensity;
    spotLightHelper.update();

    const angle = Date.now() * 0.01; // Get time in seconds
    const x = Math.cos(angle * speed) * rad;
    const z = Math.sin(angle * speed) * rad;
    const y = Math.sin(angle * speed) * rad;

    // Set the new position of the sphere
    sun.position.set(x, y, z);
    renderer.render(scene, camera);
}
function MoonToggle(){
    sun.material.color.set(0x6F749C);
}
function removeObject(object) {
  scene.remove(object);
}
function PyrimidScene(){
  var radius = 10;
  var height = 10;
  const pyrimidGeo = new THREE.CylinderGeometry(0, radius, height, 4, 1)
  const pyrimidMat = new THREE.MeshStandardMaterial({color: 0xC9A764});
  const pyrimid = new THREE.Mesh(pyrimidGeo, pyrimidMat);
  pyrimid.position.set(0, 5, 0);
  scene.add(pyrimid);
  pyrimid.castShadow = true;
}
function EarthScene(){
  const earthGeo = new THREE.SphereGeometry(5, 15, 15);
  const earthMat = new THREE.MeshBasicMaterial({color: 0x0347BC, wireframe: false});
  const earth = new THREE.Mesh(earthGeo, earthMat);
  sun.position.set(-20,10,40);
  scene.add(earth);
}

renderer.setAnimationLoop(animate);
