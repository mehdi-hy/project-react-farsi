import React from 'react';
import Menu from './Menu';
import {
  faCirclePlus,
  faClock,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';
import Modal from './Modal';
import ModalSave from './ModalSave';
const MenuContainer = () => {
  const { openModalSave } = useGlobalContext();
  const handleSave = () => {
    openModalSave();
  };
  return (
    <>
      {/* ===================Modal================= */}
      <Modal />
      <ModalSave />
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
                <FontAwesomeIcon icon={faClock} />
              </button>
              <button className='time-title-btn-center'>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </button>
              <button className='time-title-btn-right'>7:2.5.8</button>
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
                <input
                  style={{ fontFamily: 'FontAwesome' }}
                  type='text'
                  placeholder='جستجو &#xf002; '
                />
              </div>
              <div className='header-sort'>
                <form>
                  <input list='sort' placeholder='مرتب سازی ...' />

                  <datalist id='sort'>
                    <option value='sort' />
                    <option value='sss' />
                    <option value='www' />
                  </datalist>
                </form>
              </div>
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
