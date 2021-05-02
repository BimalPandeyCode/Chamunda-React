import react, { useRef, useState } from "react";
import Slick from "react-slick";
import "./topslider.css";
const TopSlider = () => {
  const sliderReference = useRef();
  const [useSlick, setUseSlick] = useState({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  // const setting = {
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   autoplay: false,
  //   autoplaySpeed: 600,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const slideBack = () => {
    sliderReference.current.slickPrev();
  };
  const slideFront = () => {
    sliderReference.current.slickNext();
  };
  const stopSLick = () => {
    console.log(useSlick);
    if (useSlick.autoplay) {
      setUseSlick({ ...useSlick, autoplay: false });
    } else {
      setUseSlick({ ...useSlick, autoplay: true });
    }
    console.log(useSlick);
  };
  return (
    <>
      <div className="buttonHolder">
        <button className="topSlider-prevButton" onClick={slideBack}>
          <i className="fas fa-chevron-left fa-2x"></i>
        </button>
        <button className="topSlider-nextButton" onClick={slideFront}>
          <i className="fas fa-chevron-right fa-2x"></i>
        </button>
      </div>
      <Slick {...useSlick} className="topSlider" ref={sliderReference}>
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1605804097616-ed12e891e514?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1525969173369-c9d513909d5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDE2JTNBOXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </Slick>
      {/* <button onClick={stopSLick}>Stop slick</button> */}
    </>
  );
};

export default TopSlider;
