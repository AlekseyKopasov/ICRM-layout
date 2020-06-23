export const state = () => ({
  clients: [
    {
      id: 1,
      contacts: [
        {
          title: 'Instagram',
          link: 'www.insta.com',
        },
        {
          title: 'Twitter',
          link: 'www.tw.com',
        },
        {
          title: 'VK',
          link: 'www.vk.com',
        },
        {
          title: 'Телефон',
          link: '+7 (999) 999 99-99',
        },
      ],
    },
    {
      id: 2,
      contacts: [
        {
          title: 'Instagram',
          link: 'www.insta.com',
        },
        {
          title: 'Twitter',
          link: 'www.tw.com',
        },
        {
          title: 'VK',
          link: 'www.vk.com',
        },
        {
          title: 'Телефон',
          link: '+7 (999) 999 99-99',
        },
      ],
    },
    {
      id: 3,
      contacts: [
        {
          title: 'Instagram',
          link: 'www.insta.com',
        },
        {
          title: 'Twitter',
          link: 'www.tw.com',
        },
        {
          title: 'VK',
          link: 'www.vk.com',
        },
        {
          title: 'Телефон',
          link: '+7 (999) 999 99-99',
        },
      ],
    },
  ],
  suppliers: [
    {
      id: 1,
      contacts: [
        {
          title: 'Instagram',
          link: 'www.insta.com',
        },
        {
          title: 'Twitter',
          link: 'www.tw.com',
        },
        {
          title: 'VK',
          link: 'www.vk.com',
        },
        {
          title: 'Телефон',
          link: '+7 (999) 999 99-99',
        },
      ],
    },
    {
      id: 2,
      contacts: [
        {
          title: 'Instagram',
          link: 'www.insta.com',
        },
        {
          title: 'Twitter',
          link: 'www.tw.com',
        },
        {
          title: 'VK',
          link: 'www.vk.com',
        },
        {
          title: 'Телефон',
          link: '+7 (999) 999 99-99',
        },
      ],
    },
    {
      id: 3,
      contacts: [
        {
          title: 'Instagram',
          link: 'www.insta.com',
        },
        {
          title: 'Twitter',
          link: 'www.tw.com',
        },
        {
          title: 'VK',
          link: 'www.vk.com',
        },
        {
          title: 'Телефон',
          link: '+7 (999) 999 99-99',
        },
      ],
    },
  ],
})

export const getters = {
  clients: s => s.clients,
  suppliers: s => s.clients,
}
