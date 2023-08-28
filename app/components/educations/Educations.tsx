import './educations.scss';
import { motion } from 'framer-motion';

const Educations: React.FC = () => {
  return (
    <div className="education">
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
    </div>
  );
}

export default Educations;