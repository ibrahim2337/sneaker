import { useState, useEffect, useRef } from "react";
import "./Banner.css";
import img1 from "../../assets/banner/1.png";
import img2 from "../../assets/banner/2.png";
import img3 from "../../assets/banner/3.png";

const Banner = () => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const dotsRef = useRef(null);
  const autoPlayRef = useRef(null);

  const images = [img1, img2, img3];

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1) % images.length);
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setActive(index);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      clearInterval(autoPlayRef.current);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const dots = dotsRef.current;

    if (carousel && dots) {
      const items = carousel.querySelectorAll(".item");
      const activeItem = items[active];
      const activeDot = dots.querySelectorAll("li")[active];

      items.forEach((item) => item.classList.remove("active"));
      activeItem.classList.add("active");

      const activeDotElement = dots.querySelectorAll("li")[active];
      dots
        .querySelectorAll("li")
        .forEach((dot) => dot.classList.remove("active"));
      activeDotElement.classList.add("active");

      const indicatorNumber = carousel.querySelector(".number");
      if (indicatorNumber) {
        indicatorNumber.innerText = `0${active + 1}`;
      }
    }
    startAutoPlay();
  }, [active]);

  return (
    <div>
      <section className="carousel " ref={carouselRef}>
        <div className="list">
          {images.map((img, index) => (
            <div
              className={`item ${active === index ? "active" : ""}`}
              key={index}
            >
              <figure>
                <img src={img} alt={`Slide ${index + 1}`} />
              </figure>
              <div className="content">
                <p className="category">Sport Shoes</p>
                <h2>NIKE D.0{index + 1}</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  facere ipsa blanditiis quidem dignissimos enim quam corrupti
                  praesentium ipsam assumenda?
                </p>
                <div className="more">
                  <button>Add To Cart</button>
                  <button>
                    <i className="fa-solid fa-play"></i> See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button onClick={prevSlide} id="prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={nextSlide} id="next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="indicators" ref={dotsRef}>
          <div className="number">0{active + 1}</div>
          <ul>
            {images.map((_, index) => (
              <li
                key={index}
                onClick={() => goToSlide(index)}
                className={active === index ? "active" : ""}
              ></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Banner;
