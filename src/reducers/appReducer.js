const appReducer = {
  toggleMenu: (state) => {
    state.isMenuOpen = !state.isMenuOpen
  },
  closeMenu: (state) => {
    state.isMenuOpen = false
  }
};

export default appReducer;