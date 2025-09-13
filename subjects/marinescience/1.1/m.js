// A simple Three.js script to create a spinning cube with a full-screen canvas.
import * as THREE from 'three';
import { DragControls } from 'three/addons/controls/DragControls.js';

// 1. Scene setup
const scene = new THREE.Scene();

// 2. Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Object creation
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Animation and Control Logic
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

let requestID; // Declare requestID in a scope accessible to all functions


const controls = new DragControls([cube], camera, renderer.domElement);

controls.addEventListener('dragstart', function (event) {
    // When the drag starts, change the color to red
    event.object.material.color.set(0xff0000);
});

// Add this new event listener to handle the movement
controls.addEventListener('drag', function (event) {
    // The DragControls automatically updates the object's position, so no code is needed here.
    // However, you could add custom logic if you wanted to, like snapping to a grid.
});

controls.addEventListener('dragend', function (event) {
    // When the drag ends, change the color back to green
    event.object.material.color.set(0x00ff00);
});







function animate() {
  requestID = requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// Initial call to start the animation
animate();

// Event listener for the pause button
pauseButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  cancelAnimationFrame(requestID);
  playButton.style.display = 'block';
});

// Event listener for the play button
playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
  animate(); // Restart the animation loop
});

// 6. Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});