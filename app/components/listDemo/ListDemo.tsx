//app/components/listDemo/ListDemo.tsx
'use client';

import Image from 'next/image';
import './listDemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import ModalDemo from '../modalDemo/ModalDemo';
import { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
import animation_work2 from '../../../public/animation_work2.json';
import dynamic from 'next/dynamic';
import { apiGet } from '@/app/lib/api';
import { mapWorkToLegacyCard, type LegacyWorkCard } from '@/app/lib/mappers';
import type { WorksApiResponse } from '@/app/types/work';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const ListDemo: React.FC = () => {
  const [allWorks, setAllWorks] = useState<LegacyWorkCard[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [propsUuid, setPropsUuid] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [msg, setMsg] = useState('');
  const limit = 2;

  const paginatedWorks = useMemo(() => {
    const start = page * limit;
    const end = start + limit;
    return allWorks.slice(start, end);
  }, [allWorks, page]);

  const pages = Math.ceil(allWorks.length / limit);

  const handleModal = (uuid: string) => {
    setOpenModal(true);
    setPropsUuid(uuid);
  };

  const getMyWork = async () => {
    setIsLoading(true);

    try {
      const response = await apiGet<WorksApiResponse>('/works', {
        isPublished: true,
        limit: 100,
      });

      const mapped = response.data.items.map(mapWorkToLegacyCard);
      setAllWorks(mapped);
    } catch (error) {
      console.error('Failed to fetch works:', error);
      setAllWorks([]);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const changePage = ({ selected }: { selected: number }) => {
    setIsLoading(true);

    setTimeout(() => {
      setPage(selected);
      setIsLoading(false);
    }, 300);

    if (selected > 9) {
      setMsg('Please search by specific keyword...');
    } else {
      setMsg('');
    }
  };

  useEffect(() => {
    getMyWork();
  }, []);

  useEffect(() => {
    if (page > 0 && page >= pages && pages > 0) {
      setPage(0);
    }
  }, [page, pages]);

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
              >
                Explore My Web Development Projects
              </motion.h1>

              <div className="box">
                <div className="box1">
                  Welcome to the heart of my portfolio — a collection of web
                  development projects that showcase my skills, creativity, and
                  dedication to crafting impactful digital experiences. Each
                  project reflects my passion for coding and my commitment to
                  delivering solutions that combine functionality, aesthetics,
                  and user-friendliness.
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 1, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="animationWra"
                >
                  <div className="animationBo">
                    <Lottie
                      animationData={animation_work2}
                      loop={true}
                      className="animationSmile"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="colRight">
              <div className="headBox">
                <motion.h1
                  animate={{
                    scale: [0, 1.5, 1],
                  }}
                >
                  Learn, Collaborate, Connect:
                </motion.h1>
              </div>

              <motion.div
                animate={{
                  rotate: [0, -10, 0],
                }}
                className="box box1"
              >
                Feel free to explore, interact, and get inspired by these
                projects.
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                }}
                className="box box2"
              >
                If you&apos;re interested in collaborating, have questions, or
                want to learn more about my development process, don&apos;t
                hesitate to reach out.
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, -10, 0],
                }}
                className="box box3"
              >
                Each project is a testament to my dedication to the craft and my
                eagerness to contribute to the digital landscape.
              </motion.div>
            </div>
          </div>

          {msg ? <p style={{ marginTop: '2rem', fontSize: '1.4rem' }}>{msg}</p> : null}

          {isLoading ? (
            <div className="content">
              {(paginatedWorks.length ? paginatedWorks : Array.from({ length: limit })).map(
                (_item, index) => (
                  <div className="box skeletonBox" key={index}>
                    <div className="image imageSkeleton skeleton skeletonImage"></div>

                    <div className="detail detailSkeleton">
                      <div className="title skeleton skeletonTitle">
                        <span>Loading title</span>
                      </div>
                      <p className="desc skeleton skeletonDesc">
                        <span>Loading description</span>
                      </p>
                      <p className="desc skeleton skeletonDesc"></p>
                      <p className="desc skeleton skeletonDesc"></p>

                      <div className="tag">
                        <div className="skeleton skeletonBtnTag"></div>
                        <div className="skeleton skeletonBtnTag"></div>
                        <div className="skeleton skeletonBtnTag"></div>
                      </div>

                      <div className="license skeleton skeletonLicense"></div>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="content">
              {paginatedWorks.map((myWork, index) => (
                <div className="box" key={index} onClick={() => handleModal(myWork.id)}>
                  <div className="image">
                    <Image
                      src={myWork.urlImage}
                      alt={myWork.name}
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className="detail">
                    <div className="title">{myWork.name}</div>
                    <p className="desc">{myWork.desc.substring(0, 100)} ...</p>

                    <div className="tag">
                      {(myWork.tags.length ? myWork.tags : ['project']).slice(0, 3).map((tag) => (
                        <button key={tag}>{tag}</button>
                      ))}
                    </div>

                    <div className="license">
                      <span>
                        <FontAwesomeIcon icon={faScaleBalanced} className="icon" />{' '}
                        {myWork.license || 'Private'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pagination">
          <div className="box-container">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageCount={Math.max(1, pages)}
              onPageChange={changePage}
              // forcePage={page}
              forcePage={Math.min(page, Math.max(0, pages - 1))}
              containerClassName={'pagination box-container'}
              pageLinkClassName={'link'}
              previousLinkClassName={'link'}
              nextLinkClassName={'link'}
              activeLinkClassName={'link on'}
              disabledLinkClassName={'disabled'}
            />
          </div>
        </div>
      </section>

      <ModalDemo
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        propsUuid={propsUuid}
      />
    </>
  );
};

export default ListDemo;