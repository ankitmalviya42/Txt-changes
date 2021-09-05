import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  function textHandleChange(event) {
    setText(event.target.value);
  }

  function TextUpperCase() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" The text is uppercase ", "success");
  }

  function TextLowerCase() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" The text is lowercase ", "success");
  }

  function ClearAll() {
    setText(" ");
    props.showAlert(" All Clear Text ", "success");
  }

  function ExtraSpaceRemove() {
    let newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space Removed ", "success");
  }
  function CopyText() {
    let copyValue = document.getElementById("copyTextArea");

    copyValue.select();

    if (copyValue.value.length >= 1) {
      navigator.clipboard.writeText(copyValue.value);
      props.showAlert("The Copied Clipboard", "success");
    } else {
      props.showAlert("Please Enter a Text", "danger");
    }
  }

  function Capitalize() {
    const lower = text.toLowerCase();
    setText(text.charAt(0).toUpperCase() + lower.slice(1));
    props.showAlert("The First Letter is capital", "success");
  }

  return (
    <div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3 className="my-5 ">Enter the text to analyze below</h3>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="copyTextArea"
            value={text}
            onChange={textHandleChange}
            style={{
              height: "200px",
              backgroundColor: props.mode === "dark" ? "#293951" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
          <label
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            htmlFor="floatingTextarea2"
          >
            Enter a some text{" "}
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1 my-3"
          onClick={TextUpperCase}
          disabled={text.length === 0}
        >
          Convert To Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-3"
          onClick={TextLowerCase}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-3"
          onClick={ClearAll}
        >
          Clear All
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-3"
          onClick={CopyText}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-3"
          onClick={ExtraSpaceRemove}
        >
          Extra Remove Space
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-3"
          onClick={Capitalize}
        >
          Capitalize
        </button>

        <div className="container">
          <h5>Summary</h5>
          <p>
            Word :{" "}
            {text === ""
              ? text.length
              : text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
            Character : {text.length} Read of Minutes :{" "}
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
        </div>

        <div className="container my-5">
          <h5>Preview</h5>
          <pre className="my-3">{text}</pre>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
