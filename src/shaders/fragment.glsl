uniform vec2 resolution;
uniform float normalsSize;
uniform vec2 normalsShift;
uniform sampler2D background;
uniform sampler2D normals;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    vec2 bottle_uv = (normalsShift + gl_FragCoord.xy - (resolution / 2.0 - vec2(normalsSize / 2.0))) / vec2(normalsSize);
    vec3 rgb = texture2D(normals, bottle_uv).rgb;
    uv = uv + (rgb.rg - vec2(0.5)) * 0.1 / pow(rgb.b, 10.);
    gl_FragColor = texture2D(background, uv);
}