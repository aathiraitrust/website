'use client';

import Carousel from 'react-bootstrap/Carousel';

export default function Page() {
  return (
    <div>
      <div className="text-center">
        <h2 className='text-primary'>Aathirai Educational And Charitable Trust</h2>
        <h1>
          <div>
            Website under development
          </div>
        </h1>
      </div>
      <div className='row'>
        <p>
          Aathirai Educational and Charitable Trust is a registered organisation, established in December 2009. Our mission is to help people from downtrodden society and to facilitate under privileged children with better eduction and basic needs.
        </p>
      </div>
      <div className='row'>
        <Carousel data-bs-theme="dark" interval={3000}>
          <Carousel.Item>
            <img className='d-block mx-auto img-fluid' src='/img/carousel/home_page_img_1.jpg' alt='image 1' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block mx-auto img-fluid' src='/img/carousel/home_page_img_2.jpg' alt='image 2' />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}