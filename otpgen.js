import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './otp gen.css'


function Otp (){
   const [value,setValue]=useState("")
   const navigate=useNavigate()
       
       const handleValue=(e)=>{
            setValue(e.target.value)
        }
      const Submit=()=>{
        if(value !=9999 ){
            alert("invalid otp") 
        }
        else if(value===""){
            alert("enter the default code")  
        }
        else{
            navigate("/crud")
        }
      }   
   
        return (
            <div><br/><br/>
                <center>
                    <div id="div">
                        <div id="left">
                            <form>
                            <h1>Enter OTP</h1><br/>
                            <h4>We have sent a one time password (OTP) to **********. </h4><br/><br/>
                            <input placeholder="OTP" value={value} onChange={handleValue}></input>
                            <button id="button" onClick={Submit}> -&gt;</button>
                            </form>
                            <h4>Resend OTP in 00:15</h4>
                        </div>
                    </div>
                </center>
            </div>
        )
        }

export default Otp