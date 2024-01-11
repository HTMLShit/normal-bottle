import './Lyrics.css';
import { forwardRef, useRef } from 'react';
import { LyricsScene } from './LyricsScene.tsx';
import { WebGLText } from '@14islands/r3f-scroll-rig/powerups';
import { ScrollScene, UseCanvas, useScrollRig } from '@14islands/r3f-scroll-rig';

type LyricsProps = React.HTMLProps<HTMLElement>;

function WebGLArticle({ children, className, ...props }: any) {
    const el = useRef();
    const { hasSmoothScrollbar } = useScrollRig();

    return (
        <>
            <article ref={el}>{children}</article>

            {hasSmoothScrollbar && (
                <UseCanvas debug={false}>
                    <ScrollScene track={el}>
                        {(props) => (
                            <WebGLText
                                el={el} // getComputedStyle is called on this element
                                {...props}
                            >
                                {children}
                            </WebGLText>
                        )}
                    </ScrollScene>
                </UseCanvas>
            )}
        </>
    );
}
export function Lyrics() {
    return (
        <WebGLArticle className="lyrics">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum
            debitis eos et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium
            ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi
            aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis placeat,
            porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
            amet animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis
            placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus ad amet animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias
            perspiciatis placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos et harum incidunt inventore
            itaque modi molestias perspiciatis placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos et harum
            incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium ratione recusandae. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos
            et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium ratione
            recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur
            culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro
            praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet
            animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis
            placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus ad amet animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias
            perspiciatis placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos et harum incidunt inventore
            itaque modi molestias perspiciatis placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos et harum
            incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium ratione recusandae. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos
            et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium ratione
            recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur
            culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro
            praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet
            animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis
            placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus ad amet animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias
            perspiciatis placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos et harum incidunt inventore
            itaque modi molestias perspiciatis placeat, porro praesentium ratione recusandae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos et harum
            incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium ratione recusandae. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur culpa cum debitis eos
            et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro praesentium ratione
            recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet animi aspernatur
            culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis placeat, porro
            praesentium ratione recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet
            animi aspernatur culpa cum debitis eos et harum incidunt inventore itaque modi molestias perspiciatis
            placeat, porro praesentium ratione recusandae.
            {/*<p className="lyrics__verse">*/}
            {/*    <span>Just a castaway, an island lost at sea, oh</span>*/}
            {/*    <span>Another lonely day with no one here but me, oh</span>*/}
            {/*    <span>More loneliness than any man could bear</span>*/}
            {/*    <span>Rescue me before I fall into despair, oh</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__chorus">*/}
            {/*    <span>I'll send an S.O.S to the world</span>*/}
            {/*    <span>I'll send an S.O.S to the world</span>*/}
            {/*    <span>I hope that someone gets my</span>*/}
            {/*    <span>I hope that someone gets my</span>*/}
            {/*    <span>I hope that someone gets my message in a bottle, yeah</span>*/}
            {/*    <span>Message in a bottle, yeah</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__verse">*/}
            {/*    <span>A year has passed since I wrote my note</span>*/}
            {/*    <span>I should have known this right from the start</span>*/}
            {/*    <span>Only hope can keep me together</span>*/}
            {/*    <span>Love can mend your life or love can break your heart</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__chorus">*/}
            {/*    <span>I'll send an S.O.S to the world</span>*/}
            {/*    <span>I'll send an S.O.S to the world</span>*/}
            {/*    <span>I hope that someone gets my</span>*/}
            {/*    <span>I hope that someone gets my</span>*/}
            {/*    <span>I hope that someone gets my message in a bottle, yeah</span>*/}
            {/*    <span>Message in a bottle, yeah</span>*/}
            {/*    <span>Oh, message in a bottle, yeah</span>*/}
            {/*    <span>Message in a bottle, yeah</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__verse">*/}
            {/*    <span>Walked out this morning, I don't believe what I saw</span>*/}
            {/*    <span>Hundred billion bottles washed up on the shore</span>*/}
            {/*    <span>Seems I'm not alone at being alone</span>*/}
            {/*    <span>Hundred billion castaways, looking for a home</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__chorus">*/}
            {/*    <span>I'll send an S.O.S to the world</span>*/}
            {/*    <span>I'll send an S.O.S to the world</span>*/}
            {/*    <span>I hope that someone gets my</span>*/}
            {/*    <span>I hope that someone gets my</span>*/}
            {/*    <span>I hope that someone gets my message in a bottle, yeah</span>*/}
            {/*    <span>Message in a bottle, yeah</span>*/}
            {/*    <span>Message in a bottle, oh</span>*/}
            {/*    <span>Message in a bottle, yeah</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__chorus">*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>I'm sending out an S.O.S</span>*/}
            {/*    <span>I'm sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__chorus">*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*</p>*/}
            {/*<p className="lyrics__chorus">*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*    <span>Sending out an S.O.S</span>*/}
            {/*</p>*/}
        </WebGLArticle>
    );
}

export const LyricsWithRef = forwardRef<HTMLDivElement, LyricsProps>((props, ref) => (
    <div {...props} ref={ref}>
        <Lyrics />
    </div>
));
