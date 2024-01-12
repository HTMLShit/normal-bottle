import * as THREE from 'three';
import './index.css';
import { LYRICS } from './components/Words.tsx';
import { textMorphMaterial } from './materials/textMorphMaterial.ts';

const width = window.innerWidth;
const height = window.innerHeight;
const pixelRatio = window.devicePixelRatio;
const fontSize = 32;
const lineHeight = 1.5;

function renderTextToCanvas(text = '', width = 512, height = 512, y = 0) {
    const ctx = document.createElement('canvas').getContext('2d');

    if (!ctx) {
        return null;
    }

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.font = `${fontSize * pixelRatio}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const lh = fontSize * pixelRatio * lineHeight;
    const lines = text.split('\n');

    lines.forEach((line, i) => {
        ctx.fillText(line, width / 2, y + i * lh);
    });

    return ctx.canvas;
}

const bottleTexture = new THREE.TextureLoader().load('milk.png');
const normals = new THREE.TextureLoader().load('milk_normal_border.png');

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);

renderer.setClearColor(0xffffff, 0);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(width, height);

function init() {
    camera.position.z = 5;
    camera.left = width / -2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = height / -2;
    camera.updateProjectionMatrix();

    const textGeometry = new THREE.PlaneGeometry(768, 768);
    const bottleGeometry = new THREE.PlaneGeometry(1024, 1024);
    const planeText = new THREE.Mesh(textGeometry, textMorphMaterial);
    const bottleMaterial = new THREE.MeshBasicMaterial({
        map: bottleTexture,
        transparent: true,
        opacity: 0.3,
        color: new THREE.Color(0x006a69),
    });
    const planeBottle = new THREE.Mesh(bottleGeometry, bottleMaterial);
    scene.add(camera);
    scene.add(planeText);
    scene.add(planeBottle);

    document.querySelector('#root')?.appendChild(renderer.domElement);
}

function render() {
    renderer.clear();
    renderer.render(scene, camera);
}

let y = 1024 * pixelRatio;

function animate() {
    requestAnimationFrame(animate);

    y -= 3;
    const textCanvas = renderTextToCanvas(LYRICS, 1024 * pixelRatio, 1024 * pixelRatio, y);

    textMorphMaterial.uniforms.normals.value = normals;
    textMorphMaterial.uniforms.normalsSize.value = 2048 * 0.98;
    textMorphMaterial.uniforms.normalsShift.value = new THREE.Vector2(-width / 2, -height / 2);
    textMorphMaterial.uniforms.resolution.value = new THREE.Vector2(width, height);
    textMorphMaterial.uniforms.background.value = textCanvas ? new THREE.CanvasTexture(textCanvas) : null;

    render();
}

window.setTimeout(() => {
    init();
    animate();
}, 500);
