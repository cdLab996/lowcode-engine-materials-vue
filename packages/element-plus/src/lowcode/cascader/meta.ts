import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '级联选择器',
  group: 'Element-plus',
  category: 'Form',
  priority: 996,
  docUrl: 'https://element-plus.org/zh-CN/component/cascader.html',
  componentName: 'ElCascader',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: '绑定值',
          tip: '选中项绑定值',
        },
        setter: 'JsonSetter',
      },
      {
        name: 'options',
        title: {
          label: '可选项数据源',
          tip: '可选项数据源',
        },
        setter: 'JsonSetter',
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: '尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
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
          initialValue: '',
        },
      },
      {
        name: 'placeholder',
        title: {
          label: '占位文本',
          tip: '占位文本',
        },
        setter: {
          componentName: 'StringSetter',
          initialValue: '请选择',
        },
      },
      {
        name: 'disabled',
        title: {
          label: '禁用',
          tip: '禁用',
        },
        description: '禁用',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'clearable',
        title: {
          label: '支持清空',
          tip: '支持清空选项',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'show-all-levels',
        title: {
          label: '显示完整路径',
          tip: '输入框中是否显示选中值的完整路径',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        name: 'collapse-tags',
        title: {
          label: '折叠标签',
          tip: '多选模式折叠标签',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
        condition(target) {
          return !!target.getProps().getPropValue('props.multiple')
        },
      },
      {
        name: 'separator',
        title: {
          label: '选项分隔符',
          tip: '选项分隔符',
        },
        setter: {
          componentName: 'StringSetter',
          initialValue: '/',
        },
      },
      {
        name: 'filterable',
        description: '',
        title: {
          label: '选项可搜索',
          tip: '是否可搜索选项',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'filterMethod',
        title: {
          label: '自定义搜索',
          tip: '自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              // eslint-disable-next-line no-template-curly-in-string
              'function filterMethod(node, keyword ,${extParams}) {\n  return node.label.includes(keyword);\n}\n',
          },
        },
        condition(target) {
          return !!target.getProps().getPropValue('filterable')
        },
      },
      {
        name: 'debounce',
        title: {
          label: '防抖延迟',
          tip: '搜索关键词输入的防抖延迟，毫秒',
        },
        setter: 'NumberSetter',
        condition(target) {
          return !!target.getProps().getPropValue('filterable')
        },
      },
      {
        name: 'beforeFilter',
        title: {
          label: '筛选前的钩子',
          tip: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            // eslint-disable-next-line no-template-curly-in-string
            template: 'function beforeFilter(value, ${extParams}) {\n  return true;\n}\n',
          },
        },
        condition(target) {
          return !!target.getProps().getPropValue('filterable')
        },
      },
      {
        name: 'popper-class',
        title: {
          label: '浮层类名',
          tip: '自定义浮层类名',
        },
        setter: {
          componentName: 'StringSetter',
          initialValue: '',
        },
      },
      {
        display: 'accordion',
        name: 'props',
        title: '配置选项',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'expandTrigger',
                  title: {
                    label: '菜单展开方式',
                    tip: '次级菜单展开方式',
                  },
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      options: [
                        {
                          title: 'click',
                          value: 'click',
                        },
                        {
                          title: 'hover',
                          value: 'hover',
                        },
                      ],
                    },
                    initialValue: 'click',
                  },
                },
                {
                  name: 'multiple',
                  title: '是否多选',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: false,
                  },
                },
                {
                  name: 'checkStrictly',
                  title: {
                    label: '父子节点不互相关联',
                    tip: '父子节点取消关联，选择任意一级选项',
                  },
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: false,
                  },
                },
                {
                  name: 'emitPath',
                  title: {
                    label: '选中值为数组形式',
                    tip: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值（开启后，多选模式选中值是二维数组）',
                  },
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: true,
                  },
                },
                {
                  name: 'lazy',
                  title: {
                    label: '动态加载子节点',
                    tip: '是否动态加载子节点，需与 lazyLoad 方法结合使用',
                  },
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: false,
                  },
                },
                {
                  name: 'lazyLoad',
                  title: {
                    label: '加载动态数据的方法',
                    tip: '加载动态数据的方法，仅在 lazy 为 true 时有效',
                  },
                  setter: 'FunctionSetter',
                  condition(target: any) {
                    return !!target.getProps().getPropValue('props.lazy')
                  },
                },
                {
                  name: 'label',
                  title: {
                    label: '选项标签',
                    tip: '指定选项标签为选项对象的某个属性值',
                  },
                  setter: 'StringSetter',
                  defaultValue: 'label',
                },
                {
                  name: 'value',
                  title: {
                    label: '选项值',
                    tip: '指定选项的值为选项对象的某个属性值',
                  },
                  setter: 'StringSetter',
                  defaultValue: 'value',
                },
                {
                  name: 'children',
                  title: {
                    label: '子选项',
                    tip: '指定选项的子选项为选项对象的某个属性值',
                  },
                  setter: 'StringSetter',
                  defaultValue: 'children',
                },
                {
                  name: 'disabled',
                  title: {
                    label: '禁用选项',
                    tip: '指定选项的禁用为选项对象的某个属性值',
                  },
                  setter: 'StringSetter',
                  defaultValue: 'disabled',
                },
                {
                  name: 'leaf',
                  title: {
                    label: '叶子节点',
                    tip: '指定选项的叶子节点的标志位为选项对象的某个属性值',
                  },
                  setter: 'StringSetter',
                  defaultValue: 'leaf',
                },
              ],
            },
          },
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '当选中节点变化时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onChange(value, ${extParams}){\n// 当选中节点变化时触发,回调参数为选中节点的值\nconsole.log("onChange", value);\n}\n',
        },
        {
          name: 'onBlur',
          description: '当失去焦点时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onBlur(ev, ${extParams}){\n// 当失去焦点时触发 \nconsole.log("onBlur", ev);\n}\n',
        },
        {
          name: 'onFocus',
          description: '当获取焦点时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'handleFocus(ev, ${extParams}){\n// 当获取焦点时触发 \nconsole.log("onFocus", ev);\n}\n',
        },
        {
          name: 'onExpand-change',
          description: '当展开节点发生变化时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onExpandChange(value, ${extParams}){\n// 当展开节点发生变化时触发，回调参数为各父级选项值组成的数组\nconsole.log("onExpandChange", value);\n}\n',
        },
        {
          name: 'onVisible-change',
          description: '下拉框出现/隐藏时触发',
          template:
            // eslint-disable-next-line no-template-curly-in-string
            'onVisibleChange(value, ${extParams}){\n//下拉框出现/隐藏时触发 \nconsole.log("onVisibleChange", value);\n}\n',
        },
        // {
        //   name: 'onRemove-tag',
        //   description: '在多选模式下，移除Tag时触发',
        //   // @ts-ignore
        //   template:
        //     'onRemoveTag(value, ${extParams}){\n//	在多选模式下，移除Tag时触发,回调参数为移除的Tag对应的节点的值 \nconsole.log("onRemoveTag", value);\n}\n',
        // },
      ],
    },
  },
  snippets: [
    {
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/cascader-1.png',
      title: '级联选择器',
      schema: {
        componentName: 'ElCascader',
        props: {
          options: [
            {
              value: 'zhinan',
              label: '指南',
              children: [
                {
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [
                    {
                      value: 'yizhi',
                      label: '一致',
                    },
                    {
                      value: 'fankui',
                      label: '反馈',
                    },
                    {
                      value: 'xiaolv',
                      label: '效率',
                    },
                    {
                      value: 'kekong',
                      label: '可控',
                    },
                  ],
                },
                {
                  value: 'daohang',
                  label: '导航',
                  children: [
                    {
                      value: 'cexiangdaohang',
                      label: '侧向导航',
                    },
                    {
                      value: 'dingbudaohang',
                      label: '顶部导航',
                    },
                  ],
                },
              ],
            },
            {
              value: 'zujian',
              label: '组件',
              children: [
                {
                  value: 'basic',
                  label: 'Basic',
                  children: [
                    {
                      value: 'layout',
                      label: 'Layout 布局',
                    },
                    {
                      value: 'color',
                      label: 'Color 色彩',
                    },
                    {
                      value: 'typography',
                      label: 'Typography 字体',
                    },
                    {
                      value: 'icon',
                      label: 'Icon 图标',
                    },
                  ],
                },
                {
                  value: 'form',
                  label: 'Form',
                  children: [
                    {
                      value: 'radio',
                      label: 'Radio 单选框',
                    },
                    {
                      value: 'checkbox',
                      label: 'Checkbox 多选框',
                    },
                  ],
                },
              ],
            },
          ],
          placeholder: '请选择',
          'show-all-levels': true,
          separator: '/',
        },
      },
    },
  ],
}

export default meta
