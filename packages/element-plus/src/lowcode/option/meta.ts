import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '选择器-选项',
  group: 'Element-plus',
  category: 'Form',
  hidden: true,
  priority: 1001,
  docUrl: 'https://element-plus.org/zh-CN/component/select.html',
  componentName: 'ElOption',
  props: [
    {
      name: 'value',
      description: '选项值',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'object'],
      },
    },
    {
      name: 'label',
      description: '选项的标签',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'disabled',
      description: '禁用',
      propType: 'bool',
      defaultValue: false,
    },
  ],
  snippets: [
    {
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
      title: '选择器-选项',
      schema: {
        componentName: 'ElOption',
        props: {
          label: '选项',
          value: String(Math.floor(Math.random() * 10000)),
        },
      },
    },
  ],
}

export default meta
