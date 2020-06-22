export const state = () => ({
  table: {
    clients: [
      {
        name: 'client1',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: [
          {
            name: 'clients1',
            link: '1cwww/www'
          },
          {
            name: '2cinstagram',
            link: 'www/www'
          },
          {
            name: '3cinstagram',
            link: 'www/www'
          },
          {
            name: '4cinstagram',
            link: 'www/www'
          },
          {
            name: '5instagram',
            link: 'www/www'
          }
        ]
      },
      {
        name: 'client2',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: [
          {
            name: 'clients2',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          }
        ]
      },
      {
        name: 'client3',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: [
          {
            name: 'clients3',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          }
        ]
      },
      {
        name: 'client3',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: [
          {
            name: 'clients3',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          }
        ]
      }
    ],
    suppliers: [
      {
        name: 'supplier 1',
        address: 'Россия, Москва, ул. Мира 25',
        links: [
          {
            name: 'suppliers1',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          }
        ]
      },
      {
        name: 'supplier 2',
        address: 'Россия, Москва, ул. Мира 25',
        links: [
          {
            name: 'suppliers2',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          }
        ]
      },
      {
        name: 'supplier 3',
        address: 'Россия, Нижний Новгород, ул. Мира 25',
        links: [
          {
            name: 'suppliers3',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          },
          {
            name: 'instagram',
            link: 'www/www'
          }
        ]
      }
    ]
  },
  isEditingRow: {
    status: false,
    index: null
  },
  isDeleteRow: {
    status: false,
    index: null
  }
})

export const getters = {
  clients: s => s.table.clients,
  suppliers: s => s.table.suppliers,
  isEditingRow: s => s.isEditingRow,
  isDeleteRow: s => s.isDeleteRow
}
export const mutations = {
  editingRow(getters, { index }) {
    getters.isEditingRow.status = !getters.isEditingRow.status
    getters.isEditingRow.index = index
  },
  deleteRow(getters, index) {
    getters.isDeleteRow.status = !getters.isDeleteRow.status
    getters.isDeleteRow.index = index
  }
}
export const actions = {}
