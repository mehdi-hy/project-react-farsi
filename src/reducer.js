const reducer = (state, action) => {
  if (action.type === 'SHOW_MODAL') {
    return { ...state, modal: true };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, modal: false };
  }
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, sideBar: true };
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, sideBar: false };
  }
  if (action.type === 'OPEN_SIDEBAR_CENTER') {
    return { ...state, sideBarCenter: true };
  }
  if (action.type === 'OPEN_MODAL_SAVE') {
    return { ...state, modalSave: true };
  }
  if (action.type === 'CLOSE_MODAL_SAVE') {
    return { ...state, modalSave: false };
  }
  if (action.type === 'OPEN_MODAL_UPDATE') {
    return { ...state, modalUpdate: true };
  }
  if (action.type === 'CLOSE_MODAL_UPDATE') {
    return { ...state, modalUpdate: false };
  }
  if (action.type === 'OPEN_MODAL_HISTORY') {
    return { ...state, modalHistory: true };
  }
  if (action.type === 'CLOSE_MODAL_HISTORY') {
    return { ...state, modalHistory: false };
  }
  return state;
};
export default reducer;
