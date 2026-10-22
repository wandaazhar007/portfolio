'use client'
import './headline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// import Lottie from "lottie-react";
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animation_hi4 from "../../../public/animation_hi4.json";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Headline: React.FC = () => {
  return (
    <div className="headline">
      <div className="top">
        <motion.h3
          initial={{ opacity: 0, scale: 1, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
        >Hi, There... !
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 1, y: -100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animationBox">
          <Lottie animationData={animation_hi4} loop={true} className='animationHi' />
        </motion.div>
      </div>
      <motion.h1
        animate={{
          scale: [0, 1.2, 1],
          rotate: [0, -3, 0]
        }}
      >WordPress Developer & Web Designer in Twin Falls, Idaho
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* As a professional web developer, I bring innovation to the forefront. Beyond building websites, I design interactive spaces that stimulate curiosity and evoke emotions */}
        I design and build fast, SEO-ready websites, from WordPress sites to modern Next.js apps. AI tools like Claude Code and ChatGPT help me move faster, and I personally review and own the quality of everything I ship.
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
      <Link href="https://www.linkedin.com/in/wanda-azhar/" target="_blank" rel="noopener noreferrer">
        <motion.button
          animate={{
            scale: [0, 1.2, 1],
            rotate: [0, -3, 0]
          }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          <span>LinkedIn Profile</span>
        </motion.button>
      </Link>
    </div>
  );
}

export default Headline;