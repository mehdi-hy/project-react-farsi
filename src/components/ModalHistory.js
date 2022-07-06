import React from 'react';
import { faClock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';

const ModalHistory = () => {
  const { modalHistory, closeModalHistory } = useGlobalContext();
  const handleClose = () => {
    closeModalHistory();
  };
  return (
    <section
      className={modalHistory ? 'modal-overlay open-modal' : 'modal-overlay '}
    >
      <section className='history'>
        <header className='history-header'>
          <div className='history-header-right'>
            <button className='history-header-right-btn'>
              <FontAwesomeIcon icon={faClock} />
            </button>
            <h4 className='history-header-h4'> تاریخچه</h4>
          </div>
          <button className='history-header-left-btn'>
            <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
          </button>
        </header>
        <article className='history-article'>
          <div className='history-article-section'>
            <h4 className='history-article-empty'>empty</h4>
          </div>
        </article>
      </section>
    </section>
  );
};

export default ModalHistory;
