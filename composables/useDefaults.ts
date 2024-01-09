
const defaults = {
  meta: {
    ogUrl: 'seo',
    ogType: 'website',
    title: 'Seo Demo',
    ogTitle: 'Seo Demo',
    description:
      'Eiusmod elit exercitation in nostrud culpa Lorem nisi Lorem magna. Ut officia cupidatat aliqua tempor est veniam aute. Excepteur deserunt amet irure cillum et esse.',
    ogDescription:
      'Laborum non aute aliqua aliqua enim officia aute est proident amet velit. Labore quis velit magna ut voluptate sunt labore aliquip in. Culpa adipisicing nisi voluptate ex excepteur esse fugiat incididunt et tempor minim. Aute culpa qui ut qui veniam ipsum tempor labore laboris exercitation laboris nisi ut Lorem. Adipisicing tempor consectetur nisi sit tempor aliqua dolor nostrud id sint occaecat.',
    ogImage: 'https://picsum.photos/id/598/600/400',
    twitterTitle: 'Seo Demo',
    twitterDescription:
      'Elit laborum amet voluptate labore tempor sit est sit esse exercitation consectetur mollit ea. Laborum minim occaecat et do dolor mollit. Enim proident consectetur voluptate consequat sint excepteur Lorem ut ad elit reprehenderit deserunt enim.',
    twitterImage: 'https://picsum.photos/id/598/600/400',
    twitterCard: 'summary_large_image'
  } as Parameters<typeof useSeoMeta>[0],

}

type DefaultKeys = keyof typeof defaults

type DefaultValues = typeof defaults

export const useDefault = <K extends DefaultKeys>(defaultName: K): DefaultValues[K] => defaults[defaultName]
