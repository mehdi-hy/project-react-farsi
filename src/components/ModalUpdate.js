import React from 'react';
import { useGlobalContext } from '../context';
import { faXmark, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalUpdate = () => {
  const { modalUpdate, closeModalUpdate } = useGlobalContext();
  const handleClose = () => {
    closeModalUpdate();
  };
  return (
    <section
      className={modalUpdate ? 'modal-overlay open-modal' : 'modal-overlay '}
    >
      <section className='update'>
        <header className='update-header'>
          <div className='update-header-right'>
            <button className='update-header-close-btn' onClick={handleClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h4 className='update-header-right-h4'>بروز رسانی ...</h4>
          </div>
          <button className='update-header-left-btn'>
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </button>
        </header>
        <article className='update-article'>
          <h5 className='update-article-text'>ماژوا سریرگ ساز:</h5>
          <h5 className='update-article-text'>
            قبل از بروز رسانی توضیحات را <a>مشاهده</a> کنید
          </h5>
          <button className='btn btn-header update-btn'>
            شروع بروز رسانی...
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className='fa-circle-plus'
            />
          </button>
        </article>

        <footer>
          <div className='update-progress'>
            <label id='file' className='update-progress-title'>
              در حال بروز رسانی ...
            </label>
            <progress
              className='update-progress-bar'
              id='file'
              value='32'
              max='100'
            ></progress>
          </div>
        </footer>
      </section>
    </section>
  );
};

export default ModalUpdate;
