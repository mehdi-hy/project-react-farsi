import React from 'react';
import Menu from './Menu';
import {
  faCirclePlus,
  faClock,
  faCircleQuestion,
  faXmark,
  faCaretDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';
import Modal from './Modal';
import ModalSave from './ModalSave';
import ModalUpdate from './ModalUpdate';
import ModalHistory from './ModalHistory';
const MenuContainer = () => {
  const { openModalSave, openModalUpdate, openModalHistory } =
    useGlobalContext();
  const handleSave = () => {
    openModalSave();
  };
  const handleUpdate = () => {
    openModalUpdate();
  };
  const handleHistory = () => {
    openModalHistory();
  };
  return (
    <>
      {/* ===================Modal================= */}
      <Modal />
      <ModalSave />
      <ModalUpdate />
      <ModalHistory />
      {/* ===================Modal================= */}

      {/* ===================Main================= */}

      <div className='menu-container'>
        <div className='container'>
          <div className='container-title'>
            <div className='right-title'>
              <h4>مدیریت منوها</h4>
            </div>
            <div className='time-title'>
              <button className='time-title-btn-left'>
                <FontAwesomeIcon icon={faClock} onClick={handleHistory} />
              </button>
              <button className='time-title-btn-center'>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </button>
              <button className='time-title-btn-right' onClick={handleUpdate}>
                7:2.5.8
              </button>
            </div>
          </div>
          <header className='header-container'>
            <div className='header-input'>
              <div className='header-edit'>
                <button className='btn btn-header' onClick={handleSave}>
                  افزودن منوی جدید
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className='fa-circle-plus'
                  />
                </button>
              </div>
              <div className='header-search'>
                <form className='menu-search'>
                  <label htmlFor='' id='search' className='menu-search-label'>
                    جستجو...
                  </label>
                  <input
                    id='search'
                    type='text'
                    className='menu-search-input'
                  />
                </form>
              </div>

              <form className='header-sort'>
                <input list='sort' placeholder='مرتب سازی ...' />

                <datalist id='sort'>
                  <option value='sort' />
                  <option value='sss' />
                  <option value='www' />
                </datalist>
                <div className='btn-container'>
                  <button className='btn-remove'>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <button className='btn-add'>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </button>
                </div>
              </form>
            </div>
            <div className='header-info'>
              <h4>اخرین ویرایش:</h4>
            </div>
          </header>
          <article>
            <div className='container-center'>
              <Menu />
              <Menu />
              <Menu />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
