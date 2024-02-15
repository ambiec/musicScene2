import './style.css'
import * as THREE from 'three'
import { macaroni, plane, grid } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
let mesh //expose mesh to animate fn

init()
function init() {
  //set up our renderer default settings, add scene/canvas to webpage
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  scene.background = new THREE.Color(0xde8d14) // #Source: https://stackoverflow.com/questions/16177056/changing-three-js-background-to-transparent-or-other-color
  
  meshes.grid = grid()
  meshes.macaroni = macaroni()
  meshes.plane = plane()
  lights.default = addLight()

  scene.add(meshes.grid)
  // scene.add(meshes.plane)
  scene.add(meshes.macaroni)
  scene.add(lights.default)

  camera.position.set(0,0,5)
  resize()
  animate()
}

function resize() {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate() {
  requestAnimationFrame(animate)

  meshes.macaroni.rotation.x += 0.01

  renderer.render(scene, camera)
}
