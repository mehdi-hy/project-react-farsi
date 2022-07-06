import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useGlobalContext } from '../context';
import SideBar from './SideBar';

const ModalCenter = () => {
  return (
    <section className='modal-center'>
      <SideBar />
      <header className='modal-center-header'>
        <h4>صفحه اصلی</h4>
        <div className='btn-group'>
          <button className='btn-right'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button className='btn-left'>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
      </header>
      <article></article>
    </section>
  );
};

export default ModalCenter;
