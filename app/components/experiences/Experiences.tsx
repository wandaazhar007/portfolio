'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './experiences.scss';
import { motion } from 'framer-motion';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Experiences: React.FC = () => {
  return (
    <div className="experiences">
      <h1 >What do I do?</h1>
      <div className="wrapBox">
        <div className="box">
          <ul className="ulBox">
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="liBox"
            >
              <span className="point"> Research</span> Manage websites for individual, business and non-profit. Meet with clients to identify objectives and scope of website. Maintain regular client communication updates, issue list, and project plan.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="liBox"
            >
              <span className="point">Design</span>
              Develops prototypes and mock-ups to help develop, demonstrate, and validate business requirements to ensure all stakeholders understand what will be built and to help identify potential issues early in the project.
            </motion.li>
          </ul>
        </div>

        <div className="box">
          <ul className="ulBox">
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="liBox"
            >
              <div className="groupSkill">
                <span className="point">Programming Language & Tools</span>
                <button className="skill">
                  HTML5 <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipHtml">
                    <p className='heading'>HTML5 (5 Years Experience)</p>
                    With half a decade of hands-on experience, I've become a seasoned HTML practitioner. From foundational static content to dynamic interactions, I've fine-tuned my skills in crafting clean, accessible, and responsive web pages. My journey with HTML is a testament to my ability to seamlessly integrate multimedia, optimize for search engines, and ensure cross-device compatibility.</div>
                </button>
                <button className="skill">
                  CSS3 <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipCss">
                    <p className='heading'>CSS (5 Years Experience)</p>
                    With five years of dedicated experience, I've become a seasoned CSS practitioner, seamlessly blending design and functionality. From creating pixel-perfect layouts to introducing animations and responsive designs, I bring a keen eye for detail to every project.
                  </div>
                </button>
                <button className="skill">
                  JavaScript <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipJavaScript">
                    <p className='heading'>JavaScript (3 Years Experience)</p>
                    From scripting novice to dynamic web developer. Expert in DOM manipulation, user interactions, APIs. Creating engaging, performance-driven solutions. Staying current with modern frameworks. Pushing web dev boundaries.</div>
                </button>
                <button className="skill">
                  TypeScript <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipTypeScript">
                    <p className='heading'>TypeScript (1 Years Experience)</p>
                    Leveraging static typing and OOP principles, I've seamlessly transitioned to TypeScript. Enhancing code quality, catch errors early, and deliver robust, maintainable applications.</div>
                </button>
                <button className="skill">
                  ReactJs <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipReactJs">
                    <p className='heading'>ReactJs (2 Years Experience)</p>
                    Mastering component-based architecture, state management, and JSX. Crafting dynamic user interfaces and scalable web applications. Proficient in React hooks and context API for optimal code efficiency.
                  </div>
                </button>
                <button className="skill">
                  NodeJs <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipNodeJs">
                    <p className='heading'>NodeJs (2 Years Experience)</p>
                    Empowering server-side development with Node.js. Building efficient and scalable APIs, integrating databases, and handling asynchronous operations seamlessly. Expertise in Express.js for creating robust web applications.
                  </div>
                </button>
                <button className="skill">
                  ExpressJs <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipExpressJs">
                    <p className='heading'>ExpressJs (2 Years Experience)</p>
                    <ul className="ulTooltip">
                      <li className="liTooltip liTooltipExpress">
                        Developed and deployed a microservices architecture for a high-traffic e-commerce website.
                      </li>
                      <li className="liTooltip liTooltipExpress">
                        resulting in a 25% increase in page load speed and a 20% increase in overall site performance.
                      </li>
                      <li className="liTooltip liTooltipExpress">
                        Collaborated with front-end developers to integrate user-facing elements with server-side logic, resulting in a 15% increase in user engagement and a 10% increase in conversion rates.
                      </li>
                      <li className="liTooltip liTooltipExpress">
                        Implemented security measures and data protection protocols, ensuring compliance with industry standards and preventing data breaches.
                      </li>
                    </ul>
                  </div>
                </button>
                <button className="skill">
                  MySql <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipMySql">
                    <p className='heading'>MySql (3 Years Experience)</p>
                    <ul className="ulTooltip">
                      <li className="liTooltip liTooltipMysql">
                        Designed the database architecture for client projects.
                      </li>
                      <li className="liTooltip liTooltipMysql">
                        Developed Data Flow Diagrams, Entity Relationship Diagrams and Data Structure Diagrams.
                      </li>
                      <li className="liTooltip liTooltipMysql">
                        Ensured 24×7 database availability, reliability and security while in a production environment.
                      </li>
                    </ul>
                  </div>
                </button>
                <button className="skill">
                  Rest API <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipRestApi">
                    <p className='heading'>Rest API (2 Years Experience)</p>
                    Crafting robust RESTful APIs, handling data transactions, and ensuring secure communication. Proficient in API design, endpoints, and authentication for seamless data interaction</div>
                </button>
                <button className="skill">
                  GIT <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipGit">
                    <p className='heading'>GIT (2 Years Experience)</p>
                    Mastering version control with Git. Skillfully managing repositories, branching, merging, and collaborating effectively with teams for streamlined code development and collaboration</div>
                </button>
                <button className="skill">
                  GitHub <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipGithub">
                    <p className='heading'>GitHub (2 Years Experience)</p>
                    Leveraging GitHub for efficient version control, collaboration, and project management. Effectively utilizing features like pull requests, issues, and code reviews to facilitate seamless teamwork and code development.</div>
                </button>
                <button className="skill">
                  Linux Server <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipLinux">
                    <p className='heading'>Linux Server (2 Years Experience)</p>
                    Competent in Linux server administration, ensuring system stability and security. Proficient in managing configurations, deploying applications, and troubleshooting to maintain robust server environments.</div>
                </button>
                <button className="skill">
                  Nginx <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipNginx">
                    <p className='heading'>Nginx (2 Years Experience)</p>
                    Skillfully configuring and managing Nginx web servers. Optimizing performance, handling load balancing, and ensuring secure and efficient web application delivery.</div>
                </button>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="liBox"
            >
              <span className="point">Development & Implementation</span> Develops the website and secured portals. Start from front-end and performs testing implementation. Provides technical support with the integration of front-end HTML, CSS and JavaScript design deliverables to the back-end development.
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;