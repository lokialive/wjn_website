import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import SquaresBG from "react-animated-squares";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.4,
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.05,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="home container mx-auto max-width section md:flex justify-between items-center">
      <div id="container">
        <SquaresBG count={16} speed={0.8} backgroundColor={'#ffffff'} squareColor={'#d87093'}/>
      </div>
      <div className="home_left">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          你好,👋<br></br>我是<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="home_right mt-5 md:mt-0">
        <div className="right_container">
        <img ref={myimageref} className="home_img" src={img} alt="Hungry" />
        </div>
      </div>
    </main>
  );
}

export default Home;
