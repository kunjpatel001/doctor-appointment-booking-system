import React from "react";
import Navbar from "./Navbar";


function Aboutus() {
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="https://sd-03.ru/storage/uploads/DquelLE31eOoMXXMA2OhFjmWudw0Qr7AYxtOfNtn.jpg" style={{height:"110%", width:"100%"}} alt="" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <br />
                        <h3>About Our Hospital</h3>
                        <p style={{fontSize:"12px", marginLeft:"30px"}}>
                            The Hospital Management System (HMS) is designed for Any Hospital to replace 
                            their existing manual, paper based system. The new system is to control the 
                            following information; patient information, room availability, staff and operating 
                            room schedules, and patient invoices. These services are to be provided in an 
                            efficient, cost effective manner, with the goal of reducing the time and resources 
                            currently required for such tasks. <br />
                            A significant part of the operation of any hospital involves the acquisition, 
                            management and timely retrieval of great volumes of information. This 
                            information typically involves; patient personal information and medical history, 
                            staff information, room and ward scheduling, staff scheduling, operating theater scheduling 
                            and various facilities waiting lists. All of this information must be 
                            managed in an efficient and cost wise fashion so that an institution's resources 
                            may be effectively utilized HMS will automate the management of the hospital 
                            making it more efficient and error free. It aims at standardizing data, 
                            consolidating data ensuring data integrity and reducing inconsistencies.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutus