import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          // markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      {/* <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div> */}
      <div ref={slider} className="container">
        <div className="panel blue">1</div>
        <div className="panel red">2</div>
        <div className="panel orange">3</div>
        <div className="panel purple">4</div>
        <div className="panel blue">5</div>
        <div className="panel red">6</div>
        <div className="panel purple">7</div>
        <div className="panel blue">8</div>

      </div>
      {/* <div className="lastContainer">Last Container</div> */}
    </div>
  );
}
