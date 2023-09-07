'use client'
import './workExperiences.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from "lottie-react";
import animation_smile from "../../../public/animation_smile.json";

const WorkExperiences: React.FC = () => {
  return (
    <div className="workExperiences">
      <h1 >WORK EXPERIENCES</h1>
      <div className="wrapBox">
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="box">
          <p><Link href="#">RedTree</Link> <span>Pittsburgh, Pennsylvania</span></p>
        </motion.div>
        <Lottie animationData={animation_smile} loop={true} />
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="box">
          <p><Link href="#">RazorFrog</Link> <span>San Francisco - California</span></p>
        </motion.div>

        <motion.div
          className="box">
          <p><Link href="#">BMG Media</Link> <span>Birmingham - Michigan</span></p>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkExperiences;