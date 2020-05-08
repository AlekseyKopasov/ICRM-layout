export default () => {
  const noteList = document.querySelector('.header__notification-list');

  if (!noteList) {
    return;
  }

  const links = noteList.querySelectorAll('.header__notification-link');
  // const tooltipOptions = {
  //   triggerTarget: link.querySelector('span')
  // };

  links.forEach((link) => {
    let title = link.innerText;


    tippy(link, {
      offset: [-350, 0],
      content: title,
      theme: 'light'
    });
  });
};
