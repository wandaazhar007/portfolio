'use client'
import './biodata.scss';
import Image from 'next/image';
import './biodata.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faMapLocation, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ModalPhoto from '../modalPhoto/ModalPhoto';
import Link from 'next/link';

const Biodata = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = (): any => {
    setOpenModal(true);
    setIsLoading(true);
  }
  return (
    <>
      <div className="biodata">
        <h1 >BIODATA</h1>
        <div className="wrapBox">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="box">
            <div className="boxImage">
              <div className="image" onClick={handleModal}>
                <Image src="/wanda-azhar.jpg" alt='wanda azhar portfolio web developer' width={100} height={100} />
              </div>
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faUser} className='icon' /> : Riezka Azhari (Wanda Azhar)
            </div>
            <div className="row">
              <Link href="tel:+16604299074" target='_blank'>
                <FontAwesomeIcon icon={faPhone} className='icon' /> : 646-4671926 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='linkTab' />
              </Link>
            </div>
            <div className="row">
              <Link href="mailto:wandaazhar@gmail.com" target='_blank'>
                <FontAwesomeIcon icon={faEnvelope} className='icon' /> : wandaazhar@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='linkTab' />
              </Link>
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faMapLocation} className='icon' /> : Canton, MI, USA
            </div>
          </motion.div>
        </div>
      </div>
      <ModalPhoto openModal={openModal} closeModal={() => setOpenModal(false)} isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
}

export default Biodata;