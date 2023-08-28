import './experiences.scss';
import { motion } from 'framer-motion';

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
    </div>
  );
}

export default Experiences;