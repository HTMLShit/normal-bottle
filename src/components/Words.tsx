import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export function Words() {
    const state = useThree();
    const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12]);
    const shared = {
        color: 'white',
    };

    return (
        <>
            <Text children="Through" position={[-width / 4, height / 2, 4]} {...shared} />
            <Text children="The" position={[0, 0, 5]} {...shared} />
            <Text children="Bottle" position={[width / 4, -height / 2, 5]} {...shared} />
        </>
    );
}
