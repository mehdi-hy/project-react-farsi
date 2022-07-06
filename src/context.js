import React, { useState, useContext, useReducer, useEffect } from 'react';

import reducer from './reducer';

const AppContext = React.createContext();
const defaultState = {
  modal: false,
  modalSave: false,
  modalUpdate: false,
  modalHistory: false,
  sideBar: false,
  sideBarCenter: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const showModal = () => {
    dispatch({ type: 'SHOW_MODAL' });
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  const openSideBar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };
  const closeSideBar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };
  const openSideBarCenter = () => {
    dispatch({ type: 'OPEN_SIDEBAR_CENTER' });
  };
  const openModalSave = () => {
    dispatch({ type: 'OPEN_MODAL_SAVE' });
  };
  const closeModalSave = () => {
    dispatch({ type: 'CLOSE_MODAL_SAVE' });
  };
  const openModalUpdate = () => {
    dispatch({ type: 'OPEN_MODAL_UPDATE' });
  };
  const closeModalUpdate = () => {
    dispatch({ type: 'CLOSE_MODAL_UPDATE' });
  };
  const openModalHistory = () => {
    dispatch({ type: 'OPEN_MODAL_HISTORY' });
  };
  const closeModalHistory = () => {
    dispatch({ type: 'CLOSE_MODAL_HISTORY' });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        showModal,
        closeModal,
        openSideBar,
        closeSideBar,
        openSideBarCenter,
        openModalSave,
        closeModalSave,
        openModalUpdate,
        closeModalUpdate,
        openModalHistory,
        closeModalHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
