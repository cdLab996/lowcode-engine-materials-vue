import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '标签',
  group: 'Element-plus',
  category: '基础组件',
  priority: 1003,
  docUrl: 'https://element-plus.org/zh-CN/component/text.html',
  componentName: 'ElText',

  configure: {
    props: [
      {
        name: 'children',
        title: '文本',
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              params: ['slotProps'],
              value: [],
            },
          },
        ],
      },
      {
        name: 'type',
        title: '类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
            ],
          },
          initialValue: 'primary',
        },
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
          initialValue: 'default',
        },
      },
      {
        name: 'truncated',
        title: '显示省略号',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'line-clamp',
        title: '最大行数',
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
      },
      {
        name: 'tag',
        title: '自定义元素标签',
        setter: {
          componentName: 'StringSetter',
          initialValue: 'span',
        },
      },
    ],
  },
  snippets: [
    {
      screenshot:
        'https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg',
      title: 'Text',
      schema: {
        componentName: 'ElText',
        props: {
          children: 'Text',
          type: 'primary',
          size: 'default',
        },
      },
    },
  ],
}

export default meta
