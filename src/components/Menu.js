import { faPencil, faTrash, faPaste } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';
const Menu = () => {
  const { modal, showModal } = useGlobalContext();
  const handleModal = () => {
    showModal();
  };
  return (
    <section className='menu'>
      <div className='menu-header'>
        <div className='header-title'>منوی بالا</div>
        <div className='header-creator'>
          <div className='creator-title'>:ایجاد</div>
          <div className='date'></div>
        </div>
        <div className='header-icons'>
          <button className='header-icons-btn' onClick={handleModal}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className='header-icons-btn icons-center'>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className='header-icons-btn'>
            <FontAwesomeIcon icon={faPaste} />
          </button>
        </div>
      </div>
      <div className='menu-body'>
        <h5>:متصل به</h5>
      </div>
    </section>
  );
};

export default Menu;
