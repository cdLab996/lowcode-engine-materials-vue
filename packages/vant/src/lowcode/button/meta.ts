import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '按钮',
  group: 'Vant 组件',
  category: '基础组件',
  priority: 1001,
  docUrl: 'https://vant-contrib.gitee.io/vant/#/zh-CN/button',
  componentName: 'VanButton',

  // npm: {
  //   destructuring: true,
  //   componentName: 'VanButton',
  // },
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
                title: 'normal',
                value: 'normal',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
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
                title: '默认按钮',
                value: 'default',
              },
              {
                title: '主要按钮',
                value: 'primary',
              },
              {
                title: '警告按钮',
                value: 'warning',
              },
              {
                title: '危险按钮',
                value: 'danger',
              },
              {
                title: '信息按钮',
                value: 'info',
              },
            ],
          },
          initialValue: 'default',
        },
      },
      {
        name: 'icon',
        title: '左侧图标名称或图片链接',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'plain',
        title: '朴素按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: '是否为圆形按钮',
        title: '是否为圆形按钮',
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
      {
        name: 'hairline',
        title: '细边框',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'loading',
        title: '是否显示为加载状态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'loading-text',
        title: '加载状态提示文字',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'loading-type',
        title: '加载图标类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'circular',
                value: 'circular',
              },
              {
                title: 'spinner',
                value: 'spinner',
              },
            ],
          },
          initialValue: 'circular',
        },
      },
      {
        name: 'loading-size',
        title: '加载图标大小',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'url',
        title: '点击后跳转的链接地址',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'to',
        title: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'replace',
        title: '是否在跳转时替换当前页面历史',
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
          description: '点击按钮时触发',
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
        componentName: 'VanButton',
        props: {
          children: '按钮',
        },
      },
    },
  ],
}

export default meta
