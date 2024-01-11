import { Lyrics, LyricsWithRef } from './Lyrics.tsx';
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig';
import { MutableRefObject, useRef } from 'react';
import { Bottle } from './Bottle.tsx';
import { Words } from './Words.tsx';
import { MeshDistortMaterial } from '@react-three/drei';
import { WebGLText } from '@14islands/r3f-scroll-rig/powerups';

export function LyricsScene() {
    const el = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

    return (
        <>
            <LyricsWithRef ref={el} />

            <UseCanvas>
                <ScrollScene track={el}>
                    {(props) => (
                        <mesh {...props}>
                            {/*<Bottle />*/}
                            {/*<Words />*/}
                            <Lyrics />
                        </mesh>
                    )}
                </ScrollScene>
            </UseCanvas>
        </>
    );
}
