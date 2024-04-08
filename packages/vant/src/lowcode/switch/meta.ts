import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '开关',
  group: 'Vant 组件',
  category: '表单组件',
  priority: 1003,
  docUrl: 'https://vant-contrib.gitee.io/vant/#/zh-CN/switch',
  componentName: 'VanSwitch',

  // npm: {
  //   destructuring: true,
  //   componentName: 'VanSwitch',
  // },
  props: [
    {
      name: 'v-model',
      description: '开关选中状态',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'loading',
      description: '是否为加载状态',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'disabled',
      description: '是否禁用状态',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'size',
      description: '开关尺寸，默认单位为px',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      defaultValue: '30px',
    },
    {
      name: 'active-color',
      description: '打开时的背景色',
      propType: 'string',
      defaultValue: '#1989fa',
    },
    {
      name: 'inactive-color',
      description: '关闭时的背景色',
      propType: 'string',
      defaultValue: 'white',
    },
    {
      name: 'active-value',
      description: '打开时对应的值',
      propType: 'any',
      defaultValue: true,
    },
    {
      name: 'inactive-value',
      description: '关闭时对应的值',
      propType: 'any',
      defaultValue: false,
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
      title: '开关组件',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_switch.png',
      schema: {
        componentName: 'VanSwitch',
      },
    },
  ],
}

export default meta
