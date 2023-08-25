import Image from 'next/image';
import './modalPhoto.scss';
import { useEffect, useState } from 'react';

const ModalPhoto: React.FC = ({ openModal, closeModal, isLoading, setIsLoading }: any) => {


  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000)
  // }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000)
  if (!openModal) return null
  return (
    <div className="modalPhoto">
      {isLoading ? (
        <div className="boxPhoto">
          <div className="skeletonProfile skeletonProfileImage">Loading Image</div>
        </div>
      ) : (
        <div className="boxPhoto">
          <Image src="/wanda-azhar.jpg" alt='wanda azhar' width={100} height={100} />
          <div className="btnClosePhoto" onClick={() => closeModal()}></div>
        </div>

      )
      }

    </div>
  );
}

export default ModalPhoto;