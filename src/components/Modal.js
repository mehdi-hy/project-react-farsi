import React from 'react';
import {
  faXmark,
  faFileCirclePlus,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useGlobalContext } from '../context';
import ModalCenter from './ModalCenter';
import SideBar from './SideBar';

const Modal = () => {
  const { closeModal, modal, openSideBar } = useGlobalContext();
  const handleClose = () => {
    closeModal();
  };
  const handleSideBar = () => {
    openSideBar();
  };
  return (
    <section className={modal ? 'modal-overlay open-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <SideBar />
        <nav className='modal-nav'>
          <div className='right-title'>
            <button onClick={handleClose}>
              <FontAwesomeIcon icon={faXmark} className='x-mark' />
            </button>
            <h4 className='right-title-h4'> ویرایش منو</h4>
          </div>
          <div className='left-title'>
            <button className='btn-right'>
              ذخیره
              <span>
                <FontAwesomeIcon icon={faFileCirclePlus} />
              </span>
            </button>
            <button className='btn-left'>
              <FontAwesomeIcon icon={faClock} />
            </button>
          </div>
        </nav>
        <article className='modal'>
          <header className='article-header'>
            <div className='right'>
              <h6>نام منو</h6>
              <h4>تست</h4>
            </div>

            <button onClick={handleSideBar}>
              <span> افزودن</span>

              <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </header>
          <ModalCenter />
        </article>
      </div>
    </section>
  );
};

export default Modal;
