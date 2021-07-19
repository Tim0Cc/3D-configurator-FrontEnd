const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();


// CUSTOM JS for configuration

const position = document.querySelector('.position-z');

const changePosition = function () {
  camera.position.z = -((position.value) - (position.max));
}

position.addEventListener('change', changePosition);

const size = document.querySelector('.size');

const changeSize = function () {
  console.log('from size')
  // camera.size.z = -((size.value) - (size.max))
}

size.addEventListener('change', changeSize);


// const rotationSpeedinput = document.querySelector('.rotation-speed');

// const rotationSpeed = function () {
//   let x = cube.rotation.x + rotationSpeedinput.value/100;
//   let y = cube.rotation.y + rotationSpeedinput.value/100;
//   animate(x, y) 
// }

// rotationSpeedinput.addEventListener('change', rotationSpeed);

