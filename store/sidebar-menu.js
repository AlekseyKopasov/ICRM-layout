export const state = () => ({
  menu: [
    {
      icon: 'icon',
      title: 'title 1',
      link: '#'
    },
    {
      icon: 'icon',
      title: 'title 2',
      link: '#'
    },
    {
      icon: 'icon',
      title: 'title 3',
      link: '#'
    }
  ]
})

export const getters = {
  menu: s => s.menu
}
