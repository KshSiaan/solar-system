import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import space from "./src/images/2k_stars (2).jpg";
import sunMap from "./src/images/sun.jpg";
import mercuryMap from "./src/images/mercury.jpg";
import venusMap from "./src/images/venus_surface.jpg";
import earthMap from "./src/images/2k_earth_daymap.jpg";
import moonMap from "./src/images/2k_moon.jpg";
import marsMap from "./src/images/2k_mars.jpg";
import jupiterMap from "./src/images/2k_jupiter.jpg";
import saturnMap from "./src/images/2k_saturn.jpg";
import uranusMap from "./src/images/2k_uranus.jpg";
import neptuneMap from "./src/images/2k_neptune.jpg";
import satRingMap from "./src/images/2k_saturn_ring_alpha.png";

const cheemsUrl = new URL(
  "./src/images/doggy_meme_dog_ps1.glb",
  import.meta.url
);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-90, 140, 140);
orbit.update();

const ambLight = new THREE.AmbientLight(0x333333);
scene.add(ambLight);

const cubeText = new THREE.CubeTextureLoader();

scene.background = cubeText.load([space, space, space, space, space, space]);

const text = new THREE.TextureLoader();

const assetLoader = new GLTFLoader();
let model;

assetLoader.load(
  cheemsUrl.href,
  (gltf) => {
    model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0);
    model.scale.set(2, 2, 2);
  },
  undefined,
  (error) => {
    console.error("didnt load");
  }
);

const sunGeo = new THREE.SphereGeometry(20, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load(sunMap),
  side: THREE.DoubleSide,
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

const mercuryGeo = new THREE.SphereGeometry(3, 30, 30);
const mercuryMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(mercuryMap),
});
const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
sun.add(mercury);
mercury.position.x = 34;
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);

const venusGeo = new THREE.SphereGeometry(3.5, 30, 30);
const venusMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(venusMap),
});
const venus = new THREE.Mesh(venusGeo, venusMat);
sun.add(venus);
venus.position.x = 48;
const venusObj = new THREE.Object3D();
venusObj.add(venus);
scene.add(venusObj);

const earthGeo = new THREE.SphereGeometry(4, 30, 30);
const earthMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(earthMap),
});
const earth = new THREE.Mesh(earthGeo, earthMat);
sun.add(earth);
earth.position.x = 70;
const earthObj = new THREE.Object3D();
earthObj.add(earth);
scene.add(earthObj);

// const moonGeo = new THREE.SphereGeometry(1, 30, 30);
// const moonMat = new THREE.MeshStandardMaterial({
//   map: new THREE.TextureLoader().load(moonMap),
// });
// const moon = new THREE.Mesh(moonGeo, moonMat);
// earth.add(moon);
// moon.position.x = 7;

const marsGeo = new THREE.SphereGeometry(2.6, 30, 30);
const marsMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(marsMap),
});
const mars = new THREE.Mesh(marsGeo, marsMat);
sun.add(mars);
mars.position.x = 90;
const marsObj = new THREE.Object3D();
marsObj.add(mars);
scene.add(marsObj);

const jupiterGeo = new THREE.SphereGeometry(9, 30, 30);
const jupiterMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(jupiterMap),
});
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMat);
sun.add(jupiter);
jupiter.position.x = 140;
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
scene.add(jupiterObj);

const saturnGeo = new THREE.SphereGeometry(6, 30, 30);
const saturnMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(saturnMap),
});
const saturn = new THREE.Mesh(saturnGeo, saturnMat);
sun.add(saturn);
saturn.position.x = 180;
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
scene.add(saturnObj);

const satRingGeo = new THREE.RingGeometry(8, 14, 40);
const satRingMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(satRingMap),
  side: THREE.DoubleSide,
});
const satRing = new THREE.Mesh(satRingGeo, satRingMat);
saturn.add(satRing);
satRing.position.y = 0;
satRing.rotation.x = -0.6 * Math.PI;

const uranusGeo = new THREE.SphereGeometry(4, 30, 30);
const uranusMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(uranusMap),
});
const uranus = new THREE.Mesh(uranusGeo, uranusMat);
sun.add(uranus);
uranus.position.x = 240;
const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
scene.add(uranusObj);

const neptuneGeo = new THREE.SphereGeometry(4, 30, 30);
const neptuneMat = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load(neptuneMap),
});
const neptune = new THREE.Mesh(neptuneGeo, neptuneMat);
sun.add(neptune);
neptune.position.x = 280;
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
scene.add(neptuneObj);

var light = new THREE.PointLight(0xffffff, 5000, 1000);
light.position.set(0, 0, 0);
scene.add(light);

function anim() {
  sun.rotateY(0.002);
  mercury.rotateY(0.003);
  mercuryObj.rotateY(0.02);
  venus.rotateY(0.005);
  venusObj.rotateY(0.01);
  earth.rotateY(0.08);
  earthObj.rotateY(0.011);
  // moon.rotateY(0.008);
  mars.rotateY(0.07);
  marsObj.rotateY(0.012);
  jupiter.rotateY(0.1);
  jupiter.rotateX(0.01);
  jupiterObj.rotateY(0.003);
  saturnObj.rotateY(0.0025);
  uranus.rotateY(0.05);
  uranusObj.rotateY(0.001);
  neptune.rotateY(0.045);
  neptuneObj.rotateY(0.0005);
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(anim);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
