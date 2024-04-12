import 'element-plus/dist/index.css'
import packagesInfo from '../package.json'

export { ElAffix } from 'element-plus'
export { ElButton } from 'element-plus'
export { ElText } from 'element-plus'
export { ElCard } from 'element-plus'
export { ElCascader } from 'element-plus'
export { ElCheckbox } from 'element-plus'
export { ElInput } from 'element-plus'
export { ElOption } from 'element-plus'
export { ElTag } from 'element-plus'
// export * from './lowcode/button'
// export * from './lowcode/affix'
// export * from './avatar'
// export * from './card'

// export { ElMessage } from 'element-plus'

// eslint-disable-next-line no-console
console.log(
  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;'
)
