import { Image } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function Bottle() {
    const { width, height } = useThree((state) => state.viewport);
    return (
        <Image position={[0, 0, 0]} scale={[width / 2.5, height]} transparent={true} url="/bottle-transparent.png" />
    );
}
