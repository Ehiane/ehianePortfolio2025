export const fragmentShader = `
uniform sampler2D uTexture;
uniform float uRotationIntensity;
uniform vec2 uRotationDirection;
uniform float uChromaticAmount;
uniform float uShineIntensity;
uniform vec3 uShineColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  // Chromatic Aberration - RGB channel offset based on rotation
  vec2 aberrationOffset = uRotationDirection * uChromaticAmount * uRotationIntensity;

  float r = texture2D(uTexture, vUv + aberrationOffset).r;
  float g = texture2D(uTexture, vUv).g;
  float b = texture2D(uTexture, vUv - aberrationOffset).b;
  float alpha = texture2D(uTexture, vUv).a;

  vec3 chromaticColor = vec3(r, g, b);

  // Metallic Shine - Fresnel-based edge glow
  vec3 viewDir = normalize(vViewPosition);
  float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);

  // Shine increases with rotation intensity
  float shineAmount = fresnel * uShineIntensity * uRotationIntensity;

  // Blend chromatic color with metallic shine
  vec3 finalColor = mix(chromaticColor, uShineColor, shineAmount);

  gl_FragColor = vec4(finalColor, alpha);
}
`;
