'use client'
import Image from 'next/image';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faMapLocation, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ModalPhoto from '../modalPhoto/ModalPhoto';
import { useState } from 'react';
import Headline from '../headline/Headline';
import Experiences from '../experiences/Experiences';
import Accomplishments from '../accomplishments/Accomplishments';
import WorkExperiences from '../workExperiences/WorkExperiences';
import Educations from '../educations/Educations';
// import { Fira_Sans } from 'next/font/google';

// const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '500', '700'] });
const Hero: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = (): any => {
    setOpenModal(true);
    setIsLoading(true);
  }
  return (
    <section className="home">
      <div className="wrapContainer">
        <div className="sectionContainer">

          {/* <div className="headline">
            <motion.h3
              initial={{ opacity: 0, scale: 1, x: -100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >Hi, There... !</motion.h3>
            <motion.h1
              animate={{
                scale: [0, 1.2, 1],
                rotate: [0, -3, 0]
              }}
            >I do more than just build a website
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1, x: -100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              I work for an advertising digital agency as a front-end web designer. currently, I&apos;m not looking for a job but I love to help small businesses grow especially with websites or landing pages
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="proof">
              <div className="icons">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
              <span>Rated 5 stars on Fiverr</span>
            </motion.div>
            <Link href="https://fiverr.com/" target="_blank">
              <motion.button
                animate={{
                  scale: [0, 1.2, 1],
                  rotate: [0, -3, 0]
                }}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                <span>My Fiverr Profile</span>
              </motion.button>
            </Link>
          </div> */}
          <Headline />

          {/* <div className="experiences">
            <h1 >MY EXPERIENCES</h1>
            <div className="wrapBox">
              <div className="box">
                <ul>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Manage websites for individual, business, non-profit, and higher education. Meet with clients to identify objectives and scope of website. Maintain regular client communication updates, issue list, and project plan.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Design, develop, produce and maintain cross-browser, standards-based websites using HTML5, CSS3, JAVASCRIPT, REACTJS, WEBPACK, BABEL, NEXTJS, REST API, GRAPHQL
                  </motion.li>
                </ul>
              </div>

              <div className="box">
                <ul>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Expertise working with content management systems including WordPress, Textpattern, and Frog CMS. Install and manage multi-network of WordPress multisites. Create custom and branded WordPress themes.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Experience in release coordination and quality assurance. Develop test plans, work with team members to schedule and resolve product defects and enhancements.
                  </motion.li>
                </ul>
              </div>
            </div>
          </div> */}
          <Experiences />

          {/* <div className="accomplishments">
            <h1 >ACCOMPLISHMENTS</h1>
            <div className="wrapBox">
              <div className="box">
                <ul>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Designed, developed, created content strategy, and maintained websites for community college and clients. Created information architecture and graphics Validated and tested web pages.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Reviewed and tested code and documentation. Researched, identified, and isolated issues; recommended appropriate resolutions
                  </motion.li>
                </ul>
              </div>

              <div className="box">
                <ul>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Improved search engine rankings (from page 4 to page 1) for websites and web pages. Decreased page load time 50-400% through web development best practices.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 1, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Coordinated product releases and verification of decision support applications. Worked with development teams
                  </motion.li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accomplishments />

          {/* <div className="workExperiences">
            <h1 >WORK EXPERIENCES</h1>
            <div className="wrapBox">
              <motion.div
                initial={{ opacity: 0, scale: 1, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="box">
                <p><Link href="#">RedTree</Link> <span>Pittsburgh, Pennsylvania</span></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 1, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="box">
                <p><Link href="#">RazorFrog</Link> <span>San Francisco - California</span></p>
              </motion.div>

              <motion.div
                className="box">
                <p><Link href="#">BMG Media</Link> <span>Birmingham - Michigan</span></p>
              </motion.div>
            </div>
          </div> */}
          <WorkExperiences />

          {/* <div className="education">
            <h1 >EDUCATIONS</h1>
            <div className="wrapBox">
              <motion.div
                initial={{ opacity: 0, scale: 1, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="box">
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
              </motion.div>
            </div>
          </div> */}
          <Educations />

          <div className="sertification">
            <h1 >SERTIFICATIONS</h1>
            <div className="wrapBox">
              <motion.div
                initial={{ opacity: 0, scale: 1, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="box">
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
              </motion.div>
            </div>
          </div>

          <div className="biodata">
            <h1 >BIODATA</h1>
            <div className="wrapBox">
              <motion.div
                initial={{ opacity: 0, scale: 1, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="box">
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
              </motion.div>
            </div>
          </div>

        </div>
      </div>
      <ModalPhoto openModal={openModal} closeModal={() => setOpenModal(false)} isLoading={isLoading} setIsLoading={setIsLoading} />
    </section>
  );
}

export default Hero;