import Image from 'next/image';
import './modalPhoto.scss';

const ModalPhoto = ({ openModal, closeModal, isLoading, setIsLoading }: any) => {

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (!openModal) return null
  return (
    <div className="modalPhoto">
      {isLoading ? (
        <div className="boxPhoto">
          <div className="skeletonProfile skeletonProfileImage">Are you ready..?</div>
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