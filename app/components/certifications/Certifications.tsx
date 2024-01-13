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
          <h2><Link href="https://umj.ac.id" target="_blank">University of Muhammadiyah Jakarta <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li>Communication Advertising (2021)</li>
          </ul>
          <hr />
          {/* <h2><Link href="">Harvard CS50 (edx online) <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li>UI/UX Web Design (2021)</li>
          </ul> */}
          <hr />
          <h2><Link href="https://online.umich.edu" target="_blank">University of Michigan <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li><Link href="https://coursera.org/share/7ed906e9a2caa104eff295594f6a6180" target="_blank">Web Design for Everybody <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/09e31a65562b56a318db5b2b71087e03" target="_blank">Advanced Styling with Responsive Design <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/45c8a53d48df1f01cfee70448b942f3d" target="_blank">Interactivity with JavaScript <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/1ef1ca40c859af21e51560628375c188" target="_blank">Introduction to CSS3 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/0cef304219c8f7f0a6374ca52b199fe3" target="_blank">Introduction to HTML5 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
          </ul>
          <hr />
          <h2><Link href="#" target="_blank">Meta Front-End Developer <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></h2>
          <ul>
            <li><Link href="https://coursera.org/share/58162217487a2d7d265244d4c14803fd" target="_blank">Introduction Front-End Development <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/d7224200c04c85b599c44633c3bda68f" target="_blank">Programming with JavaScript <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/9953c74eaeb424f9a3d65622b611e193" target="_blank">GIT Version Control <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
            <li><Link href="https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74" target="_blank">Advance React <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></Link></li>
          </ul>
          <hr />
        </motion.div>
      </div>
    </div>
  );
}

export default Certifications;