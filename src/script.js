import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Time with js function
//let time = Date.now()

//CLock with three.js
const clock = new THREE.Clock()

//animate with  gsap (internal tick so in our tick function only have to render )
gsap.to(mesh.position, {duration: 1, delay:  1, x: 2})
gsap.to(mesh.position, {duration: 1, delay:  2, x: 0})

//animations
const tick = () => {
    //Time with js function to animate at the same speed regardless of pc framerate
    // const currentTime = Date.now()
    // const deltaTime  = currentTime  - time
    // time = currentTime

    //deltatime  with three.js
    const elapsedTime = clock.getElapsedTime()
    
    //Update objects
    //mesh.rotation.x = elapsedTime  * Math.PI * 2 //revolution every second

    //doing circles with math 
    // mesh.position.x = Math.sin(elapsedTime)
    // mesh.position.y = Math.cos(elapsedTime)

    //  camera.position.x = Math.sin(elapsedTime)
    //  camera.position.y = Math.cos(elapsedTime)
    //  camera.lookAt(mesh.position)


    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()