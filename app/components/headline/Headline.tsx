'use client'
import './headline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faArrowUpRightFromSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import Lottie from "lottie-react";
import animation_hi4 from "../../../public/animation_hi4.json";

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
      >I do more than just build a website
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        As a professional web developer, I bring innovation to the forefront. Beyond building websites, I design interactive spaces that stimulate curiosity and evoke emotions
        {/* and encourage meaningful interactions for users. */}
        {/* I work for an advertising digital agency as a front-end web designer. currently, I&apos;m not looking for a job but I love to help small businesses grow especially with websites or landing pages */}
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
      <Link href="https://www.fiverr.com/wandaazhar/" target="_blank">
        <motion.button
          animate={{
            scale: [0, 1.2, 1],
            rotate: [0, -3, 0]
          }}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
          <span>My Fiverr Profile</span>
        </motion.button>
      </Link>
    </div>
  );
}

export default Headline;