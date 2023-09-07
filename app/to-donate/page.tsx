'use client';

export default function Page() {
  return (
    <>
      <div className="row">
        <h3 className="text-primary text-center">To donate to Aathirai</h3>
      </div>
      <div className="row">
        <h5 className="text-primary">For DD:</h5>
        <p>
          DD/Cheque in favour of: <strong>Aathirai Educational And Charitable Trust</strong>
          <br />
          Postal Address: <strong>No 11, 36th Street, Korattur, Chennai - 600 080.</strong>
        </p>
      </div>
      <div className="row">
        <h5 className="text-primary">For Internet Banking:</h5>
        <p>
          Bank Name: <strong>HDFC Bank</strong>
          <br />
          Bank Branch: <strong>Ayanavaram, Chennai</strong>
          <br />
          Account No: <strong>18651450000041</strong>
          <br />
          Beneficiary name: <strong>Aathirai Educational and Charitable Trust</strong>
          <br />
          Bank Swift Code: <strong>HDFCINB0001</strong>
          <br />
          IFSC Code: <strong>HDFC0001865</strong>
          <br />
          <br />
          <strong>
            Notes:
          </strong>
        </p>
        <div className="container">
          <ul>
            <li>We have obtained exemption under section 80G of Income Tax for all donations to our Trust</li>
            <li>No direct foreign funds accepted</li>
          </ul>
        </div>
      </div>

    </>
  );
}