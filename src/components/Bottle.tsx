import {
    useLoader,
    // useThree
} from '@react-three/fiber';
import { TextureLoader } from 'three';

export function Bottle() {
    // const { width, height } = useThree((state) => state.viewport);
    const texture = useLoader(TextureLoader, 'bottle.png');

    return (
        <>
            <ambientLight intensity={3} />
            <directionalLight />
            <mesh>
                <planeGeometry attach="geometry" args={[5, 5]} />
                <meshStandardMaterial attach="material" map={texture} toneMapped={false} transparent={true} />
            </mesh>
        </>
    );
}
