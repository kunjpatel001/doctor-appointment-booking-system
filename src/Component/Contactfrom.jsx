import React from "react";
import Navbar from "./Navbar";

function Contactfrom() {
    return(
        <>
        <Navbar/>
        <div className="container">
        <h3>Contact Form</h3>
        <br /><br />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                   
                    <p style={{fontSize:"20px"}} >Enter Name :</p>
                
                   
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
               
                    <input type="text" name="" id="" placeholder=" Enter Name" style={{width:"90%", backgroundColor:"lightblue", border:"1px solid black", padding:"7px" }} />
                </div>
            </div>

<br /><br />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                
                    <p style={{fontSize:"20px"}}>Email Address :</p>
                    
                   
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                
                    <input type="text" name="" id=""placeholder=" Enter Email Address" style={{width:"90%" , backgroundColor:"lightblue", border:"1px solid black" , padding:"7px"}} />
                </div>
            </div>

<br /><br />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    
                    <p style={{fontSize:"20px"}}>Mobile Number :</p>
                    
                   
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                
                    <input type="text" name="" id="" placeholder=" Enter Mobile Number" style={{width:"90%", backgroundColor:"lightblue", border:"1px solid black", padding:"7px"}} />
                </div>
            </div>
<br /><br />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    
                    <p style={{fontSize:"20px"}}>Enter Message :</p>
                    
                   
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                
                  <textarea name="" id=""  placeholder=" &nbsp; Enter Your Message" style={{width:"90%", height:"130%",backgroundColor:"lightblue", border:"1px solid black", padding:"7px"}}></textarea>
                  
                  <br /><br />
                  <div className="btn btn-info" style={{color:"white"}} > Send Message </div>

                </div> 


            </div>
        </div>
        </>
    )
}
export default Contactfrom