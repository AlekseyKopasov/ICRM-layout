export const state = () => ({
  menu: [
    {
      icon: '',
      title: 'Планирование',
      link: '#',
    },
    {
      icon: '',
      title: 'Календарь',
      link: '#',
    },
    {
      icon: '',
      title: 'Заказы',
      link: '#',
    },
    {
      icon: '',
      title: 'Контакты',
      link: '#',
    },
    {
      icon: '',
      title: 'История',
      link: '#',
    },
    {
      icon: '',
      title: 'Полезное',
      link: '#',
    },
  ],
})

export const getters = {
  menu: s => s.menu,
}
