import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useLogoTexture } from './hooks/useLogoTexture';
import { vertexShader } from './shaders/logoVertexShader.glsl';
import { fragmentShader } from './shaders/logoFragmentShader.glsl';

const MAX_ROTATE_X = 20;
const MAX_ROTATE_Y = 30;

const LogoMesh = ({ rotateX, rotateY, rotationIntensity, rotationDirection }) => {
  const texture = useLogoTexture();

  return (
    <mesh
      rotation={[
        THREE.MathUtils.degToRad(rotateX),
        THREE.MathUtils.degToRad(rotateY),
        0
      ]}
    >
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={{
          uTexture: { value: texture },
          uRotationIntensity: { value: rotationIntensity },
          uRotationDirection: { value: new THREE.Vector2(...rotationDirection) },
          uChromaticAmount: { value: 0.006 },
          uShineIntensity: { value: 0.4 },
          uShineColor: { value: new THREE.Color(0xC0C0C0) }
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const MetallicLogo3D = ({ rotateX, rotateY, isAnimating, width, height }) => {
  const rotationIntensity = useMemo(() => {
    const xNorm = Math.abs(rotateX) / MAX_ROTATE_X;
    const yNorm = Math.abs(rotateY) / MAX_ROTATE_Y;
    return Math.sqrt(xNorm * xNorm + yNorm * yNorm);
  }, [rotateX, rotateY]);

  const rotationDirection = useMemo(() => {
    const magnitude = Math.sqrt(rotateY * rotateY + rotateX * rotateX);
    if (magnitude === 0) return [0, 0];
    return [
      rotateY / MAX_ROTATE_Y,
      rotateX / MAX_ROTATE_X
    ];
  }, [rotateX, rotateY]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <Suspense fallback={null}>
          <LogoMesh
            rotateX={rotateX}
            rotateY={rotateY}
            rotationIntensity={rotationIntensity}
            rotationDirection={rotationDirection}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MetallicLogo3D;
