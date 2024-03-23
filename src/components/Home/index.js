import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import Footer from '../Footer';

class Home extends Component {
  settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  render() {
    return (
      <div>
      <div className='home-container'>
        <div className="slider-container">
            <Slider {...this.settings}>
                <div className='sale2'>
                    
                </div>
                <div className='sale3'>
                    
                </div>
                <div className='sale1'>
                    
                </div>
                
            </Slider>
        </div>
        <div className='home-container1'>
            <div className='kids-container'>
            <h1 className='kid-title'>KIDS</h1>
            </div>
            <div className='women-container'>
            <h1 className='women-title'>WOMEN</h1>
            </div>
            <div className='men-container'>
            <h1 className='men-title'>MEN</h1>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Home;
