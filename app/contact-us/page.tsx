'use client';

export default function Page() {
  return (
    <>
      <div className="row">
        <h3 className="text-primary text-center">Contact Us</h3>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <h4>Address:</h4>
          <address>
            <strong>Aathirai Educational and Charitable Trust</strong>
            <br />
            No : 11, 36th Street,
            <br />
            Korattur,
            <br />
            Chennai - 600 080
            <br />
            Tamil Nadu
            <br />
            India
            <br />
            <strong>Phone: </strong>9962010363, 9962540940, 9444434880, 9791151586
            <br />
            <strong>Email Address: </strong> aathiraitrust@gmail.com
          </address>
          <a className="btn btn-primary" role="button" aria-pressed="true" href="https://www.google.co.in/maps/place/13%C2%B006'33.5%22N+80%C2%B010'54.7%22E/@13.109305,80.1813138,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d13.109305!4d80.181861" target="_blank">Direction</a>
        </div>
        <div className="col-sm-9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.4600615142215!2d80.18131382914213!3d13.109304999422868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzMzLjUiTiA4MMKwMTAnNTQuNyJF!5e0!3m2!1sen!2sin!4v1478384525320"
            width="100%" height="450" style={{ border: 0 }} allowFullScreen></iframe>
        </div>
      </div>

    </>
  );
}