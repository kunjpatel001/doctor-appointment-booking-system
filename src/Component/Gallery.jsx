import React from "react";
import Navbar from "./Navbar";

function Gallery() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12"></div>
          <div className="col-lg-6 col-md-6 col-sm-12">

            <ul className="nav nav-pills " id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
              </li>
              <li className="nav-item" role="presentation">
                <button style={{}} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Dental</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cardiology</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-neurology-tab" data-bs-toggle="pill" data-bs-target="#pills-neurology" type="button" role="tab" aria-controls="pills-neurology" aria-selected="false">Neurology</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-laboratry-tab" data-bs-toggle="pill" data-bs-target="#pills-laboratry" type="button" role="tab" aria-controls="pills-laboratry" aria-selected="false">Laboratry</button>
              </li>
            </ul>


          </div>
          <div className="col-lg-2 col-md-2 col-sm-12"></div>


        </div>
        <br /><br />

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img style={{ width: "100%", height: "110%" }} src="https://dentallavelle.com/wp-content/uploads/2019/06/Dental-Lavelle-Why-you-need-to-visit-your-Dentist-every-6-months.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img style={{ width: "100%", height: "110%" }} src="https://eremedium.in/wp-content/uploads/2022/06/18-Importance-of-Cardiology-Videos.jpg" alt="" />

              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img style={{ width: "100%", height: "110%" }} src="https://regencyhealthcare.in/wp-content/uploads/2019/05/Blog-image_MAY_30.jpg" alt="" />

              </div>
            </div>
            <br /> <br />
            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://www.cgc.ac.in/public/tiny-uploads/_Bachelor%20of%20Medical%20Laboratory%20Science%20Career%20Scope.jpg" alt="" />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://c0.wallpaperflare.com/preview/448/719/696/appointment-book-blur-care-check-up.jpg" alt="" />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://radarmedical.com/wp-content/uploads/2019/10/why-would-I-be-reffered-to-a-neurologist.jpg" alt="" />
              </div>
            </div>
            

          </div>

          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://dentallavelle.com/wp-content/uploads/2019/06/Dental-Lavelle-Why-you-need-to-visit-your-Dentist-every-6-months.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://regencyhealthcare.in/wp-content/uploads/2019/05/Blog-image_MAY_30.jpg" alt="" />
              </div>

            </div>

          </div>

          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://eremedium.in/wp-content/uploads/2022/06/18-Importance-of-Cardiology-Videos.jpg" alt="" />
              </div>
              
            </div>

          </div>

          <div className="tab-pane fade" id="pills-neurology" role="tabpanel" aria-labelledby="pills-neurology-tab">

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://c0.wallpaperflare.com/preview/448/719/696/appointment-book-blur-care-check-up.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://radarmedical.com/wp-content/uploads/2019/10/why-would-I-be-reffered-to-a-neurologist.jpg" alt="" />
              </div>
            </div>

          </div>

          <div className="tab-pane fade" id="pills-laboratry" role="tabpanel" aria-labelledby="pills-laboratry-tab">

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
              <img style={{ width: "100%", height: "110%" }} src="https://www.cgc.ac.in/public/tiny-uploads/_Bachelor%20of%20Medical%20Laboratory%20Science%20Career%20Scope.jpg" alt="" />
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
export default Gallery