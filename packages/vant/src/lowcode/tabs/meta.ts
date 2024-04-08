import type {
  IPublicModelSettingField,
  IPublicTypeComponentMetadata,
  IPublicTypeNodeData,
} from '@alilc/lowcode-types'
import { isEqual, throttle } from 'lodash'

interface VanTabItemProps {
  primaryKey: string
  title: string
}

const meta: IPublicTypeComponentMetadata = {
  group: 'Vant 组件',
  category: '导航组件',
  priority: 1003,
  docUrl: 'https://vant-contrib.gitee.io/vant/#/zh-CN/tab',
  componentName: 'VanTabs',
  // npm: {
  //   package: 'vant',
  //   version: '3.4.21',
  //   exportName: 'Tabs',
  //   destructuring: true,
  // },
  props: [
    {
      name: 'v-model',
      description: '绑定的值',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'type',
      description: '样式风格',
      propType: {
        type: 'oneOf',
        value: ['line', 'card'],
      },
      defaultValue: 'line',
    },
    {
      name: 'color',
      description: '主题色',
      propType: 'string',
      defaultValue: '#ee0a24',
    },
    {
      name: 'background',
      description: '背景色',
      propType: 'string',
      defaultValue: 'white',
    },
    {
      name: 'default',
      description: '默认插槽',
      propType: 'node',
    },
  ],
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定的值',
        setter: 'StringSetter',
      },
      {
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: '名称',
                      initialValue: '标签项',
                      setter: {
                        componentName: 'StringSetter',
                      },
                      isRequired: true,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  title: '标签项' + String(Math.floor(Math.random() * 10000)),
                }
              },
            },
          },
        },
        extraProps: {
          getValue: (target) => {
            // eslint-disable-next-line no-console
            console.log('🚀 ~ file: van-tabs.ts: 触发 ~ getValue')
            const map = target.node?.children?.map((child) => {
              const primaryKey = child.getPropValue('primaryKey')
                ? String(child.getPropValue('primaryKey'))
                : child.id
              return {
                primaryKey,
                title: child.getPropValue('title'),
              }
            })
            return map
          },
          setValue: throttle((target: IPublicModelSettingField, value: any) => {
            // eslint-disable-next-line no-console
            console.log('🚀 ~ file: van-tabs.ts: 触发 ~ setValue', target, value)
            const { node } = target
            const mergedValueMap: Record<string, VanTabItemProps> = {}
            const mergedValues: VanTabItemProps[] = []
            const map: Record<string, VanTabItemProps> = {}
            if (!Array.isArray(value)) {
              value = []
            }
            value.forEach((item: VanTabItemProps) => {
              if (!mergedValueMap[item.primaryKey]) {
                mergedValueMap[item.primaryKey] = item
                mergedValues.push(item)
              }

              map[item.primaryKey] = item
            })

            const children = node?.children?.filter((child: any) => {
              if (!mergedValueMap[child.propsData.primaryKey]) {
                mergedValueMap[child.propsData.primaryKey] = child.propsData
                mergedValues.push(child.propsData)
              }
              return true
            })

            const preValue = children.map((child: any) => {
              return child.propsData
            })

            if (isEqual(preValue, value)) {
              return
            }

            node?.children?.mergeChildren(
              (child, idx) => {
                // eslint-disable-next-line no-console
                console.log('remover', child, idx)
                const primaryKey = String(
                  child.getPropValue('primaryKey') || child.schema.id || child.id
                )
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  child.setPropValue('title', map[primaryKey].title)

                  delete map[primaryKey]
                  return false
                }

                return true
              },
              () => {
                // eslint-disable-next-line no-console
                console.log('adder')
                const items: IPublicTypeNodeData[] = []
                for (const primaryKey in map) {
                  if (Object.hasOwnProperty.call(map, primaryKey)) {
                    items.push({
                      type: 'i18n',
                      componentName: 'VanTab',
                      props: map[primaryKey],
                    })
                  }
                }
                return items
              },
              (child1, child2) => {
                // eslint-disable-next-line no-console
                console.log('sorter')
                const a = value.findIndex(
                  (item: any) =>
                    String(item.primaryKey) === String(child1.getPropValue('primaryKey'))
                )
                const b = value.findIndex(
                  (item: any) =>
                    String(item.primaryKey) === String(child2.getPropValue('primaryKey'))
                )
                return a - b
              }
            )
          }),
        },
      },
      {
        name: 'type',
        title: '样式风格',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'line',
                value: 'line',
              },
              {
                title: 'card',
                value: 'card',
              },
            ],
          },
        },
        defaultValue: 'line',
      },
      {
        name: 'color',
        title: '标签主题色',
        setter: 'ColorSetter',
        defaultValue: '#ee0a24',
      },
      {
        name: 'background',
        title: '标签栏背景色',
        setter: 'ColorSetter',
        defaultValue: '#fff',
      },
      {
        name: 'duration',
        title: {
          label: '动画时间',
          tip: '动画时间(单位：秒)',
        },
        setter: 'StringSetter',
        defaultValue: '0.3',
      },
      {
        name: 'line-width',
        title: '底部条宽度',
        setter: 'StringSetter',
        defaultValue: '40px',
      },
      {
        name: 'line-height',
        title: '底部条高度',
        setter: 'StringSetter',
        defaultValue: '3px',
      },
      {
        name: 'animated',
        title: {
          label: '转场动画',
          tip: '是否开启切换标签内容时的转场动画',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: '显示标签栏外边框',
          tip: '是否显示标签栏外边框，仅在 type="line" 时有效',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'ellipsis',
        title: '省略过长的标题文字',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'sticky',
        title: '粘性定位布局',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'swipeable',
        title: '手势滑动切换',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'lazy-render',
        title: {
          label: '延迟渲染',
          tip: '是否开启延迟渲染（首次切换到标签时才触发内容渲染）',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'scrollspy',
        title: '是否开启滚动导航',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'offset-top',
        title: {
          label: '粘性定位与顶部的最小距离',
          tip: '粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px',
        },
        setter: 'StringSetter',
        defaultValue: '0',
      },
      {
        name: 'swipe-threshold',
        title: {
          label: '滚动阈值',
          tip: '滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动',
        },
        setter: 'StringSetter',
        defaultValue: '5',
      },
      {
        name: 'title-active-color',
        title: '标题选中态颜色',
        setter: 'ColorSetter',
      },
      {
        name: 'title-inactive-color',
        title: '标题默认态颜色',
        setter: 'ColorSetter',
      },
      {
        name: 'before-change',
        title: {
          label: '回调函数',
          tip: '切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise',
        },
        setter: 'FunctionSetter',
      },
    ],
    supports: {
      events: [
        {
          name: 'onClick',
          description: '点击标签时触发',
        },
        {
          name: 'onChange',
          description: '当前激活的标签改变时触发',
        },
        {
          name: 'onDisabled',
          description: '点击被禁用的标签时触发',
        },
        {
          name: 'onRendered',
          description: '标签内容首次渲染时触发',
        },
        {
          name: 'onScroll',
          description: '滚动时触发',
        },
      ],
      loop: true,
      condition: true,
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://img.alicdn.com/imgextra/i4/O1CN01mh9LPG268B90t8DaA_!!6000000007616-55-tps-56-56.svg',
      title: '标签页组件',
      schema: {
        componentName: 'VanTabs',
        children: [...new Array(2).keys()].map((item, index) => ({
          componentName: 'VanTab',
          props: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            title: '标签项' + index,
          },
        })),
      },
    },
  ],
}

export default meta
