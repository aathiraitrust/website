'use client';

import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="row">
        <h3 className="text-primary text-center">About Us</h3>
        <p>
          The Aathirai Educational and Charitable Trust was founded by young professionals in 2009 with an objective to
          promote literacy and higher education in the country. The Trust is registered in the name of “AATHIRAI EDUCATIONAL
          AND CHARITABLE TRUST” at Anna Nagar Registrar Office under No.189/bk4/2010 on 05-March-2010.
          We have obtained exemption under section 80G of Income Tax for all donations to our Trust.
        </p>
      </div>
      <div className="row">
        <h3 className="text-primary text-center">Who we are</h3>
        <p><strong>History</strong></p>
        <p>
          “Life is short and vanities of this world are transient
          <br />
          But they alone LIVE WHO LIVE FOR OTHERS”
          <br />
          - Swami Vivekananda
        </p>
        <p>
          Inspired by these words, a bunch of young professionals joined our hands to offer help to the needy
          around us.
        </p>
        <p>
          Our main aim is to inspire and motivate other professionals to take part in social activities and
          collectively
          grow into a tree offering fruits, shade and oxygen to those who are in need.
        </p>
        <p>
          With the above aim and guided by experienced people, we envisioned a community for caregivers. The seed
          was sown
          on 12th December, 2009.
        </p>
        <p>
          We named it "AATHIRAI". Aathirai is a character in the Tamil Epic Manimegalai composed in 6th Century CE symbolizing “Purity”. Manimegalai was composed by Seethalai Sathanar. It is a sequel to another great epic Silapathikaram. Manimekalai is the daughter of Kovalan and Madhavi. According to the poem, Maṇimekalai studies the six systems of philosophy of Hinduism and other prevalent religions of the time and compares them to the teachings of the Buddha. She is most impressed with Buddhism. She is bestowed with the magic never-failing begging bowl called Amiṛtha Surabhi (is something equivalent to the <strong>cornucopia</strong> (from Latin cornu copiae) or <strong>horn of plenty</strong> is a symbol of abundance and nourishment, commonly a large horn-shaped container overflowing with produce, flowers, nuts, other edibles, or wealth in some form) which will always provide food to alleviate hunger. But this Amirtha Surabhi will become a source of ever flowing food only when it is first filled by the most purest of the women. Hearing about Aathirai, Manimegalai received bikshai from Aathirai after which the Amirtha Surabhi overflows to alleviate poverty.
        </p>
      </div>
      <div className="row">
        <h3 className="text-primary text-center">What we do</h3>
        <p><strong>Scholarships and Grants</strong></p>
        <p>
          Since its inception, the trust has promoted education mainly through scholarships and grants to deserving and needy students.
          The scholarship has been set up to specifically empower students from the disadvantaged sections of our society. It is given to students belonging to lower income groups, who wish to pursue their higher education at recognized institutions.
          Trust is keen in supporting students and encouraging them to be qualified to improve their standard of living, which will bring social and economic development.
        </p>
        <p><strong>Events</strong></p>
        <p>
          We have conducted various events successfully through our Trust, more about events can be found on the <Link href="/our-events/">Events Page</Link>
        </p>
        <p><strong>Rising Star Project</strong></p>
        <p>
          More about Rising Star Project can be found on the <Link href="/rising-star-projects/">Rising Star Project</Link>
        </p>
      </div>
      <div className="row">
        <h3 className="text-primary text-center">Vision and Mission</h3>
        <div>
          <p><strong>Vision</strong></p>
          <p>
            Transform the lives of people in India through education, by providing financial assistance and
            guidance
          </p>
          <p><strong>Mission (Our objectives)</strong></p>
          <ol>
            <li>To pay fees and donate for the study expenses of the poor including for the purchase of text books,
              uniforms
              etc, and to meet their hostel and other expenses including higher studies, training or research
            </li>
            <li>To award scholarships, prizes, fellowships, grants and loans and other payments for the purpose of
              study and
              research in any and every field of knowledge
            </li>
            <li>To fulfill all conditions, that may be imposed for earning any grants or assistance for the purposes
              of the
              Trust from any Government, Municipal/Local of other Authority of other institutions
            </li>
            <li>To donate or pay for the poor elderly people for their maintenance or donate amount to such
              organizations,
              which is running homes for these people
            </li>
            <li>To provide food, shelter, medical relief, vocational guidance and any other relief / assistance to the poor and downtrodden sections of the society for alleviating their poverty and misery
            </li>
            <li>To perform or donate money for the marriages of poor people and undertake their marriage and other
              expenses
            </li>
            <li>To acquire or takeover amalgamations or merge with any other trust having same of similar objects
            </li>
            <li>To do all such acts, deeds, things in addition to and in furtherance of the above purposes and in
              the
              advancement of any other charitable object of public utility not involving any activity for profit
            </li>
            <li>Each of the above purposes of the Trust shall be deemed to be separate and independent object of the
              trust
              and will be carried out without any distinction of caste, creed or religion
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <h3 className="text-primary text-center">Board and Finance</h3>
        <div>
          <p><strong>Advisory Board</strong></p>
          <ul>
            <li>Mr. R. Subramanian (Managing Trustee)</li>
            <li>Mr. S.S. Arunajadesan (Former School Principal)</li>
            <li>Mr. S. Mahadevan (Auditor)</li>
          </ul>
          <p><strong>Financial's</strong></p>
          <p>Financial information can be shared upon request</p>
        </div>
      </div>
    </>
  );
}