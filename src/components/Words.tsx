import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export const LYRICS = `
Just a castaway, an island lost at sea, oh
Another lonely day with no one here but me, oh
More loneliness than any man could bear
Rescue me before I fall into despair, oh

I'll send an S.O.S to the world
I'll send an S.O.S to the world
I hope that someone gets my
I hope that someone gets my
I hope that someone gets my message in a bottle, yeah
Message in a bottle, yeah

A year has passed since I wrote my note
I should have known this right from the start
Only hope can keep me together
Love can mend your life or love can break your heart

I'll send an S.O.S to the world
I'll send an S.O.S to the world
I hope that someone gets my
I hope that someone gets my
I hope that someone gets my message in a bottle, yeah
Message in a bottle, yeah
Oh, message in a bottle, yeah
Message in a bottle, yeah

Walked out this morning, I don't believe what I saw
Hundred billion bottles washed up on the shore
Seems I'm not alone at being alone
Hundred billion castaways, looking for a home

I'll send an S.O.S to the world
I'll send an S.O.S to the world
I hope that someone gets my
I hope that someone gets my
I hope that someone gets my message in a bottle, yeah
Message in a bottle, yeah
Message in a bottle, oh
Message in a bottle, yeah

Sending out an S.O.S
Sending out an S.O.S
I'm sending out an S.O.S
I'm sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S

Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S

Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
Sending out an S.O.S
`;

export function Words() {
    const state = useThree();
    const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12]);
    const shared = {
        color: 'white',
        size: 0.1,
    };

    return (
        <>
            <Text children={LYRICS} position={[0, 0, 5]} {...shared} />
        </>
    );
}
