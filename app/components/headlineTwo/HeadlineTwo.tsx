'use client'
import './headlineTwo.scss';
// import Lottie from "lottie-react";
import animation_smile from "../../../public/animation_smile.json";
import animation_hi from "../../../public/animation_hi.json";
import animation_grafik from "../../../public/animation_grafik.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const HeadlineTwo: React.FC = () => {
  return (
    <section className="headlineTwo">
      <div className="animationWrap">
        <Lottie animationData={animation_smile} loop={true} className='animationSmile' />
        <Lottie animationData={animation_hi} loop={true} className='animationSmile' />
        <Lottie animationData={animation_grafik} loop={true} className='animationSmile' />
      </div>

      <div className="title">
        <h1>Transforming Ideas into Web Reality</h1>
        <p>Reviewed and tested code and documentation. Researched, identified, and isolated issues</p>
      </div>

      <div className="github">
        <Link href="https://github.com/wandaazhar007/" target="_blank">
          <button><FontAwesomeIcon icon={faGithub} className='iconGithub' /> Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='iconLink' /></button>
        </Link>
      </div>

    </section>
  );
}

export default HeadlineTwo;