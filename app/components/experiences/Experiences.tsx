import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './experiences.scss';
import { motion } from 'framer-motion';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Experiences: React.FC = () => {
  return (
    <div className="experiences">
      <h1 >MY EXPERIENCES</h1>
      <div className="wrapBox">
        <div className="box">
          <ul>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="point"> Research, Design & Development Website</span> Manage websites for individual, business, non-profit, and higher education. Meet with clients to identify objectives and scope of website. Maintain regular client communication updates, issue list, and project plan.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="point">Website Implementation</span>
              Manage websites for individual, business, non-profit, and higher education. Meet with clients to identify objectives and scope of website. Maintain regular client communication updates, issue list, and project plan.
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
              <div className="groupSkill">
                <span className="point">Programming Language </span>
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
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
                <button className="skill">
                  MySql <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipMySql">
                    <p className='heading'>MySql (3 Years Experience)</p>
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
                <button className="skill">
                  Rest API <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipRestApi">
                    <p className='heading'>Rest API (2 Years Experience)</p>
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
                <button className="skill">
                  GIT <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipGit">
                    <p className='heading'>GIT (2 Years Experience)</p>
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
                <button className="skill">
                  GitHub <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipGithub">
                    <p className='heading'>GitHub (2 Years Experience)</p>
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
                <button className="skill">
                  Linux Server <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipLinux">
                    <p className='heading'>Linux Server (2 Years Experience)</p>
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
                <button className="skill">
                  Nginx <FontAwesomeIcon icon={faInfoCircle} />
                  <div className="tooltip tooltipNginx">
                    <p className='heading'>Nginx (2 Years Experience)</p>
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi autem beatae, tenetur consequatur ratione delectus reprehenderit voluptatem deleniti, voluptatum accusamus quis exercitationem optio quibusdam. Sapiente dolor ipsam reprehenderit hic fuga iste odio vitae facere nihil officiis. Recusandae, debitis ducimus!</div>
                </button>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="point">Experience in release coordination</span> and quality assurance. Develop test plans, work with team members to schedule and resolve product defects and enhancements.
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;