import React from "react";
import './Form.css'
function Form(){
    return(
<div>
<form>
    <h4>Fill ill the form</h4>
        Name:<input type='text' placeholder='enter name'/>
        <br/>
        Password:<input type='password' placeholder='enter pws'/>
        <br/>
        Email:<input type='text' placeholder='enter email'/>
        <br/>
        Phone:<input type='number' placeholder='enter phone no'/>
        <br/>
        <br />

        <button className="btn btn-danger">Submit</button>
        {/* <input id="formbtn" type='submit' value={'Submit'}/> */}
    </form>

</div>

    );
}

export default Form