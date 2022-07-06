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
      className={modalSave ? 'modal-overlay open-modal' : 'modal-overlay '}
    >
      <section className='modal-save'>
        <header className='sideBar-header modalSave-header'>
          <div className='sideBar-header-right modalSave-header-right'>
            <button
              className='sideBar-header-btn-close modalSave-btn-close'
              onClick={handleCloseSave}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h4>افزودن به منو</h4>
          </div>
          <button className='sideBar-header-btn-save modalSave-btn-save'>
            <span className='sideBar-header-btn-save-span   span-save'>
              {' '}
              ذخیره
            </span>
            <FontAwesomeIcon icon={faFileCirclePlus} />
          </button>
        </header>
        <article className='modal-save-article'>
          <div className='sideBar-article-title modal-save-article-title'>
            <h4 className='side-article-title-h4'>افزودن صفحه جدید</h4>
            <h6 className='side-article-title-h6'>نام منو</h6>
            <div className='sideBar-title-btns'>
              <button className='sideBar-title-btn-right'>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default ModalSave;
