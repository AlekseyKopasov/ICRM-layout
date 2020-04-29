export default () =>{
  const sidebar = document.querySelector('.sidebar');

  if (!sidebar) {
    return;
  }

  const TOGGLE_BUTTON = sidebar.querySelector('.sidebar__button');
  const COLLAPSE_CLASS = 'collapse';

  TOGGLE_BUTTON.addEventListener('click', () => {
    sidebar.classList.toggle(COLLAPSE_CLASS);
  });
};
