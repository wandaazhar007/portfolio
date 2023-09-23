'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './certifications.scss'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <div className="certification">
      <h1 >CERTIFICATIONS</h1>
      <div className="wrapBox">
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="box">
          <h2><Link href="">University of Muhammadiyah Jakarta <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li>Communication Advertising (2021)</li>
          </ul>
          <hr />
          <h2><Link href="">Harvard CS50 (edx online) <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li>UI/UX Web Design (2021)</li>
          </ul>
          <hr />
          <h2><Link href="">University of Michigan (coursera) <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li>HTML, CSS, Javascript (2022)</li>
          </ul>
          <hr />
        </motion.div>
      </div>
    </div>
  );
}

export default Certifications;