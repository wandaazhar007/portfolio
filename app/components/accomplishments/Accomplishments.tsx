import './accomplishments.scss';
import { motion } from 'framer-motion';

const Accomplishments: React.FC = () => {
  return (
    <div className="accomplishments">
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
    </div>
  );
}

export default Accomplishments;