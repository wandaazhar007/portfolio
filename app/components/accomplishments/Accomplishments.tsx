'use client'
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
              Improved search engine rankings (from page 4 to page 1) for websites and web pages. Decreased page load time 50-400% through web development best practices.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Collaborated with senior designers and developers to transform design concepts into functional websites, resulting in a 20% increase in conversions and a 15% decrease in bounce rate.
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
              Assisted in designing and creating website layouts, graphics, and user interfaces. leading to a 25% increase in user engagement metrics.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Maintained and updated existing websites with new content, features, and enhancements. resulting in a 50% reduction in development time within one year.
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;