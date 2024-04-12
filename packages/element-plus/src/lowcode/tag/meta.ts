import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '标签',
  group: 'Element-plus',
  category: 'Data',
  priority: 1003,
  docUrl: 'https://element-plus.org/zh-CN/component/tag.html',
  componentName: 'ElTag',

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
        name: 'closable',
        title: '可关闭',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'disable-transitions',
        title: '禁用渐变动画',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'hit',
        title: '边框描边',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'color',
        title: '背景色',
        setter: 'ColorSetter',
      },
      {
        name: 'effect',
        title: '主题',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
              {
                title: 'plain',
                value: 'plain',
              },
            ],
          },
          initialValue: 'light',
        },
      },
      {
        name: 'round',
        title: '否为圆形',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onClick',
          description: '点击 Tag 时触发的事件',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onClick(${extParams}){\n  //点击 Tag 时触发的事件\n  console.log("onClick");\n}',
        },
        {
          name: 'onClose',
          description: '关闭 Tag 时触发的事件',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onClose(${extParams}){\n  //关闭 Tag 时触发的事件 \n  console.log("onClose");\n}',
        },
      ],
      style: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
      title: '标签',
      schema: {
        componentName: 'ElTag',
        props: {
          children: '标签',
          type: 'primary',
          closable: false,
          'disable-transitions': false,
          hit: false,
          color: '',
          size: 'default',
          close: false,
        },
      },
    },
  ],
}

export default meta
