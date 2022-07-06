import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SideBarCenter = () => {
  return (
    <article>
      <div className='sideBar-article-title article-center'>
        <h4 className='side-article-title-h4'>افزودن صفحه جدید</h4>
        <h6 className='side-article-title-h6'>نام منو</h6>
        <div className='sideBar-title-btns'>
          <button className='sideBar-title-btn-right'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
      <div className='sideBar-article-title article-center'>
        <h4 className='side-article-title-h4'>افزودن صفحه جدید</h4>
        <h6 className='side-article-title-h6'>نام منو</h6>
        <div className='sideBar-title-btns'>
          <button className='sideBar-title-btn-right'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
      <div className='sideBar-article-title article-center'>
        <h4 className='side-article-title-h4'>افزودن صفحه جدید</h4>
        <h6 className='side-article-title-h6'>نام منو</h6>
        <div className='sideBar-title-btns'>
          <button className='sideBar-title-btn-right'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
      <div className='sideBar-article-title article-center'>
        <h4 className='side-article-title-h4'>افزودن صفحه جدید</h4>
        <h6 className='side-article-title-h6'>نام منو</h6>
        <div className='sideBar-title-btns'>
          <button className='sideBar-title-btn-right'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default SideBarCenter;
