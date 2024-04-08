import 'ant-design-vue/dist/reset.css'
import packagesInfo from '../package.json'

export { Button as AButton } from 'ant-design-vue'

// eslint-disable-next-line no-console
console.log(
  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;'
)
