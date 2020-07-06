export const state = () => ({
  menu: [
    {
      icon: '',
      title: 'Планирование',
      link: 'Planning'
    },
    {
      icon: '',
      title: 'Календарь',
      link: 'Calendar'
    },
    {
      icon: '',
      title: 'Заказы',
      link: 'Orders'
    },
    {
      icon: '',
      title: 'Контакты',
      link: 'Contacts'
    },
    {
      icon: '',
      title: 'История',
      link: 'History'
    }
  ]
})

export const getters = {
  menu: s => s.menu
}
