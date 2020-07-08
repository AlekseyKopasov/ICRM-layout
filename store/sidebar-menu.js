export const state = () => ({
  menu: [
    {
      icon: '',
      title: 'Планирование',
      link: 'planning'
    },
    {
      icon: '',
      title: 'Календарь',
      link: 'calendar'
    },
    {
      icon: '',
      title: 'Заказы',
      link: 'orders'
    },
    {
      icon: '',
      title: 'Контакты',
      link: 'contacts'
    },
    {
      icon: '',
      title: 'История',
      link: 'history'
    }
  ]
})

export const getters = {
  menu: s => s.menu
}
