'use client'
import Image from 'next/image';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faMapLocation, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ModalPhoto from '../modalPhoto/ModalPhoto';
import { useState } from 'react';
import Headline from '../headline/Headline';
import Experiences from '../experiences/Experiences';
import Accomplishments from '../accomplishments/Accomplishments';
import WorkExperiences from '../workExperiences/WorkExperiences';
import Educations from '../educations/Educations';
// import Certifications from '../certifications/Certifications';
import Certifications from '../certifications/Certifications';
import Biodata from '../biodata/Biodata';
// import { Fira_Sans } from 'next/font/google';

// const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '500', '700'] });
const Hero: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = (): any => {
    setOpenModal(true);
    setIsLoading(true);
  }
  return (
    <section className="home">
      <div className="wrapContainer">
        <div className="sectionContainer">

          <Headline />
          <Experiences />
          <Accomplishments />
          <WorkExperiences />
          <Educations />
          <Certifications />
          <Biodata />

        </div>
      </div>
      {/* <ModalPhoto openModal={openModal} closeModal={() => setOpenModal(false)} isLoading={isLoading} setIsLoading={setIsLoading} /> */}
    </section>
  );
}

export default Hero;