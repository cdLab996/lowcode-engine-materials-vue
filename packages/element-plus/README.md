<div align="center">

<a href="https://element-plus.org/en-US/"><img alt="element" src="https://element-plus.org/images/element-plus-logo-small.svg" width="150"/></a>

## Element Plus(2.6.3) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/element-plus-lowcode-materials?logo=npm)](https://www.npmjs.com/package/@cdlab996/element-plus-lowcode-materials)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/element-plus-lowcode-materials)](https://www.npmjs.com/package/@cdlab996/element-plus-lowcode-materials)
[![GitHub license](https://github.com/cdLab996/lowcode-engine-materials-vue)](https://github.com/cdLab996/lowcode-engine-materials-vue/blob/main/LICENSE)

</div>

## Component material complete list

- [x] button
- [x] affix

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/element-plus-lowcode-materials
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/element-plus-lowcode-materials/dist/assets.json'

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx

      const loadedAssets = await injectAssets(assets)
      material.setAssets(loadedAssets)
      // ...
    },
  }
}

editorInit.pluginName = 'editorInit'

export default editorInit
```

### CDN

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx

      const loadedAssets = await injectAssets('https://unpkg.com/@cdlab996/element-plus-lowcode-materials/dist/assets.json')
      material.setAssets(loadedAssets)
      // ...
    },
  }
}

editorInit.pluginName = 'editorInit'

export default editorInit
```

## assets.json

Here is an example of the `assets.json` file:

```json
{
  "version": "0.0.1",
  "packages": [
    {
      "package": "@cdlab996/element-plus-lowcode-materials",
      "version": "0.0.1",
      "library": "Cdlab996ElementPlusLowcodeMaterials",
      "urls": [
        "https://unpkg.com/@cdlab996/element-plus-lowcode-materials/dist/index.css",
        "https://unpkg.com/@cdlab996/element-plus-lowcode-materials/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996ElementPlusLowcodeMaterialsMeta",
      "url": "https://unpkg.com/@cdlab996/element-plus-lowcode-materials/dist/meta.js",
      "package": {
        "npm": "@cdlab996/element-plus-lowcode-materials"
      }
    }
  ],
  "sort": {
    "groupList": [],
    "categoryList": []
  }
}
```
