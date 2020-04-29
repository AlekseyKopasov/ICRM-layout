export default () => {
  const scrollLists = document.querySelectorAll('[data-simplebar]');

  if (!scrollLists) {
    return;
  }

  scrollLists.forEach((list) => {
    new SimpleBar(list, {
      autoHide: false,
      crollbarMinSize: 4
    });
    }
  );
};
