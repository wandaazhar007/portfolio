'use client'
import Image from 'next/image';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faMapLocation, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ModalPhoto from '../modalPhoto/ModalPhoto';
import { useState } from 'react';
import { Fira_Sans } from 'next/font/google';

const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '500', '700'] });
const Hero: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = (): any => {
    setOpenModal(true);
    setIsLoading(true);
  }
  return (
    <section className="hero">
      <div className="wrapContainer">
        <div className="sectionContainer">

          <div className="headline">
            <h3 className={firaSans.className}>Hi, There... !</h3>
            <h1 className={firaSans.className}>I do more than just build a website</h1>
            <p className={firaSans.className}> I work for an advertising digital agency as a front-end web designer. currently, I’m not looking for a job but I love to help small businesses grow especially with websites or landing pages</p>
            <div className="proof">
              <div className="icons">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
              <span >Rated 5 stars on Fiverr</span>
            </div>
            <button>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
              <span>My Fiverr Profile</span>
            </button>
          </div>

          <div className="experiences">
            <h1 className={firaSans.className}>MY EXPERIENCES</h1>
            <div className="wrapBox">
              <div className="box">
                <ul>
                  <li>
                    Manage websites for individual, business, non-profit, and higher education. Meet with clients to identify objectives and scope of website. Maintain regular client communication updates, issue list, and project plan.
                  </li>
                  <li>
                    Design, develop, produce and maintain cross-browser, standards-based websites using HTML5, CSS3, JAVASCRIPT, REACTJS, WEBPACK, BABEL, NEXTJS, REST API, GRAPHQL
                  </li>
                </ul>
              </div>

              <div className="box">
                <ul>
                  <li>
                    Expertise working with content management systems including WordPress, Textpattern, and Frog CMS. Install and manage multi-network of WordPress multisites. Create custom and branded WordPress themes.
                  </li>
                  <li>
                    Experience in release coordination and quality assurance. Develop test plans, work with team members to schedule and resolve product defects and enhancements.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accomplishments">
            <h1 className={firaSans.className}>ACCOMPLISHMENTS</h1>
            <div className="wrapBox">
              <div className="box">
                <ul>
                  <li>
                    Designed, developed, created content strategy, and maintained websites for community college and clients. Created information architecture and graphics Validated and tested web pages.
                  </li>
                  <li>
                    Reviewed and tested code and documentation. Researched, identified, and isolated issues; recommended appropriate resolutions
                  </li>
                </ul>
              </div>

              <div className="box">
                <ul>
                  <li>
                    Improved search engine rankings (from page 4 to page 1) for websites and web pages. Decreased page load time 50-400% through web development best practices.
                  </li>
                  <li>
                    Coordinated product releases and verification of decision support applications. Worked with development teams
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="workExperiences">
            <h1 className={firaSans.className}>WORK EXPERIENCES</h1>
            <div className="wrapBox">
              <div className="box">
                <p><Link href="#">RedTree</Link> <span>Pittsburgh, Pennsylvania</span></p>
              </div>

              <div className="box">
                <p><Link href="#">RazorFrog</Link> <span>San Francisco - California</span></p>
              </div>

              <div className="box">
                <p><Link href="#">BMG Media</Link> <span>Birmingham - Michigan</span></p>
              </div>
            </div>
          </div>

          <div className="education">
            <h1 className={firaSans.className}>EDUCATIONS</h1>
            <div className="wrapBox">
              <div className="box">
                <h2>Harvard CS50</h2>
                <ul>
                  <li>UI/UX Designer (2016)</li>
                </ul>
                <hr />
                <h2>University of Muhammadiyah Jakarta</h2>
                <ul>
                  <li>Communication Advertising (2021)</li>
                </ul>
                <hr />
              </div>
            </div>
          </div>

          <div className="sertification">
            <h1 className={firaSans.className}>SERTIFICATIONS</h1>
            <div className="wrapBox">
              <div className="box">
                <h2><Link href="">Harvard CS50 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
                <ul>
                  <li>UI/UX Designer (2016)</li>
                </ul>
                <hr />
                <h2><Link href="">Dicoding <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
                <ul>
                  <li>Communication Advertising (2021)</li>
                </ul>
                <hr />
              </div>
            </div>
          </div>

          <div className="biodata">
            <h1 className={firaSans.className}>BIODATA</h1>
            <div className="wrapBox">
              <div className="box">
                <div className="boxImage">
                  <div className="image" onClick={handleModal}>
                    <Image src="/wanda-azhar.jpg" alt='wanda azhar portfolio web developer' width={100} height={100} />
                  </div>
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faUser} className='icon' /> : Wanda Riezka Azhari (Wanda Azhar)
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faPhone} className='icon' /> : 646-4671926
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faEnvelope} className='icon' /> : wandaazhar@gmail.com
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faMapLocation} className='icon' /> : Canton, MI, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPhoto openModal={openModal} closeModal={() => setOpenModal(false)} isLoading={isLoading} setIsLoading={setIsLoading} />
    </section>
  );
}

export default Hero;