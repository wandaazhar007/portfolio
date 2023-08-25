import Image from 'next/image';
import './modalDemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ModalDemo: any = ({ openModal, closeModal, propsId }: any) => {
  if (!openModal) return null;

  const [myWork, setMyWork] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [preview, setPreview] = useState("");
  const [github, setGithub] = useState("");
  const [tag, setTag] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [license, setLicense] = useState("");

  const getMyWorkById = async () => {
    const response = await axios.get(`http://localhost:2001/my-work/${propsId}`);
    console.log(response.data.name)
    setTimeout(() => {
      setName(response.data.name);
      setDesc(response.data.desc);
      setTag(response.data.tag);
      setPreview(response.data.preview);
      setGithub(response.data.github);
      setUrlImage(response.data.urlImage);
      setIsLoading(false);
    }, 1000)
  }

  useEffect(() => {
    getMyWorkById();
  }, [])
  return (
    <>

      <section className="modalDemo">
        <div className="wrapContainer">
          {isLoading ? (
            <>
              <div className="boxContainer">
                <div className="modalBody">
                  <div className="btnClose" onClick={closeModal}></div>
                  <div className="image skeleton skeleton-image-modal">
                    {/* <Image src="/ss_admin_kansha.png" alt='image' width={100} height={100} /> */}
                  </div>
                  <div className="content">
                    <h1 className="title skeleton skeleton-title-modal"></h1>
                    <p className="desc skeleton skeleton-desc-modal"></p>
                    <p className="desc skeleton skeleton-desc-modal"></p>
                    <p className="desc skeleton skeleton-desc-modal"></p>
                    <div className="tag">
                      <button className="skeleton skeletonBtnTag"></button>
                      <button className="skeleton skeletonBtnTag"></button>
                      <button className="skeleton skeletonBtnTag"></button>
                    </div>
                    <div className="footerModal">
                      <Link href="#" target='_blank'>
                        <button className="btn btnPreview skeleton skeletonBtnModal"> Live Preview</button>
                      </Link>
                      <Link href="#" target='_blank'>
                        <button className="btn btnGithub skeleton skeletonBtnModal">Repository</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="boxContainer">
                <div className="modalBody">
                  <div className="btnClose" onClick={closeModal}></div>
                  <div className="image">
                    <Image src={urlImage} alt='image' width={500} height={500} />
                  </div>
                  <div className="content">
                    <h1 className="title">{name}</h1>
                    <p className="desc">{desc}</p>
                    <div className="tag">
                      <button className="btnTag">ReactJs</button>
                      <button className="btnTag">NextJs</button>
                    </div>
                    <div className="footerModal">
                      <Link href={preview} target='_blank'>
                        <button className="btn btnPreview"><FontAwesomeIcon icon={faEye} className='icon' /> Live Preview</button>
                      </Link>
                      <Link href={github} target='_blank'>
                        <button className="btn btnGithub"><FontAwesomeIcon icon={faGithub} className='icon' /> Repository</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="boxContainer">
            <div className="modalBody">
              <div className="btnClose" onClick={closeModal}></div>
              <div className="image">
                <Image src="/ss_admin_kansha.png" alt='image' width={100} height={100} />
              </div>
              <div className="content">
                <h1 className="title">{name}</h1>
                <p className="desc">{desc}</p>
                <div className="tag">
                  <button className="btnTag">ReactJs</button>
                  <button className="btnTag">NextJs</button>
                </div>
                <div className="footerModal">
                  <Link href={preview} target='_blank'>
                    <button className="btn btnPreview"><FontAwesomeIcon icon={faEye} className='icon' /> Live Preview</button>
                  </Link>
                  <Link href={github} target='_blank'>
                    <button className="btn btnGithub"><FontAwesomeIcon icon={faGithub} className='icon' /> Repository</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}

export default ModalDemo;