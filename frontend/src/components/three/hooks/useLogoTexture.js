import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const useLogoTexture = () => {
  const texture = useLoader(
    TextureLoader,
    '/images/mettalic_ehiane_logo.png'
  );

  // Configure for proper transparency
  texture.premultiplyAlpha = true;

  return texture;
};
