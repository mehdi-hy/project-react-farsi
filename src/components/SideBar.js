import {
  faXmark,
  faFileCirclePlus,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useGlobalContext } from '../context';
import SideBarCenter from './SideBarCenter';

const SideBar = () => {
  const { sideBar, closeSideBar, sideBarCenter, openSideBarCenter } =
    useGlobalContext();
  const handleClose = () => {
    closeSideBar();
  };
  const handleCenter = () => {
    openSideBarCenter();
  };
  return (
    <aside className={sideBar ? 'sideBar show-sideBar' : 'sideBar'}>
      <header className='sideBar-header'>
        <div className='sideBar-header-right' onClick={handleClose}>
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
      <article className='sideBar-article'>
        <div className='sideBar-article-title'>
          <h4 className='side-article-title-h4'>افزودن صفحه جدید</h4>
          <h6 className='side-article-title-h6'>نام منو</h6>
          <div className='sideBar-title-btns'>
            <button className='sideBar-title-btn-right'>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button className='sideBar-title-btn-left' onClick={handleCenter}>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
        </div>
      </article>
      <section className='sideBar-center'>
        <article>{sideBarCenter && <SideBarCenter />}</article>
      </section>
    </aside>
  );
};

export default SideBar;
