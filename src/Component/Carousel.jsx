import React from "react";

function Carousel() {
  return (

    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://vascuchek.com/wp-content/uploads/2021/07/Inside-view-of-a-green-surgery-room-.jpg" height={500} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.mylifemedicalcenter.com/assets/images/slider/slider_3.jpg" height={500} alt="" />
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        
      </div>
    </>
  )
}
export default Carousel