import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function Home() {
  return (
    <>
      {/* ===== Carousel Section ===== */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        style={{ width: '100%', maxWidth: '800px' }} 
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '40vh' }}>
            <img
              src="slider-1.jpg"
              className="d-block w-100 h-100"
              alt="Slide 1"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" style={{ height: '40vh' }}>
            <img
              src="slider-2.jpg"
              className="d-block w-100 h-100"
              alt="Slide 2"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" style={{ height: '40vh' }}>
            <img
              src="slider-3.jpg"
              className="d-block w-100 h-100"
              alt="Slide 3"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      {/* ===== Feature Section ===== */}
      <div className="feature ">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content p-4">
                <i className="fa fa-shield fa-2x mb-3 text-primary"></i>
                <h5>Trusted Shopping</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content p-4">
                <i className="fa fa-shopping-bag fa-2x mb-3 text-success"></i>
                <h5>Quality Product</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content p-4">
                <i className="fa fa-truck fa-2x mb-3 text-warning"></i>
                <h5>Worldwide Delivery</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content p-4">
                <i className="fa fa-phone fa-2x mb-3 text-danger"></i>
                <h5>Telephone Support</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categure img */}
      <section className="fashion-container">
        {/* Left column */}
        <div className="left-column">
          <img src="category-1.jpg" className='images' alt="Left" />
        </div>

        {/* Middle column */}
        <div className="middle-column">
          <img src="category-3.jpg" alt="Top Middle" />
          <img src="category-4.jpg" alt="Bottom Middle" />
        </div>

        {/* Right column */}
        <div className="right-column">
          <img src="category-2.jpg" alt="Right" />
        </div>
      </section>

      {/* Feactuers product */}
      <div>
        <h1 className='featured'>Featured Product</h1>
      </div>

      <div id="carouselExampleIndicators " className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000"
        style={{ width: '100%' }}>
        <div className="carousel-inner p-5  m-3 ">

          {/* Slide 1 */}
          <div className="carousel-item active ">
            <div className="row">
              <div className="col">
                <div style={{ width: '100%' }}>
                  <img src="product-1.png" className="card-img-top product-image" alt="Product 1" />
                </div>
              </div>
              <div className="col">
                <div style={{ width: '100%' }}>
                  <img src="product-2.png" className="card-img-top product-image" alt="Product 2" />
                </div>
              </div>
              <div className="col">
                <div style={{ width: '100%' }}>
                  <img src="product-3.png" className="card-img-top product-image" alt="Product 3" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <div style={{ width: '100%' }}>
                  <img src="product-4.png" className="card-img-top product-image" alt="Product 4" />
                </div>
              </div>
              <div className="col">
                <div style={{ width: '100%' }}>
                  <img src="product-5.png" className="card-img-top product-image" alt="Product 5" />
                </div>
              </div>
              <div className="col">
                <div style={{ width: '100%' }}>
                  <img src="product-6.png" className="card-img-top product-image" alt="Product 6" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Brand */}
      <div className='Brands'>
        <h1 >Our Brands</h1>
      </div>
      <div className="p-5 d-flex justify-content-center flex-wrap gap-3">
        <img src="brand-1.png" className="rounded m-2" alt="Brand 1" />
        <img src="brand-2.png" className="rounded m-2" alt="Brand 2" />
        <img src="brand-3.png" className="rounded m-2" alt="Brand 3" />
        <img src="brand-4.png" className="rounded m-2" alt="Brand 4" />
        <img src="brand-5.png" className="rounded m-2" alt="Brand 5" />
        <img src="brand-6.png" className="rounded m-2" alt="Brand 6" />
      </div>



    </>
  );
}

export default Home;
