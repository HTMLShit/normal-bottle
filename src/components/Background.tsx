import { Image } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { BACKGROUND_URL } from '../constants.ts';

export function Background() {
    const { width, height } = useThree((state) => state.viewport);
    return <Image position={[0, 0, 0]} scale={[width, height]} url={BACKGROUND_URL} />;
}
