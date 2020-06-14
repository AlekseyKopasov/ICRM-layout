export const state = () => ({
  info: {
    name: 'Константин',
    lastname: 'Константинопольский-Константинопольский',
    avatar: 'test-ava.jpg'
  }
})

export const getters = {
  info: s => s.info
}
