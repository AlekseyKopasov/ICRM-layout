export const state = () => ({
  table: {
    clients: [
      {
        name: 'Lorem1',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: {
          instagram: 'www/www',
          instagram2: 'www/www',
          instagram3: 'www/www',
          instagram4: 'www/www'
        }
      },
      {
        name: 'Lore2',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: {
          instagram: 'www/www',
          instagram2: 'www/www',
          instagram3: 'www/www',
          instagram4: 'www/www'
        }
      },
      {
        name: 'Lorem3',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: {
          instagram2: 'www/www',
          instagram3: 'www/www',
          instagram4: 'www/www',
          instagram5: 'www/www'
        }
      }
    ],
    suppliers: [
      {
        name: 'supplier 1',
        address: 'Россия, Москва, ул. Мира 25',
        links: {
          instagram: 'www/www',
          instagram2: 'www/www',
          instagram3: 'www/www',
          instagram4: 'www/www'
        }
      },
      {
        name: 'supplier 2',
        address: 'Россия, Москва, ул. Мира 25',
        links: {
          instagram: 'www/www',
          instagram2: 'www/www',
          instagram3: 'www/www',
          instagram4: 'www/www'
        }
      },
      {
        name: 'supplier 3',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: {
          instagram2: 'www/www',
          instagram3: 'www/www',
          instagram4: 'www/www',
          instagram5: 'www/www'
        }
      }
    ]
  }
})

export const getters = {
  clients: s => s.table.clients,
  suppliers: s => s.table.suppliers
}
export const mutations = {}
export const actions = {}
