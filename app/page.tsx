'use client';

import Carousel from 'react-bootstrap/Carousel';

export default function Page() {

  const carouselImages = [
    '/img/carousel/home_page_img_1.jpg',
    '/img/carousel/home_page_img_2.jpg',
    '/img/carousel/home_page_img_3.jpg',
    '/img/carousel/home_page_img_4.jpg',
  ]

  return (
    <div>
      <div className="text-center">
        <h2 className='text-primary'>Aathirai Educational And Charitable Trust</h2>
      </div>
      <div className='row'>
        <p>
          Aathirai Educational and Charitable Trust is a registered organisation, established in December 2009. Our mission is to help people from downtrodden society and to facilitate under privileged children with better eduction and basic needs.
        </p>
      </div>
      <div className='row'>
        <Carousel data-bs-theme="dark" interval={3000}>
          {
            carouselImages.map((item, index) => (
              <Carousel.Item key={item}>
                <img data-testid="carousel-img" className='d-block mx-auto img-fluid' src={item} alt={"image " + (index + 1)} />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}