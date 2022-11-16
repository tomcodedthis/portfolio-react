import React from "react";

function Connect() {
  return (
    <div className="flex flex-col items-center py-32 px-6 md:px-16 max-w-8xl mx-auto gap-8 lg:gap-14 duration-500">
      <Form />
      <Links
        email="tomcodedthis@gmail.com"
        icon1={"github"}
        icon1Link="https://github.com/tomcodedthis"
        icon2={"linkedin"}
        icon2Link="https://www.linkedin.com/in/tom-howcroft"
      />
    </div>
  );
}

function Form() {
  const inputValues = () => {
    const form = document.querySelector("#email_form");
    const nameValue = form.querySelector('input[name="extra_name"]');
    const nameInput = form.querySelector('input[name="name"]');
    const emailValue = form.querySelector('input[name="subject"]');
    const emailInput = form.querySelector('input[name="email"]');

    nameValue.value = nameInput.value;
    emailValue.value = emailInput.value;
  };

  return (
    <form
      id="email_form"
      method="post"
      action="https://postmail.invotes.com/send"
      className={
        "flex flex-col justify-center gap-6 h-full w-full max-w-[900px] text-white text-lg md:text-xl lg:text-2xl"
      }
    >
      <div className="grid sm:grid-cols-[40%_calc(60%_-_1rem)] gap-4">
        <Input
          name="name"
          type={"text"}
          placeholder="Name..."
          onInput={inputValues}
        />
        <Input
          name="email"
          type={"text"}
          placeholder="Email..."
          required="True"
          onInput={inputValues}
        />
      </div>

      <textarea
        name="text"
        placeholder="Message..."
        required
        className={
          "bg-primary border-2 border-sky-900 rounded-md px-4 py-2 duration-200 hover:border-sky-700 focus:outline-none focus:border-sky-500"
        }
      ></textarea>

      <Input
        id="submit_form"
        type={"submit"}
        value="SEND"
        className={"font-bold tracking-wide hover:text-sky-400 cursor-pointer"}
      />

      <input name="extra_name" type={"hidden"}></input>
      <input name="subject" type={"hidden"}></input>
      <input
        name="access_token"
        type={"hidden"}
        value="zdn2o5l11cl7z0m123u7u112"
      ></input>
      <input
        name="success_url"
        type={"hidden"}
        value="https://github.com/tomcodedthis"
      ></input>
      <input
        name="error_url"
        type={"hidden"}
        value="https://github.com/tomcodedthis"
      ></input>
    </form>
  );
}

function Input(props) {
  return (
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      className={`bg-primary border-2 border-sky-900 rounded-md px-4 py-2 duration-200 hover:border-sky-700 focus:outline-none focus:border-sky-500 ${props.className}`}
      onInput={props.onInput}
    ></input>
  );
}

function Links(props) {
  return (
    <div className="flex flex-col items-center gap-10 font-semibold tracking-wide text-2xl md:text-3xl lg:text-4xl">
      <div className="flex gap-10">
        <a href={props.icon1Link} target="_blank" rel="noreferrer">
          <i
            className={`fa-brands fa-${props.icon1} fa-2x opacity-70 hover:opacity-100 duration-500`}
          ></i>
        </a>
        <a href={props.icon2Link} target="_blank" rel="noreferrer">
          <i
            className={`fa-brands fa-${props.icon2} fa-2x opacity-70 hover:opacity-100 duration-500`}
          ></i>
        </a>
      </div>

      <div
        className="cursor-pointer opacity-70 hover:opacity-100 duration-500"
        onClick={() => {
          window.open(`mailto:${props.email}`);
        }}
      >
        {props.email}
      </div>
    </div>
  );
}

export default Connect;
