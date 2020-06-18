export const state = () => ({
  table: {
    clients: [
      {
        name: 'Lorem1',
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
        name: 'Lore2',
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
        name: 'Lorem3',
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
  }
})

export const getters = {
  clients: s => s.table.clients,
  suppliers: s => s.table.suppliers
}
export const mutations = {}
export const actions = {}
