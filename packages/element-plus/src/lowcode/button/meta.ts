import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  group: 'Element-plus',
  componentName: 'ElButton',
  title: '按钮',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/button.html',
  configure: {
    props: [
      {
        name: 'children',
        title: '文本内容',
        setter: {
          componentName: 'StringSetter',
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
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'info',
                value: 'info',
              },
              // {
              //   title: 'text',
              //   value: 'text',
              // },
            ],
          },
          initialValue: 'primary',
        },
      },
      // {
      //   name: 'icon',
      //   title: '图标类名',
      //   setter: {
      //     componentName: 'CIconSetter',
      //   },
      // },
      {
        name: 'plain',
        title: '朴素按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'text',
        title: '文字按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'bg',
        title: '文字按钮背景颜色',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'link',
        title: '链接按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'round',
        title: '圆角按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'circle',
        title: '圆形按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'loading',
        title: '加载中',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true,
      loop: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击按钮时的回调',
        },
      ],
    },
  },
  snippets: [
    {
      title: '按钮',
      screenshot:
        'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/button.png',
      schema: {
        componentName: 'ElButton',
        props: {
          children: '按钮',
        },
      },
    },
  ],
}

export default meta
