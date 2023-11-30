import React, {useState} from "react"

 export default function About (props) {
    const [myStyle, setMyStyle] = useState({
        color : "black",
        backgroundColor : "white"
    });
    // const [btnText, setBtnText] = useState("Enabel Dark Mode");
    // const handelBtnClick = ()=>{
    //     if(myStyle.color === 'black'){
    //             setMyStyle({color : "white",
    //             backgroundColor : "black"
    //     });
    //     setBtnText("Enabel Light Mode");
    // }
    //     else{
    //         setMyStyle({color : "black",
    //             backgroundColor : "white"
    //     });
    //     setBtnText("Enabel Dark Mode");
    //     }
    // }
  return (
    <div style={{height : '50px'}} className="container">   

        <div className="container">
      <form className="" style={myStyle}>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" style={myStyle} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" style={myStyle} />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="dropdownCheck" />
          <label className="form-check-label" htmlFor="dropdownCheck">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={myStyle} >Sign in</button>
      </form>
      <br />
      <div className="dropdown-divider" style={myStyle}></div>
      <a className="dropdown-item" href="/" style={myStyle}>New around here? Sign up</a>
      <a className="dropdown-item" href="/" style={myStyle}>Forgot password?</a>
      </div>
      <br />
</div>

  )
};
