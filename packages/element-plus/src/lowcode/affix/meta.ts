import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  group: 'Element-plus',
  componentName: 'ElAffix',
  title: '固钉',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/button.html',
  configure: {
    props: [
      {
        name: 'offset',
        title: '偏移距离',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        name: 'position',
        title: '固钉位置',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
          initialValue: 'top',
        },
      },
      {
        name: 'target',
        title: '指定容器（CSS 选择器）',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'z-index',
        title: 'z-index',
        setter: {
          componentName: 'NumberSetter',
        },
      },
    ],
    supports: {
      style: true,
      loop: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '固钉状态改变时触发的事件',
        },
        {
          name: 'onScroll',
          description: '滚动时触发的事件',
        },
      ],
    },
  },
  snippets: [
    {
      title: '固钉',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/affix-1.jpg',
      schema: {
        componentName: 'ElAffix',
        children: [
          {
            componentName: 'ElButton',
            props: {
              children: 'Affix Top',
              offset: 0,
              position: 'top',
              'z-index': 100,
            },
          },
        ],
      },
    },
  ],
}

export default meta
