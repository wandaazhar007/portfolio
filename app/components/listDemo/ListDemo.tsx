'use client'
import Image from 'next/image';
import './listDemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import ModalDemo from '../modalDemo/ModalDemo';
import { useEffect, useState } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';

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
    const response = await axios.get(`http://localhost:2001/my-work?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    console.log(response.data.result);
    // setTimeout(() => {
    //   setIsLoading(true)
    // }, 1000)
    // setIsLoading(true)
    // setTimeout(() => {
    setMyWorks(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
    // setIsLoading(false)
    // }, 2000)
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
            <h1>My Last Project</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque optio eum molestiae saepe sequi aperiam.</p>
          </div>

          {/* <div className="content"> */}
          {isLoading ? (
            <>
              {/* <h1 className='skeleton'>loading...</h1> */}
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
            </>
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
                        {/* {myWork.tag} */}
                        <button>reactjs</button>
                        <button>nextjs</button>
                        <button>tailwind-css</button>
                      </div>
                      <div className="license">
                        <span><FontAwesomeIcon icon={faScaleBalanced} className='icon' /> {myWork.license}</span>
                        <span>2023</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* </div> */}
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