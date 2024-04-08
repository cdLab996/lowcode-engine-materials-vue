import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '图片',
  group: 'Vant 组件',
  category: '基础组件',
  priority: 1002,
  docUrl: 'https://vant-contrib.gitee.io/vant/#/zh-CN/image',
  componentName: 'VanImage',

  // npm: {
  //   destructuring: true,
  //   componentName: 'VanImage',
  // },
  props: [
    {
      name: 'src',
      description: '图片链接',
      propType: 'string',
      defaultValue: 'https://img01.yzcdn.cn/vant/cat.jpeg',
    },
    {
      name: 'alt',
      description: '替代文本',
      propType: 'string',
    },
    {
      name: 'fit',
      description: '图片填充模式',
      propType: {
        type: 'oneOf',
        value: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      },
    },
    {
      name: 'width',
      description: '宽度，默认单位为px',
      propType: 'string',
    },
    {
      name: 'height',
      description: '高度，默认单位为px',
      propType: 'string',
    },
    {
      name: 'radius',
      description: '圆角大小，默认单位为px',
      propType: 'string',
    },
    {
      name: 'round',
      description: '是否显示为圆形',
      propType: 'bool',
    },
    {
      name: 'lazy-load',
      description: '是否开启图片懒加载，须配合 Lazyload 组件使用',
      propType: 'bool',
    },
    {
      name: 'show-error',
      description: '是否展示图片加载失败提示',
      propType: 'bool',
    },
    {
      name: 'show-loading',
      description: '是否展示图片加载中提示',
      propType: 'bool',
    },
    {
      name: 'error-icon',
      description: '失败时提示的图标名称或图片链接',
      propType: 'string',
    },
    {
      name: 'loading-icon',
      description: '加载时提示的图标名称或图片链接',
      propType: 'string',
    },
    {
      name: 'icon-prefix',
      description: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
      propType: 'string',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击按钮时触发',
        },
      ],
    },
  },
  snippets: [
    {
      title: '图片',
      screenshot:
        'https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg',
      schema: {
        componentName: 'VanImage',
        props: {
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          fit: 'fill',
          radius: 0,
          round: false,
          'lazy-load': false,
          'show-error': true,
          'show-loading': true,
          'error-icon': 'photo-fail',
          'loading-icon': 'photo',
        },
      },
    },
  ],
}

export default meta
