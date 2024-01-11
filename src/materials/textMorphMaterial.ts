import * as THREE from 'three';
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

export const textMorphMaterial = new THREE.ShaderMaterial({
    uniforms: {
        resolution: { type: 'v2', value: null },
        bottleSize: { type: 'f', value: 0 },
        bottleShift: { type: 'v2', value: 0 },
        text: { type: 't', value: null },
        normals: { type: 't', value: null },
    },
    vertexShader,
    fragmentShader,
});
