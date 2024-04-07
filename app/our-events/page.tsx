'use client';

import Table from 'react-bootstrap/Table';

export default function Page() {
  return (
    <>
      <div className="row">
        <h3 className="text-primary text-center">Upcoming Events</h3>
        {/* <h5 className="text-primary text-center">No upcoming events</h5> */}
        <div className="table-responsive">
          <table className="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center col-sm-2">Date</th>
                <th className="text-center col-sm-3">Beneficiary</th>
                <th className="text-center col-sm-7">Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10-May-2024</td>
                <td>S A SIDDARTHAN (Standard IV) and S A SUJITHA (Standard VI), Kamaraj Matriculation Hr. Sec. School, Ayanpuram, Chennai-23</td>
                <td>Raising fund of Rs. 71,182/- towards school annual fees for both children</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <h3 className="text-primary text-center">Past Events</h3>
        <div className="table-responsive">
          <table className="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center col-sm-2">Date</th>
                <th className="text-center col-sm-3">Beneficiary</th>
                <th className="text-center col-sm-7">Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14-Mar-2024</td>
                <td>M.Lishika, Standard IV, EL SHADDAI Nursery & Primary School, Korattur, Chennai - 600 076</td>
                <td>Paid Rs. 16,400 /- towards first term school fee</td>
              </tr>
              <tr>
                <td>14-Feb-2024</td>
                <td>CHILD (Home for the Children), No: 647, Kadappa Road, Mathanakuppam, Kolathur, Chennai - 600 099</td>
                <td>Paid Rs. 5000 /- towards food distribution on behalf of birthday</td>
              </tr>
              <tr>
                <td>01-Nov-2023</td>
                <td>M.Lishika, Standard III, EL SHADDAI Nursery & Primary School, Korattur, Chennai - 600 076</td>
                <td>Paid Rs. 7200 /- towards School fee</td>
              </tr>
              <tr>
                <td>30-Mar-2023</td>
                <td>Government School, Villivakkam, Chennai</td>
                <td>Donated School Notice Board to Government School, Villivakkam, Chennai. The cost of Notice Board is Rs. 7500 /-</td>
              </tr>
              <tr>
                <td>29-Mar-2023</td>
                <td>A. Sreeman Pandi, (Fourth year) Engineering in Aalim Muhammed Salegh Polytechnic College, Nizara Educational Campus, Muthapudupet, Avadi, IAF, Chennai - 600 055</td>
                <td>Paid Rs. 5,000 /- towards College fee</td>
              </tr>
              <tr>
                <td>29-Mar-2023</td>
                <td>A. Sreeman Pandi</td>
                <td>Paid Rs. 22,015 /- towards CAD fee</td>
              </tr>
              <tr>
                <td>31-Dec-2022</td>
                <td>Ritesh, Egmore, Chennai</td>
                <td>Donated Standing Frame for Ritesh. The cost of Standing Frame is around Rs. 12548 /-</td>
              </tr>
              <tr>
                <td>06-Jun-2023</td>
                <td>A. Sreeman Pandi, (Third year) Engineering in Aalim Muhammed Salegh Polytechnic College, Nizara Educational Campus, Muthapudupet, Avadi, IAF, Chennai - 600 055</td>
                <td>Paid Rs. 5,000 /- towards College fee</td>
              </tr>
              <tr>
                <td>29-Mar-2022</td>
                <td>A. Sreeman Pandi, (Third year) Engineering in Aalim Muhammed Salegh Polytechnic College, Nizara Educational Campus, Muthapudupet, Avadi, IAF, Chennai - 600 055</td>
                <td>Paid Rs. 5,000 /- towards college fee</td>
              </tr>
              <tr>
                <td>01-Oct-2021</td>
                <td>A. Sreeman Pandi, (Third year) Engineering in Aalim Muhammed Salegh Polytechnic College, Nizara Educational Campus, Muthapudupet, Avadi, IAF, Chennai - 600 055</td>
                <td>Paid Rs. 10,000 /- towards third year fee. Total fee for third year is Rs. 35,000 /- out of that Government Scholarship is Rs. 25,000 /-</td>
              </tr>
              <tr>
                <td>16-Jul-2021</td>
                <td>R.Kalimuthu, BA Economics (first year, second sem) in The American College at Madurai</td>
                <td>Paid college fee of Rs.8,534/- for R.Kalimuthu</td>
              </tr>
              <tr>
                <td>11-Jan-2021</td>
                <td>A. Sreeman Pandi, (Second year) Engineering in Aalim Muhammed Salegh Polytechnic College, Nizara Educational Campus, Muthapudupet, Avadi, IAF, Chennai - 600 055</td>
                <td>Paid balance fee of Rs. 9,500/- for engineering on 11-Jan-2021. Paid old diploma due fee of Rs. 5,000/- on 06-Feb-2021</td>
              </tr>
              <tr>
                <td>18-Dec-2020</td>
                <td>K.Surya, (Second year) BBA degree course at Sree Sastha Arts & Science College, Chembarambakkam</td>
                <td>Paid college fee of Rs. 35000/- for K.Surya</td>
              </tr>
              <tr>
                <td>23-May-2020</td>
                <td>Families affected by COVID-19 lockdown (Phase - III)</td>
                <td>As part of COVID-19 Relief Activity- Phase 111, we had distributed essential groceries kit for 80 families living in Pattaravakkam, Karukku, Menampedu, Sidconagar- Villivakkam, Nammalwarpet- Chennai during 23-May-2020 & 24-May-2020. Total cost for this event was Rs. 36,240 /- (including package and transportation costs)</td>
              </tr>
              <tr>
                <td>14-May-2020</td>
                <td>Families affected by COVID-19 lockdown (Phase - II)</td>
                <td>As part of COVID-19 Relief Activity- Phase 11, we had distributed essential groceries kit for 50 families living near erikkarai, surakuppam, agraharam-srinivasapuram around korattur, chennai.Total cost for this event was Rs. 25,569 /- (excluding transportation costs)</td>
              </tr>
              <tr>
                <td>12-May-2020</td>
                <td>Families affected by COVID-19 lockdown (Phase - I)</td>
                <td>As part of COVID-19 Relief Activity- Phase 1, we had distributed essential groceries kit costing Rs. 540/- per kit for 50 families living in Ayanavaram, Chennai. Total cost for this event was Rs. 29,714 /- (excluding package and transportation costs)</td>
              </tr>
              <tr>
                <td>16-Aug-2019</td>
                <td>Lourthu Sahaya Mary A, B.Ed., St.Xavier's College of Education, Palayamkottai</td>
                <td>Paid partial college fees of Rs.22,500/- for Lourth Sahaya Mary A</td>
              </tr>
              <tr>
                <td>13-May-2019</td>
                <td>Educational Assistance Day, Erikarai, Korattur, Chennai</td>
                <td>Organised educational assistance day and distributed lunch bags, tiffin boxes and pen sets amounted to a total of Rs. 4980 /- to 20 students</td>
              </tr>
              <tr>
                <td>08-Mar-2019</td>
                <td>Government School, Kavalpatti</td>
                <td>
                  Provided educational needs (study table and plastic chairs) worth Rs.20400 /- to Government School, Kavalpatti
                </td>
              </tr>
              <tr>
                <td>12-Jan-2019</td>
                <td>Anganwadi Mayyam Government Nursery School, Kavarapettai</td>
                <td>
                  Distributed school uniforms worth Rs. 5978 /- to 22 pupils of Anganwadi Mayyam Government Nursery School
                </td>
              </tr>
              <tr>
                <td>24-Nov-2018</td>
                <td>Residents of Magillan Kottai village near Pattukottai</td>
                <td>Raised Rs.61600/- through donors and conducted emergency relief activity in a village affected by GAJA cyclone. We provided essential groceries and household needs for up to 150 families living in Magillan Kottai village near Pattukottai</td>
              </tr>
              <tr>
                <td>19-Oct-2018</td>
                <td>Annai Bharatha Matha Educational and Charitable Trust, Redhills, Chennai</td>
                <td>Provided food donation to the home for the cost of Rs. 3500/-</td>
              </tr>
              <tr>
                <td>06-Oct-2018</td>
                <td>Kalaiselvi Karunalaya Social Welfare Society, Mogappair West, Chennai</td>
                <td>Provided food donation for the cost of Rs.5500/- to the home and engaged the kids with some fun activities</td>
              </tr>
              <tr>
                <td>19-Sep-2018</td>
                <td>Lourthu Sahaya Mary A, B.Ed., St.Xavier's College of Education, Palayamkottai</td>
                <td>Paid partial college fees of Rs.17,500/- for Lourth Sahaya Mary A</td>
              </tr>
              <tr>
                <td>31-Aug-2018</td>
                <td>Dhivya Nawin Santh P S, Kanyakumari Government Medical College, Asaripallam</td>
                <td>Paid book and bonafide fee of Rs.10,990/- for Dhivya Nawin Santh P S</td>
              </tr>
              <tr>
                <td>15-Aug-2018</td>
                <td>
                  <ol>
                    <li>Government Primary School, Asanabudur Village</li>
                    <li>Government Middle School, Panapakkam Village</li>
                    <li>Government Primary School, Kavalpatti Village</li>
                  </ol>
                </td>
                <td>Conducted a well organised event on Independence day at the mentioned government schools (Asanabudur school strength - 30, Panapakkam school - 51, Kavalpatti school strength - 14)and distributed various list of requirements like school uniform, sports goods, shoes, notebooks, stationary and a locker for the total cost of Rs. 40,655/-</td>
              </tr>
              <tr>
                <td>15-AUG-2018</td>
                <td>Brindha Devi D/O Vishali, Taramani, Chennai</td>
                <td>Provided uniform material with stitching cost of Rs.1434/- to Brindha</td>
              </tr>
              <tr>
                <td>12-AUG-2018</td>
                <td>Annai Bharatha Matha Educational and Charitable Trust, Redhills, Chennai</td>
                <td>Provided food donation for the cost of Rs.7400/-  to the home and engaged kids with some fun activities</td>
              </tr>
              <tr>
                <td>31-JUL-2018</td>
                <td>Government School, Villivakkam, Chennai</td>
                <td>Paid Rs.4456/- for electrical repair work for the school computer room</td>
              </tr>
              <tr>
                <td>17-JUL-2018</td>
                <td>A.Sreeman Pandi, Diploma in Auto mobile Engineering, Aalim Muhammed  Polytechnic College, Nizara Educational Campus, Muthapudupet, Avadi, IAF, Chennai</td>
                <td>Paid college fees of Rs.16,500/- for A. Sreeman Pandi</td>
              </tr>
              <tr>
                <td>13-JUN-2018</td>
                <td>Educational Assistance Day, Government Higher Secondary School, Medur, Ponneri Taluk, Thiruvallur District</td>
                <td>Conducted a well organised educational assistance day and distributed bags, water bottle, geometry box and stationary to 350 students from class 6th to 12th standard</td>
              </tr>
              <tr>
                <td>01-APR-2018</td>
                <td>
                  Saranalaya Children Home, Kovur, Chennai
                </td>
                <td>
                  Provided lunch for 60 children of Rs. 5500/-
                </td>
              </tr>
              <tr>
                <td>30-MAR-2018</td>
                <td>
                  Saranalaya Children Home, Kovur, Chennai
                </td>
                <td>
                  Provided sports goods of Rs.5509/- for 60 children
                </td>
              </tr>
              <tr>
                <td>17-MAR-2018</td>
                <td>
                  <ol>
                    <li>
                      C. Monika, 2 nd standard, Tahir Public School, Old Guddadahalli, Bangalore
                    </li>
                    <li>
                      C. Yuvashree, 5 th standard, Tahir Public School, Old Guddadahalli, Bangalore
                    </li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>
                      Paid school fees of Rs. 1100/- for C.Monika
                    </li>
                    <li>
                      Paid school fees of Rs. 1100/- for C.Yuvashree
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>31-JAN-2018</td>
                <td>
                  V.Nithya, B.Sc Computer Science, Ponnusamy Nadar College of Arts and Science, Thiruvallur
                </td>
                <td>
                  Paid college fees of Rs.10,000/-
                </td>
              </tr>
              <tr>
                <td>23-OCT-2017</td>
                <td>
                  R.Manjupriya, B.Com, Srinivasa Academy
                </td>
                <td>
                  Paid tuition fees for CA inter exam of Rs.6,250/- for R.Manjupriya
                </td>
              </tr>
              <tr>
                <td>05-SEP-2017</td>
                <td>
                  R. Bhuvaneshwari, B.Com, Bhakthavatsalam Memorial College for Women, Chennai
                </td>
                <td>
                  Paid college fees of Rs.13,950/- for R. Bhuvaneshwari
                </td>
              </tr>
              <tr>
                <td>19-JUL-2017</td>
                <td>
                  V.Nithya, B.Sc Computer Science, Ponnusamy Nadar College of Arts and Science, Thiruvallur
                </td>
                <td>
                  Paid college fees of Rs.10,000/- for V. Nithya
                </td>
              </tr>
              <tr>
                <td>17-APR-2017</td>
                <td>
                  S.Ajith, B.Com, Meenakshi Ramasamy Arts and Science College, Thanthanur, Udayarpalayam, Ariyalur District, Tamil Nadu
                </td>
                <td>
                  Paid college fees of Rs. 12,000/- for S.Ajith
                </td>
              </tr>
              <tr>
                <td>08-JAN-2017</td>
                <td>
                  Annai Therasa Social Welfare Association Trust, Dasukuppam Village, Uthukottai Post, Tamil Nadu
                </td>
                <td>
                  Pongal celebration and serve lunch
                </td>
              </tr>
              <tr>
                <td>09-SEP-2016</td>
                <td>
                  V.Nithya, B.Sc Computer Science,
                  <br />Ponnusamy Nadar College of Arts and Science, Tiruvallur
                </td>
                <td>
                  Paid college fees of Rs. 12,000/-
                </td>
              </tr>
              <tr>
                <td>01-JUL-2016</td>
                <td>
                  Government School, Villivakkam, Chennai
                </td>
                <td>
                  Conducted Tie and Dye workshop for the school <br />students from standard 6th to 10th class
                </td>
              </tr>
              <tr>
                <td>16-MAR-2016</td>
                <td>
                  Government School, Villivakkam, Chennai
                </td>
                <td>
                  Contributed funds to renovate school desk, <br />benches and for painting Rs. 10,343/- <br />which includes Material cost and labour charge.
                </td>
              </tr>
              <tr>
                <td>12-DEC-2015</td>
                <td>
                  Irular Colony, Nandiampakam Village
                </td>
                <td>
                  Distributed flood relief items to the village people. <br />Includes sleeping mat, snacks, coconut oil, milk,
                  <br />detergent soap and used clothes for 175 families
                </td>
              </tr>
              <tr>
                <td>08-JUN-2015</td>
                <td>
                  <ol>
                    <li>B.Swathi, B.Com, <br />Bakthavatchalam College for Women, Korattur, Chennai</li>
                    <li>A Monukshvi Aasi, VI std, <br />Sri Venkateshwara Matriculation Hr. Sec. School, Alwarpet, Chennai</li>
                    <li>A Vimosh Aasi, IX std, <br />Sri Venkateshwara Matriculation Hr. Sec. School, Alwarpet, Chennai</li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>Paid college fees of Rs. 12,000/- for B Swathi</li>
                    <li>Paid school fees of Rs. 14,500/- for A Monukshvi Aasi</li>
                    <li>Paid school fees of Rs. 15,500/- for A Vimosh Aasi</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>28-JUN-2014</td>
                <td>
                  Bhagawan Sri Sathya Sai Nursery and Primary School, <br />Nallathur Village, Thiruvallur District
                </td>
                <td>
                  Conducted a well organized educational assistance day <br />and distributed books for various standards and<br />
                  donated school bags for 160 students
                </td>
              </tr>
              <tr>
                <td>14-MAY-2014</td>
                <td>
                  Child- Children Home, <br />Korattur, Chennai (HIV affected kids)
                </td>
                <td>
                  Provided food and provisions
                </td>
              </tr>
              <tr>
                <td>12-DEC-2014</td>
                <td>
                  B.Swathi, B.Com, <br />Bakthavatchalam College for Women, Korattur, Chennai
                </td>
                <td>
                  Paid college fees of Rs. 8,000/-
                </td>
              </tr>
              <tr>
                <td>07-JUL-2014</td>
                <td>
                  B.Swathi, B.Com, <br />Bakthavatchalam College for Women, Korattur, Chennai
                </td>
                <td>
                  Paid college fees of Rs. 10,750/-
                </td>
              </tr>
              <tr>
                <td>12-DEC-2013</td>
                <td>
                  B.Swathi, B.Com, <br />Bakthavatchalam College for Women, Korattur, Chennai
                </td>
                <td>
                  Paid college fees of Rs. 8,000/-
                </td>
              </tr>
              <tr>
                <td>10-NOV-2013</td>
                <td>
                  Annai Bharatha Matha <br />Educational and charitable Trust & Child- Children Home, Chennai
                </td>
                <td>
                  Care Home children were enjoyed a day <br />trip to MGM Dizee World as part of diwali celebration
                </td>
              </tr>
              <tr>
                <td>31-OCT-2013</td>
                <td>
                  N.Elakiya, BBA, <br />SriRam College of Arts and Science, Thiruvallur District
                </td>
                <td>
                  Paid college fee of Rs. 5,500/-
                </td>
              </tr>
              <tr>
                <td>06-OCT-2013</td>
                <td>
                  Annai Bharatha Matha <br />Educational and charitable Trust & Child- Children Home, Chennai
                </td>
                <td>
                  Provided food and provisions
                </td>
              </tr>
              <tr>
                <td>16-JUN-2013</td>
                <td>
                  1000 children from various Ashrams
                </td>
                <td>
                  Conducted an educational assistance day <br />along with the help of Anbu Karangalin Anbu Illam <br />at Sridevi Arts and Science College, Ponneri. <br />We have donated school bags, geometry box, <br />notebooks, exam pad and stationary items
                </td>
              </tr>
              <tr>
                <td>31-MAR-2013</td>
                <td>
                  Anbu Karangalin Anbu Illam, Ponneri
                </td>
                <td>
                  Contributed food, provisions, <br />books and stationary items
                </td>
              </tr>
              <tr>
                <td>11-NOV-2012</td>
                <td>
                  Annai Bharatha Matha <br />Educational and Charitable Trust, Redhills, Chennai
                </td>
                <td>
                  Contributed sweets, savouries, dinner provisions <br />and lighted fire crackers as part of diwali celebration
                </td>
              </tr>
              <tr>
                <td>10-NOV-2012</td>
                <td>
                  Child- Children Home, Korattur, Chennai
                </td>
                <td>
                  Distributed sweets, savouries, dinner, <br />medicines, school bags, note books and lighted fire <br />crackers as part of Diwali celebration
                </td>
              </tr>
              <tr>
                <td>05-AUG-2012</td>
                <td>
                  V. Senthilkumar, B.Tech, <br />Industrial Bio Technology, Government College of Technology, Coimbatore
                </td>
                <td>
                  Paid college fees of Rs. 4345/-
                </td>
              </tr>
              <tr>
                <td>09-SEP-2012</td>
                <td>
                  T.J. Sreelakshmi, IX Std, <br />Unity Matriculation School, Ponneri
                </td>
                <td>
                  Paid school fees of Rs. 10,000/-
                </td>
              </tr>
              <tr>
                <td>03-JUN-2012</td>
                <td>
                  Annai Anbalaya Trust, Attipattu
                </td>
                <td>
                  Provided school bags, books, <br />stationaries and lunch
                </td>
              </tr>
              <tr>
                <td>07-FEB-2012</td>
                <td>
                  V. Devadoss, B.Ed Maths, <br />SRM University, Chennai
                </td>
                <td>
                  Paid college fees of 25,000/-
                </td>
              </tr>
              <tr>
                <td>13-DEC-2011</td>
                <td>
                  <ol>
                    <li>T.J. Srivatsa, VII STd, Unity Matriculation School, Ponneri</li>
                    <li>T.J. Sreelakshmi, IX Std,   Unity Matriculation School, Ponneri</li>
                  </ol>
                </td>
                <td>
                  School fees paid to both
                </td>
              </tr>
              <tr>
                <td>11-DEC-2011</td>
                <td>
                  Shelter - Children Home, <br />Kolattur , Chennai(HIV affected kids)
                </td>
                <td>
                  Provided rice bag, provisions, <br />medicines, 2 feet emergency lamp, dinner and <br />distributed used cloths
                </td>
              </tr>
              <tr>
                <td>25-OCT-2011</td>
                <td>
                  Annai Bharatha Matha <br />Educational and Charitable Trust, Redhills, Chennai
                </td>
                <td>
                  Celebrated diwali with crackers and provided dinner
                </td>
              </tr>
              <tr>
                <td>24-OCT-2011</td>
                <td>
                  Shelter – Children Home, <br />Kolattur, Chennai (HIV affected kids)
                </td>
                <td>
                  Celebrated diwali with crackers and sweets
                </td>
              </tr>
              <tr>
                <td>23-OCT-2011</td>
                <td>
                  Surabhi Trust, Nadamuni & Child - Children Home, Korattur, Chennai
                </td>
                <td>
                  Celebrated diwali with crackers and sweets
                </td>
              </tr>
              <tr>
                <td>04-OCT-2011</td>
                <td>
                  <ol>
                    <li>Shivaranjini, 12th std, <br />Singaram Pillai Girl’s Hr. Sec. School, Villivakkam, Chennai</li>
                    <li>Nandhini, 10th std, <br />Soundarapandian Hr. Sec. School – Ayanavaram, Chennai</li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>Paid college fees of Rs. 2,935/- for Nandhini</li>
                    <li>Paid school fees of Rs. 3,725/- for Shivaranjini </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>25-SEP-2011</td>
                <td>
                  Motto Children New Way, Ponneri
                </td>
                <td>
                  Provided food with black rolling <br />board, white board, charts, posters, stationeries, <br />gas stove, big frying pan, and ladle
                </td>
              </tr>
              <tr>
                <td>14-AUG-2011</td>
                <td>
                  Saranalaya Children Home, Kovur
                </td>
                <td>
                  Provided lunch and educational assistance <br />to the home, also distributed used cloths
                </td>
              </tr>
              <tr>
                <td>10-JUL-2011</td>
                <td>
                  1000 children from various Ashrams
                </td>
                <td>
                  Participated with Anbu Karangalin Anbu Illam <br />and volunteered the educational assistance day by <br />providing 100 school bags with lunch for the day
                </td>
              </tr>
              <tr>
                <td>23-JUN-2011</td>
                <td>
                  Vimal Jeba Raj, XI Std, <br />Soundarapandian Hr. Sec. School, Ayanavaram
                </td>
                <td>
                  School fees paid
                </td>
              </tr>
              <tr>
                <td>28-MAY-2011</td>
                <td>
                  Saranalaya Children Home, Kovur
                </td>
                <td>
                  Day out to Dash & Splash water park <br />and provided evening snacks
                </td>
              </tr>
              <tr>
                <td>27-MAR-2011</td>
                <td>
                  Home of Hope – Children Home, Pakkam
                </td>
                <td>
                  Provided provisions, snacks and lunch
                </td>
              </tr>
              <tr>
                <td>30-JAN-2011</td>
                <td>
                  Mahalakshmi Foundation, Avadi, Chennai
                </td>
                <td>
                  Provided sports goods, stationeries, food, <br />snacks and distributed used clothes
                </td>
              </tr>
              <tr>
                <td>12-DEC-2010</td>
                <td>
                  Child- Children Home, Korattur, <br />Chennai (HIV affected kids)
                </td>
                <td>
                  Donated provisions, toys, medicines, <br />stationeries, food, snacks, <br />also taken children to marina beach
                </td>
              </tr>
              <tr>
                <td>06-NOV-2010</td>
                <td>
                  Annai Bharatha Matha <br />Educational and Charitable Trust, Redhills, Chennai
                </td>
                <td>
                  Celebrated diwali with crackers and <br />contributed provisions and stationary
                </td>
              </tr>
              <tr>
                <td>04-NOV-2010</td>
                <td>
                  Samarpana Trust & Surabhi Trust
                </td>
                <td>
                  Celebrated diwali with sweets and crackers
                </td>
              </tr>
              <tr>
                <td>10-OCT-2010</td>
                <td>
                  Anbu Karangalin Anbu Illam, Ponneri
                </td>
                <td>
                  Provided stationery, food and snacks, <br />CLF lamps, distributed used clothes
                </td>
              </tr>
              <tr>
                <td>29-SEP-2010</td>
                <td>
                  Udhavum Ullangal Illam, Maraimalai Nagar & Adambakkam
                </td>
                <td>
                  Stitched and distributed new set of uniform for 100 children
                </td>
              </tr>
              <tr>
                <td>05-SEP-2010</td>
                <td>
                  Udhavum Ullangal Illam, Maraimalai Nagar & Adambakkam
                </td>
                <td>
                  Provided food, snacks, sports goods, toys, <br />water bottles, stationeries and distributed 	used clothes
                </td>
              </tr>
              <tr>
                <td>22-AUG-2010</td>
                <td>
                  Annai Bharatha Matha <br />Educational and Charitable Trust, Redhills, Chennai
                </td>
                <td>
                  Provided text guides for 6th to 9th standard <br />students, food and snacks for the home, provisions, <br />sealing fan 2 no’s and distributed used clothes
                </td>
              </tr>
              <tr>
                <td>15-AUG-2010</td>
                <td>
                  Home of Hope – Children Home, Pakkam
                </td>
                <td>
                  Provided text guides for 6th to 12th <br />standard students, food and snacks, general medicine, <br />hardware tools for the home
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}