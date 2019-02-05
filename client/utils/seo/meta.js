export function meta(title, description, image, fullPath) {
  return {
    //@ts-ignore
    title: `${title} — Cetacea`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        //@ts-ignore
        content: `${description}`
      },
      {
        hid: 'og:url',
        property: 'og:url',
        //@ts-ignore
        content: `${fullPath}`
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        // @ts-ignore
        content: `${title}`
      },
      {
        hid: 'og:description',
        name: 'og:description',
        //@ts-ignore
        content: `${description}`
      },
      {
        hid: 'og:image',
        name: 'og:image',
        //@ts-ignore
        content: `${image}`
      }
    ]
  }
}