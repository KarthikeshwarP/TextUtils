import React, {useState} from "react";
import PropTypes from 'prop-types'

export default function TextForm (props) {
    const [text, setText] = useState("");
    const handeleOnChange = (e)=>{
        setText(e.target.value);
    }
    const handeleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase","success");
    }
    const handeleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase","success");

    }

    const handeleClearClick = ()=>{
       
        setText("");
        props.showAlert("cleared text area","success");

    }

    const handeleCopyClick = ()=>{
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");
    }
    const handeleRemoveSpacesClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("cleared extra spaces ","success");

    }
  return (
    <>
    <div className="container" style={{color:props.mode==='light' ? '#042743' : 'white'}}>
      <h1>{props.heading}</h1>
      <div className="mt-3">
      <textarea className="form-control" style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color:props.mode==='light' ? '#042743' : 'white'}} placeholder="Enter your text here" value={text} onChange={handeleOnChange} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary my-3 mx-2" onClick={handeleUpClick} >To UpperCase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handeleLoClick} >To LowerCase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handeleClearClick} >Clear</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handeleRemoveSpacesClick} >Remove Spaces</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handeleCopyClick} >Copy</button>
      {/* <button className="btn btn-primary my-3 mx-2" onClick={capitalizeSentences} >Capitilize </button> */}
    </div>
    <div className="container" style={{color:props.mode==='light' ? '#042743' : 'white'}}>
        <br />
        <h2>Your Text Summary</h2>
        <h4>{text.split(" ").filter((element)=>{return element.length != 0}).length} Words and {text.length} Characters</h4>
        <h5>Approximately {0.008 * text.split(" ").length} Minutes To read</h5>
        <br />
        <h2>Preview</h2>
        <h6>{text.length>0 ? text : 'Nothing to preview here.'}</h6>
    </div>
    </>
  )
};

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading : 'Heading Here'
}