import * as THREE from 'three';
// import { Text } from 'troika-three-text';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import './index.css';
import { LYRICS } from './components/Words.tsx';

// Puts text in center of canvas.
function makeTextCanvas(text, width, height, y) {
    const textCtx = document.createElement('canvas').getContext('2d');

    if (!textCtx) {
        return;
    }

    textCtx.canvas.width = width;
    textCtx.canvas.height = height;
    textCtx.font = '24px monospace';
    textCtx.textAlign = 'center';
    textCtx.textBaseline = 'middle';
    textCtx.fillStyle = 'black';
    textCtx.clearRect(0, 0, textCtx.canvas.width, textCtx.canvas.height);

    const lh = 36;
    const lines = LYRICS.split('\n');

    lines.forEach((line, i) => {
        textCtx.fillText(line, width / 2, y + i * lh);
    });

    return textCtx.canvas;
}

const bottleImage = new THREE.TextureLoader().load('bottle.png');
const normals = new THREE.TextureLoader().load('normals.jpg');
// const normals = new THREE.TextureLoader().load('normals-demo.jpg');
const headlineImage = new THREE.TextureLoader().load('headline.png');

// textMorphMaterialHeadline.uniforms.text.value = headline;
// textMorphMaterialHeadline.uniforms.normals.value = normals;
// textMorphMaterialHeadline.uniforms.bottleSize.value = 2048;
// textMorphMaterialHeadline.uniforms.bottleShift.value = new THREE.Vector2(0, 0);
// textMorphMaterialHeadline.uniforms.resolution.value = new THREE.Vector2(width, height);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xffffff, 0);

const width = window.innerWidth;
const height = window.innerHeight;
const pixelRatio = window.devicePixelRatio;

renderer.setPixelRatio(pixelRatio);
renderer.setSize(width, height);

const headlineCanvas = makeTextCanvas(LYRICS, width, height, height - 100);
const headline = headlineCanvas ? new THREE.CanvasTexture(headlineCanvas) : headlineImage;

const textMorphMaterial = new THREE.ShaderMaterial({
    uniforms: {
        resolution: { value: new THREE.Vector2(width, height) }, // null
        background: { value: headline }, // null
        normalsSize: { value: 1536 }, // 0
        normalsShift: { value: new THREE.Vector2(-width / 2, -height / 2) }, //
        normals: { value: normals }, // null
    },
    vertexShader,
    fragmentShader,
});

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
camera.position.z = 5;
// TODO: set size and position
const bgGeometry = new THREE.PlaneGeometry(width, height);
const textGeometry = new THREE.PlaneGeometry(768, 768);
const bottleGeometry = new THREE.PlaneGeometry(768, 768);
const textMorphMaterialHeadline = textMorphMaterial.clone();
camera.left = width / -2;
camera.right = width / 2;
camera.top = height / 2;
camera.bottom = height / -2;
camera.updateProjectionMatrix();
const planeBg = new THREE.Mesh(bgGeometry, new THREE.MeshBasicMaterial());
const planeHeadline = new THREE.Mesh(textGeometry, textMorphMaterialHeadline);
const bottleMaterial = new THREE.MeshBasicMaterial({
    map: bottleImage,
    transparent: true,
});
const planeBottle = new THREE.Mesh(bottleGeometry, bottleMaterial);
scene.add(camera);
scene.add(planeHeadline);
// scene.add(planeBg);
scene.add(planeBottle);

document.querySelector('#root')?.appendChild(renderer.domElement);

function render() {
    renderer.clear();
    renderer.render(scene, camera);
}

let y = height;

function animate() {
    requestAnimationFrame(animate);
    y -= 1;
    const headlineCanvas = makeTextCanvas(LYRICS, width, height, y);
    textMorphMaterialHeadline.uniforms.background.value = headlineCanvas
        ? new THREE.CanvasTexture(headlineCanvas)
        : headlineImage;
    render();
}

window.setTimeout(() => {
    animate();
}, 2000);
