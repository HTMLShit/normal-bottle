import { Image } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function Background() {
    const { width, height } = useThree((state) => state.viewport);
    return (
        <Image
            position={[0, 0, 0]}
            scale={[width, height]}
            url="https://images.pexels.com/photos/19453408/pexels-photo-19453408/free-photo-of-town-by-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
    );
}
