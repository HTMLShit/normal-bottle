import { Canvas } from '@react-three/fiber';
import { Words } from './components/Words.tsx';
import { Bottle } from './components/Bottle.tsx';
import './App.css';
import { Background } from './components/Background.tsx';

export default function App() {
    return (
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
            <Background />
            <Words />
            <Bottle />
        </Canvas>
    );
}
