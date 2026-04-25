//app/components/modalDemo/ModalDemo.tsx
'use client';

import Image from 'next/image';
import './modalDemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faScaleBalanced,
  faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { apiGet } from '@/app/lib/api';
import { mapWorkToLegacyCard, type LegacyWorkCard } from '@/app/lib/mappers';
import type { WorkDetailApiResponse } from '@/app/types/work';

type PropsType = {
  propsUuid: string;
  closeModal: () => void;
  openModal: boolean;
};

const ModalDemo: React.FC<PropsType> = ({ openModal, closeModal, propsUuid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [work, setWork] = useState<LegacyWorkCard | null>(null);

  useEffect(() => {
    if (!openModal || !propsUuid) return;

    const getMyWorkByUuid = async () => {
      setIsLoading(true);

      try {
        const response = await apiGet<WorkDetailApiResponse>(`/works/${propsUuid}`);
        const mapped = mapWorkToLegacyCard(response.data);
        setWork(mapped);
      } catch (error) {
        console.error('Failed to fetch work detail:', error);
        setWork(null);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    getMyWorkByUuid();
  }, [openModal, propsUuid]);

  if (!openModal) return null;

  return (
    <section className="modalDemo">
      <div className="wrapContainer">
        {isLoading ? (
          <div className="boxContainer">
            <div className="modalBody">
              <div className="btnClose" onClick={closeModal}></div>

              <div className="image skeleton skeleton-image-modal"></div>

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

                <div className="buttonGroup">
                  <Link href="#" target="_blank">
                    <button className="btn btnPreview skeleton skeletonBtnModal">
                      Live Preview
                    </button>
                  </Link>

                  <Link href="#" target="_blank">
                    <button className="btn btnGithub skeleton skeletonBtnModal">
                      Repository
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : work ? (
          <div className="boxContainer">
            <div className="modalBody">
              <div className="btnClose" onClick={closeModal}></div>

              <div className="image">
                <Image src={work.urlImage} alt={work.name} width={500} height={500} />
              </div>

              <div className="content">
                <h1 className="title">{work.name}</h1>
                <p className="desc">{work.desc}</p>

                <div className="tag">
                  {(work.tags.length ? work.tags : ['project']).slice(0, 4).map((tag) => (
                    <button className="btnTag" key={tag}>
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="buttonGroup">
                  {work.type?.toLowerCase() === 'backend' || !work.preview ? (
                    <Link href="#">
                      <button className="btn btnPreviewDisable">
                        <FontAwesomeIcon icon={faClose} className="icon" /> No Preview
                      </button>
                    </Link>
                  ) : (
                    <Link href={work.preview} target="_blank">
                      <button className="btn btnPreview">
                        Preview <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" />
                      </button>
                    </Link>
                  )}

                  <Link href={work.github || '#'} target="_blank">
                    <button className="btn btnGithub">
                      Repository
                      <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" />
                    </button>
                  </Link>
                </div>

                <div className="license">
                  <p>
                    <FontAwesomeIcon icon={faScaleBalanced} className="icon" />{' '}
                    {work.license || 'Private'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="boxContainer">
            <div className="modalBody">
              <div className="btnClose" onClick={closeModal}></div>

              <div className="content">
                <h1 className="title">Project not found</h1>
                <p className="desc">
                  The selected project could not be loaded from the backend.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModalDemo;