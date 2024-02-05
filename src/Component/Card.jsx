import React from "react";
import Navbar from "./Navbar";


function Card() {
    return (
        
        <>
        <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card shadow-sm p-3 mb-5" style={{padding:"5%"}}>
                            <img className="card-img-top" height={200} width={300} src="https://lifecarekarnal.com/wp-content/uploads/2021/05/docpatient.jpg.webp" />
                            <div className="card-body">
                                <p style={{textAlign:"center", fontSize:"30px", marginBottom:"-20px"}}> Patient</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card shadow-sm p-3 mb-5" style={{padding:"5%"}}>
                            <img className="card-img-top" height={200} width={300} src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/570398/gettyimages-1146913659.jpg&w=2000&op=resize" />
                            <div className="card-body">
                                <p style={{textAlign:"center", fontSize:"30px", marginBottom:"-20px"}}>Doctor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card shadow-sm p-3 mb-5" style={{padding:"5%"}} >
                            <img className="card-img-top" height={200} width={300} src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*e3DUS9_welpytEol7KZtuA.png" />
                            <div className="card-body">
                                <p style={{textAlign:"center", fontSize:"30px", marginBottom:"-20px"}}>Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card