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

const width = document.querySelector('.width');

const changeWidth = function () {
  cube.scale.x = width.value
}

width.addEventListener('change', changeWidth);


const height = document.querySelector('.height');

const changeHeight = function () {
  cube.scale.y = height.value
}

height.addEventListener('change', changeHeight);


const depth = document.querySelector('.depth');

const changeDepth = function () {
  cube.scale.z = depth.value
}

depth.addEventListener('change', changeDepth);


// const rotationSpeedinput = document.querySelector('.rotation-speed');

// const rotationSpeed = function () {
//   let x = cube.rotation.x + rotationSpeedinput.value/100;
//   let y = cube.rotation.y + rotationSpeedinput.value/100;
//   animate(x, y) 
// }

// rotationSpeedinput.addEventListener('change', rotationSpeed);

