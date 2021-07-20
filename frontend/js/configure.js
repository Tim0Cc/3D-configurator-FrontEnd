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

//position z of camera
const position = document.querySelector('.position');

const changePosition = function () {
  camera.position.z = -((position.value) - (position.max));
}

position.addEventListener('change', changePosition);
position.addEventListener('DOMContentLoaded', changePosition());

// color
const color = document.querySelector('.color');

const changeColor = function () {
  hexColor = '0x' + color.value.slice(1)
  cube.material.color.setHex(hexColor);
}

color.addEventListener('change', changeColor);
color.addEventListener('DOMContentLoaded', changeColor());

// width
const width = document.querySelector('.width');

const changeWidth = function () {
  cube.scale.x = width.value;
}

width.addEventListener('change', changeWidth);
width.addEventListener('DOMContentLoaded', changeWidth());

//height
const height = document.querySelector('.height');

const changeHeight = function () {
  cube.scale.y = height.value;
}

height.addEventListener('change', changeHeight);
height.addEventListener('DOMContentLoaded', changeHeight());

// depth
const depth = document.querySelector('.depth');

const changeDepth = function () {
  cube.scale.z = depth.value;
}

depth.addEventListener('change', changeDepth);
depth.addEventListener('DOMContentLoaded', changeDepth());

