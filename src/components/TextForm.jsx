import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  function forSetText(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function handleUpperClick() {
    setText(text.toUpperCase());
    props.forSetAlert("success","Case changed into UpperCase")
  }
  function handleLowerClick() {
    setText(text.toLowerCase());
    props.forSetAlert("success","Case changed into LowerCase")
  }
  function handleClearClick() {
    setText("");
    props.forSetAlert("success","Case cleared")
  }

  const wordCount=text.split(" ");

  function handleTitleCase() {
    const toTitleCase = wordCount.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    setText(toTitleCase.join(" "));
    props.forSetAlert("success","Case changed into Title-Case")
  }

  function handleCopy(){
    navigator.clipboard.writeText(text);
    props.forSetAlert("success","text copied")
  }

  function handleExtraSpaces(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.forSetAlert("success","ExtraSpace deleted")
  }
 
  return (
    <>
      <div className="container" style={{color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.textHeading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={forSetText}
            style={{backgroundColor: props.mode === "light" ? "white" : "#13466e" ,color: props.mode === "light" ? "black" : "white"}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpperClick}>
          Conver to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>
          Conver to Lowerrcase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTitleCase}>
          Conevrt to Titlecase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>Your text Summary</h1>
        {/* <p>{text===""?wordCount.length-1:wordCount[wordCount.length-1]===""?wordCount.length-1:wordCount.length} words and {text.length} characters</p> */}
                {/* or */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>Take {(0.008)*(text.split(" ").filter((element)=>{return element.length !== 0}).length)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text===""?"write something in textbox to preview":text}</p>
      </div>
    </>
  );
}

export default TextForm;
