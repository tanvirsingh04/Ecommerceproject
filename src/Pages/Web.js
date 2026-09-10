import React from "react";
// import "./productlist.css";

function Website() {
  return (
    <div>
      <button>click</button>

      <section
        className="py-3"
        
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-blocks">
                <div className="banner-ad large bg-info block-1">
                  <div className="swiper main-swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories my-3">100% natural</div>
                            <h3 className="display-4">
                              Fresh Smoothie & Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                            >
                              Shop Now
                            </a>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img
                              src="images/product-thumb-1.png"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories mb-3 pb-3">
                              100% natural
                            </div>
                            <h3 className="banner-title">
                              Fresh Smoothie & Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img
                              src="images/product-thumb-1.png"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories mb-3 pb-3">
                              100% natural
                            </div>
                            <h3 className="banner-title">
                              Heinz Tomato Ketchup
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img
                              src="images/product-thumb-2.png"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-pagination"></div>
                  </div>
                </div>

                <div
                  className="banner-ad bg-success-subtle block-2"
                
                >
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">20% off</div>
                      <h3 className="banner-title">Fruits & Vegetables</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="banner-ad bg-danger block-3"
                  
                >
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">15% off</div>
                      <h3 className="item-title">Baked Products</h3>
                      <a
                        href="#"
                        className="d-flex align-items-center nav-link"
                      >
                        Shop Collection{" "}
                       
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Category</h2>

                <div className="d-flex align-items-center">
                  <a href="#" className="btn-link text-decoration-none">
                    View All Categories →
                  </a>
                  <div className="swiper-buttons">
                    <button className="swiper-prev category-carousel-prev btn btn-yellow">
                      ❮
                    </button>
                    <button className="swiper-next category-carousel-next btn btn-yellow">
                      ❯
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="category-carousel swiper">
                <div className="swiper-wrapper">
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-bread-baguette.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Breads & Sweets</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-soft-drinks-bottle.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-wine-glass-bottle.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-animal-products-drumsticks.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-bread-herb-flour.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits & Veges</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Website;
