import React, { useState } from "react";

function ImageCarousel(props) {
  const [checked, setChecked] = useState(2);

  const updateChecked = (elem) => {
    const order = parseInt(elem.target.getAttribute("order"));
    setChecked(order);
  };

  return (
    <div
      className={`order-2 ${
        props.left ? "lg:order-2" : "lg:order-1"
      } h-[16rem] sm:h-[18rem] md:h-[24rem] w-full lg:w-lg xl:w-xl 2xl:w-2xl`}
    >
      <RadioBtn
        order={1}
        title={props.title}
        checked={false}
        updateChecked={updateChecked}
      />
      <RadioBtn
        order={2}
        title={props.title}
        checked={true}
        updateChecked={updateChecked}
      />
      <RadioBtn
        order={3}
        title={props.title}
        checked={false}
        updateChecked={updateChecked}
      />

      <div className="carousel-cont relative flex items-center justify-center h-full">
        <Image order={1} src={props.src1} alt={props.title} checked={checked} />
        <Image order={2} src={props.src2} alt={props.title} checked={checked} />
        <Image order={3} src={props.src3} alt={props.title} checked={checked} />
      </div>
    </div>
  );
}

function RadioBtn(props) {
  return (
    <input
      className="hidden"
      type={"radio"}
      id={`${props.title}-Btn-${props.order}`}
      order={props.order}
      defaultChecked={props.checked ? true : false}
      onClick={props.updateChecked}
    />
  );
}

function Image(props) {
  return (
    <label
      className={`${
        props.checked === 1 && props.order === 1
          ? "focus-img-center hover:scale-110"
          : props.checked === 1 && props.order === 2
          ? "blur-img-left"
          : props.checked === 1 && props.order === 3
          ? "blur-img-right"
          : props.checked === 2 && props.order === 1
          ? "blur-img-left"
          : props.checked === 2 && props.order === 2
          ? "focus-img-center hover:scale-110"
          : props.checked === 2 && props.order === 3
          ? "blur-img-right"
          : props.checked === 3 && props.order === 1
          ? "blur-img-left"
          : props.checked === 3 && props.order === 2
          ? "blur-img-right"
          : props.checked === 3 && props.order === 3
          ? "focus-img-center hover:scale-110"
          : "none"
      } absolute w-[70%] lg:w-[75%] flex items-center cursor-pointer transition-all duration-500`}
      htmlFor={`${props.alt}-Btn-${props.order}`}
    >
      <img
        className="rounded-lg shadow-2xl shadow-black"
        src={props.src}
        alt={`${props.alt}-Img${props.order}`}
      ></img>
    </label>
  );
}

export default ImageCarousel;
