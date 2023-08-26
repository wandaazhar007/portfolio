'use client'
import Image from 'next/image';
import './listDemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import ModalDemo from '../modalDemo/ModalDemo';
import { useEffect, useState } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { Fira_Sans } from 'next/font/google';
const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '500', '700'] });

const ListDemo: React.FC = () => {
  const [myWorks, setMyWorks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [propsId, setPropId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(0);
  const [msg, setMsg] = useState("");
  const [limit, setLimit] = useState(2);
  const [keywordButton, setKeywordButton] = useState("");


  const handleModal = (id: any) => {
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


  const changePage = ({ selected }: any) => {
    setIsLoading(true)
    setTimeout(() => {
      setPage(selected);
    }, 1000)
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
              <h1 className={firaSans.className}>Explore My Web Development Projects</h1>
              <div className="box">
                Welcome to the heart of my portfolio — a collection of web development projects that showcase my skills, creativity, and dedication to crafting impactful digital experiences. Each project reflects my passion for coding and my commitment to delivering solutions that combine functionality, aesthetics, and user-friendliness.
              </div>
            </div>
            <div className="colRight">
              <div className="headBox">
                <h1 className={firaSans.className}>Learn, Collaborate, Connect:</h1>
              </div>
              <div className="box box1">
                Feel free to explore, interact, and get inspired by these projects.
              </div>
              <div className="box box2">
                If you're interested in collaborating, have questions, or want to learn more about my development process, don't hesitate to reach out.
              </div>
              <div className="box box3">
                Each project is a testament to my dedication to the craft and my eagerness to contribute to the digital landscape.
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="content">
              {myWorks.map((myWork: any, index) => (
                <div className="box"  >
                  <div className="image skeleton skeletonImage">

                  </div>
                  <div className="detail">
                    <div className="title skeleton skeletonTitle"></div>
                    <p className="desc skeleton skeletonDesc"></p>
                    <p className="desc skeleton skeletonDesc"></p>
                    <p className="desc skeleton skeletonDesc"></p>
                    <p className="desc skeleton skeletonDesc"></p>
                    <div className="tag">
                      <div className="skeleton skeletonBtnTag"></div>
                      <div className="skeleton skeletonBtnTag"></div>
                      <div className="skeleton skeletonBtnTag"></div>
                    </div>
                    <div className="license skeleton skeletonLicense">
                      <span> </span>
                      <span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="content">
                {myWorks.map((myWork: any, index) => (
                  <div className="box" onClick={() => handleModal(myWork.id)}>
                    <div className="image">
                      <Image src={myWork.urlImage} alt='apple' width={500} height={500} />
                    </div>
                    <div className="detail">
                      <div className="title">{myWork.name}</div>
                      <p className="desc">{myWork.desc.substring(0, 150)}</p>
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