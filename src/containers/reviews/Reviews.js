import React from 'react';
import './review.css';
import Chicago from './imports';


const Reviews = () => {
  return (
  <div>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item active">
          <img src={Chicago} alt="Chania"/>
          <div class="carousel-caption">
            <h3>Los Angeles</h3>
            <p>LA is always so much fun!</p>
        </div>
      </div>

      <div class="item">
        <img src= {Chicago} alt="Chicago"/>
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>

      <div class="item">
        <img src={Chicago} alt="New York"/>
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>

)
}
export default Reviews