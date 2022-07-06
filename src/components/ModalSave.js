import React from 'react';
import { faXmark, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';

const ModalSave = () => {
  const { modalSave, closeModalSave } = useGlobalContext();
  const handleCloseSave = () => {
    closeModalSave();
  };
  return (
    <section
      className={modalSave ? 'modal-overlay open-modal' : 'modal-overlay'}
    >
      <article className='modal-save'>
        <header className='sideBar-header'>
          <div className='sideBar-header-right' onClick={handleCloseSave}>
            <button className='sideBar-header-btn-close'>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h4>افزودن به منو</h4>
          </div>
          <button className='sideBar-header-btn-save'>
            <span className='sideBar-header-btn-save-span'> ذخیره</span>
            <FontAwesomeIcon icon={faFileCirclePlus} />
          </button>
        </header>
      </article>
    </section>
  );
};

export default ModalSave;
