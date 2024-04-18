'use client'
import Image from 'next/image';
import './listDemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import ModalDemo from '../modalDemo/ModalDemo';
import { useEffect, useState } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import animation_work2 from "../../../public/animation_work2.json";

const ListDemo: React.FC = () => {
  const [myWorks, setMyWorks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [propsId, setPropId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(0);
  const [msg, setMsg] = useState("");
  const [limit, setLimit] = useState(2);
  const [keywordButton, setKeywordButton] = useState("");


  type MyWork = {
    id: number,
    name: string,
    title: string,
    desc: string,
    license: string,
    urlImage: string,
  }
  const handleModal = (id: number) => {
    setOpenModal(true);
    setPropId(id);
  }

  const getMyWork = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_ALL_MY_WORK}?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    console.log(response.data.result);
    setMyWorks(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }


  const changePage = ({ selected }: { selected: number }) => {
    setIsLoading(true)
    setTimeout(() => {
      setPage(selected);
    }, 300)
    if (selected === 9) {
      setMsg(
        "Please search by specific keyword..."
      );
    } else {
      setMsg("");
    }
  };

  useEffect(() => {
    getMyWork();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      getMyWork();
    }, 1000)
  }, [page])


  return (
    <>

      <section className="listDemo">
        <div className="wrapContainer">
          <div className="header">
            <div className="colLeft">
              <motion.h1
                initial={{ opacity: 0, scale: 1, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
              >Explore My Web Development Projects</motion.h1>
              <div className="box">
                <div className="box1">
                  Welcome to the heart of my portfolio — a collection of web development projects that showcase my skills, creativity, and dedication to crafting impactful digital experiences. Each project reflects my passion for coding and my commitment to delivering solutions that combine functionality, aesthetics, and user-friendliness.
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="animationWra">
                  <div className="animationBo">
                    <Lottie animationData={animation_work2} loop={true} className='animationSmile' />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="colRight">
              <div className="headBox">
                <motion.h1
                  animate={{
                    scale: [0, 1.5, 1]
                  }}
                >Learn, Collaborate, Connect:</motion.h1>
              </div>
              <motion.div
                animate={{
                  rotate: [0, -10, 0]
                }}
                className="box box1">
                Feel free to explore, interact, and get inspired by these projects.
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 10, 0]
                }}
                className="box box2">
                If you&apos;re interested in collaborating, have questions, or want to learn more about my development process, don&apos;t hesitate to reach out.
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, -10, 0]
                }}
                className="box box3">
                Each project is a testament to my dedication to the craft and my eagerness to contribute to the digital landscape.
              </motion.div>
            </div>
          </div>

          {isLoading ? (
            <div className="content">
              {myWorks.map((myWork: MyWork, index) => (
                <div className="box skeletonBox" key={index} >
                  <div className="image imageSkeleton skeleton skeletonImage">
                    {/* <Image src={myWork.urlImage} width={500} height={500} alt='' /> */}
                  </div>
                  <div className="detail detailSkeleton">
                    <div className="title skeleton skeletonTitle"><span>{myWork.title}</span></div>
                    <p className="desc skeleton skeletonDesc"><span>{myWork.desc}</span></p>
                    <p className="desc skeleton skeletonDesc"></p>
                    <p className="desc skeleton skeletonDesc"></p>
                    <div className="tag">
                      <div className="skeleton skeletonBtnTag"></div>
                      <div className="skeleton skeletonBtnTag"></div>
                      <div className="skeleton skeletonBtnTag"></div>
                    </div>
                    <div className="license skeleton skeletonLicense">
                      {/* <span></span>
                      <span></span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="content">
                {myWorks.map((myWork: MyWork, index) => (
                  <div className="box" key={index} onClick={() => handleModal(myWork.id)}>
                    <div className="image">
                      <Image src={myWork.urlImage} alt='portfolio wanda azhar' width={500} height={500} />
                    </div>
                    <div className="detail">
                      <div className="title">{myWork.name}</div>
                      <p className="desc">{myWork.desc.substring(0, 100)} ...</p>
                      <div className="tag">
                        <button>reactjs</button>
                        <button>nextjs</button>
                        <button>tailwind-css</button>
                      </div>
                      <div className="license">
                        <span><FontAwesomeIcon icon={faScaleBalanced} className='icon' /> {myWork.license}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="pagination">
          <div className="box-container">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={Math.min(10, pages)}
              onPageChange={changePage}
              containerClassName={"pagination box-container"}
              pageLinkClassName={"link"}
              previousLinkClassName={"link"}
              nextLinkClassName={"link"}
              activeLinkClassName={"link on"}
              disabledLinkClassName={"disabled"}
            />
          </div>
        </div>
      </section>

      <ModalDemo openModal={openModal} closeModal={() => setOpenModal(false)} propsId={propsId} />
    </>
  );
}

export default ListDemo;