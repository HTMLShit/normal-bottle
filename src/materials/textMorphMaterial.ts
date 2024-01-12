import * as THREE from 'three';
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

export const textMorphMaterial = new THREE.ShaderMaterial({
    uniforms: {
        resolution: { value: null },
        background: { value: null },
        normalsSize: { value: 0 },
        normalsShift: { value: null },
        normals: { value: null },
    },
    vertexShader,
    fragmentShader,
});
