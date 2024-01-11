import { Canvas } from '@react-three/fiber';
import { Words } from './components/Words.tsx';
import { Bottle } from './components/Bottle.tsx';
import './App.css';
import { Background } from './components/Background.tsx';
// import { GlobalCanvas, ScrollScene, SmoothScrollbar, UseCanvas } from '@14islands/r3f-scroll-rig';
// import { Lyrics } from './components/Lyrics.tsx';
// import { useRef } from 'react';
// import { LyricsScene } from './components/LyricsScene.tsx';
// import { MeshDistortMaterial } from '@react-three/drei';

export default function App() {
    return (
        // <>
        //     <GlobalCanvas />
        //     <SmoothScrollbar>
        //         {/*{(bind) => (*/}
        //         {/*    <div {...bind}>*/}
        //         {/*        <Lyrics />*/}
        //         {/*        <MeshDistortMaterial speed={1.4} distort={0.14} />*/}
        //         {/*    </div>*/}
        //         {/*)}*/}
        //     </SmoothScrollbar>
        //     <LyricsScene />
        // </>
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
            <group>
                <Background />
                <Words />
                <Bottle />
            </group>
        </Canvas>
    );
}
