'use client'
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
          <h2>University of Muhammadiyah Jakarta</h2>
          <ul>
            <li>Communication Advertising (2021)</li>
          </ul>
          <h2>Harvard CS50 (Online)</h2>
          <ul>
            <li>UI/UX Web Design (2021)</li>
          </ul>
          <h2>University of Michigan (Online)</h2>
          <ul>
            <li>HTML, CSS, Javascript (2022)</li>
          </ul>
          <hr />
          <hr />
        </motion.div>
      </div>
    </div>
  );
}

export default Educations;