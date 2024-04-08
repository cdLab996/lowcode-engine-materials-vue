import 'vant/lib/index.css'
import packagesInfo from '../package.json'

export { Button as VanButton } from 'vant'
export { Image as VanImage } from 'vant'
export { Switch as VanSwitch } from 'vant'
export { Tab as VanTab } from 'vant'
export { Tabs as VanTabs } from 'vant'

// export * from './lowcode/button';
// export * from './lowcode/image';
// export * from './lowcode/switch';
// eslint-disable-next-line no-console
console.log(
  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;'
)
