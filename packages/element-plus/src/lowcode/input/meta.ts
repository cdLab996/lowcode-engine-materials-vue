import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '输入框',
  group: 'Element-plus',
  category: 'Form',
  priority: 998,
  docUrl: 'https://element-plus.org/zh-CN/component/input.html',
  componentName: 'ElInput',
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定值',
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
        name: 'placeholder',
        title: '输入框占位文本',
        setter: 'StringSetter',
      },
      {
        name: 'show-password',
        title: '显示密码切换',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: '只在 type 不为 "textarea" 时有效',
        },
        setter: {
          componentName: 'SelectSetter',
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
        },
        defaultValue: 'default',
      },
      {
        name: 'prefix-icon',
        title: '前缀图标',
        // TODO: To be realized
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'CIconSetter',
          },
        ],
      },
      {
        name: 'suffix-icon',
        title: '后缀图标',
        // TODO: To be realized
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'CIconSetter',
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
                title: '文本',
                value: 'text',
              },
              {
                title: '多行文本',
                value: 'textarea',
              },
              {
                title: '密码',
                value: 'password',
              },
              {
                title: '数字',
                value: 'number',
              },
              {
                title: '邮箱',
                value: 'email',
              },
              {
                title: 'URL',
                value: 'url',
              },
              {
                title: '电话',
                value: 'tel',
              },
            ],
          },
        },
        defaultValue: 'text',
        extraProps: {
          setValue(target, value) {
            if (!/text/.test(value)) {
              target.parent.setPropValue('show-word-limit', false)
              target.parent.setPropValue('maxlength', '')
            }
          },
        },
      },
      {
        name: 'rows',
        title: {
          label: '输入框行数',
          tip: '输入框行数，只对 type="textarea" 有效',
        },
        setter: 'StringSetter',
        defaultValue: 2,
        condition(target) {
          return target.getProps().getPropValue('type') === 'textarea'
        },
      },
      {
        name: 'autosize',
        title: {
          label: '自适应内容高度',
          tip: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
        },
        setter: [
          {
            componentName: 'BoolSetter',
            initialValue: false,
          },
          {
            componentName: 'JsonSetter',
            initialValue: { minRows: 2, maxRows: 6 },
          },
        ],
        condition(target) {
          return target.getProps().getPropValue('type') === 'textarea'
        },
      },
      {
        name: 'resize',
        title: '用户缩放',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'both',
                value: 'both',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
      },
      {
        name: 'clearable',
        title: {
          label: '是否显示清除按钮',
          tip: '只有当 type 不是 textarea时生效',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'formatter',
        title: {
          label: '指定输入值的格式',
          tip: '只有当 type 是"text"时才能工作',
        },
        setter: [
          {
            componentName: 'FunctionSetter',
            props: {
              // eslint-disable-next-line no-template-curly-in-string
              template: 'handleFormatter(record,${extParams}) {\n}',
            },
          },
          'VariableSetter',
        ],
      },
      {
        name: 'parser',
        title: {
          label: '指定从格式化器输入中提取的值',
          tip: '仅当 type 是"text"时才起作用',
        },
        setter: [
          {
            componentName: 'FunctionSetter',
            props: {
              // eslint-disable-next-line no-template-curly-in-string
              template: 'handleParser(record,${extParams}) {\n}',
            },
          },
          'VariableSetter',
        ],
      },
      {
        name: 'show-word-limit',
        title: {
          label: '显示字数统计',
          tip: '是否显示字数统计，只在 type="text" 或 type="textarea" 时有效',
        },
        setter: 'BoolSetter',
        defaultValue: false,
        condition(target) {
          const type = target.getProps().getPropValue('type')
          if (/text/.test(type)) {
            return true
          } else {
            return false
          }
        },
        extraProps: {
          setValue(target, value) {
            // 切换到以周为日期单位后调整显示格式
            if (value) {
              target.parent.setPropValue('maxlength', 30)
            } else {
              target.parent.setPropValue('maxlength', '')
            }
          },
        },
      },
      {
        name: 'tabindex',
        title: '输入框的tabindex',
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
        name: 'validate-event',
        title: '输入时是否触发表单的校验',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'input-style',
        title: '输入框样式',
        setter: [
          {
            componentName: 'StringSetter',
          },
          // {
          //   componentName: 'StyleSetter',
          // },
        ],
      },
      {
        name: '自定义插槽',
        display: 'accordion',
        type: 'group',
        items: [
          // {
          //   name: 'prefix',
          //   title: '头部内容',
          //   setter: {
          //     componentName: 'SlotSetter',
          //     initialValue: {
          //       type: 'JSSlot',
          //       title: '输入框头部内容插槽',
          //       value: [],
          //     },
          //   },
          // },
          // {
          //   name: 'suffix',
          //   title: '尾部内容',
          //   setter: {
          //     componentName: 'SlotSetter',
          //     initialValue: {
          //       type: 'JSSlot',
          //       title: '输入框尾部内容插槽',
          //       value: [],
          //     },
          //   },
          // },
          {
            name: 'prepend',
            title: '前置内容',
            setter: {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                title: '输入框前置内容插槽',
                value: [],
              },
            },
          },
          {
            name: 'append',
            title: '后置内容',
            setter: {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                title: '输入框后置内容插槽',
                value: [],
              },
            },
          },
        ],
        condition(target) {
          return target.getProps().getPropValue('type') === 'text'
        },
      },
      {
        name: '原生属性',
        title: {
          label: '原生属性',
          tip: '原生 HTML 属性',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'maxlength',
            title: {
              label: '最大输入长度',
              tip: '同原生 maxlength 属性',
            },
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
            name: 'minlength',
            title: {
              label: '最小输入长度',
              tip: '同原生 minlength 属性',
            },
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
            name: 'name',
            title: {
              label: 'name',
              tip: 'name 属性',
            },
            setter: 'StringSetter',
          },

          {
            name: 'readonly',
            title: {
              label: 'readonly',
              tip: '是否只读',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'max',
            title: {
              label: 'max',
              tip: '设置最大值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'min',
            title: {
              label: 'min',
              tip: '设置最小值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'step',
            title: {
              label: 'step',
              tip: '设置输入字段的合法数字间隔',
            },
            setter: 'StringSetter',
          },
          {
            name: 'autofocus',
            title: {
              label: 'autofocus',
              tip: '自动获取焦点',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'form',
            title: 'form',
            setter: 'StringSetter',
          },
          {
            name: 'label',
            title: {
              label: 'label',
              tip: 'aria-label 属性',
            },
            setter: 'StringSetter',
          },
          {
            name: 'autocomplete',
            title: '原生属性，自动补全',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: 'on',
                    value: 'on',
                  },
                  {
                    title: 'off',
                    value: 'off',
                  },
                ],
              },
            },
            defaultValue: 'off',
          },
        ],
      },
    ],
    supports: {
      style: true,
      loop: true,
      events: [
        {
          name: 'onBlur',
          description: '输入框失去焦点时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onBlur(event, ${extParams}){\n  // 当选择器的输入框失去焦点时触发\n  console.log("onBlur");\n}',
        },
        {
          name: 'onFocus',
          description: '输入框获得焦点时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onFocus(event, ${extParams}){\n  // 当选择器的输入框获得焦点时触发\n  console.log("onFocus");\n}',
        },
        {
          name: 'onChange',
          description: '输入框改变或按下回车时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onChange(value, ${extParams}){\n  // 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发\n  console.log("onChange", value);\n}',
        },
        {
          name: 'onInput',
          description: '在 Input 值改变时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onInput(value, ${extParams}){\n  // 在 Input 值改变时触发\n  console.log("onInput", value);\n}',
        },
        {
          name: 'onClear',
          description: '点击清空按钮时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onClear(${extParams}){\n  // 在点击由 clearable 属性生成的清空按钮时触发\n  console.log("onClear");\n}',
        },
      ],
    },
  },
  snippets: [
    {
      screenshot:
        'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/input.png',
      title: '输入框',
      schema: {
        componentName: 'ElInput',
        props: {
          type: 'text',
          'show-word-limit': false,
          placeholder: '请输入文本内容',
          clearable: false,
          'show-password': false,
          disabled: false,
          size: 'default',
          rows: 2,
          autosize: false,
          autocomplete: 'off',
          autofocus: false,
          tabindex: '',
          'validate-event': true,
          'prefix-icon': '',
        },
      },
    },
  ],
}

export default meta
