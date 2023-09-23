import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { imageData } from "../data";

import GalleryItems from "../components/GalleryItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import LocomotiveScroll from "locomotive-scroll";
export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // document not defined
    if(typeof window === 'undefined') return;
    const scroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      multiplier: 0.5,
      lerp: 0.1,
    });
    return () => scroll.destroy();
  }, []);

  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItems
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );
  return (
    <>
    <div className="top"></div>
    <Navbar />
    <div className="main-container">
      <div className="scroll-container" data-scroll-container ref={ref}>
        <div className="content">
          <div className="gallery">
            {images}
            <div className="gallery-helper">Scroll to discover more</div>
            <div className="behind-text fill" data-scroll data-scroll-speed>
              every body loves a good story
            </div>
            <div
              className="behind-text outline"
              data-scroll
              data-scroll-speed
            >
              every body loves a good story
            </div>
            <div />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  </>
  );
}
