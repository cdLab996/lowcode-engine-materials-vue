<div align="center">

<a href="https://vant-ui.github.io/vant/en-US/"><img alt="vant" src="https://img01.yzcdn.cn/vant/logo.png" width="150"/></a>

## Vant(4.8.10) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/vant-lowcode-materials?logo=npm)](https://www.npmjs.com/package/@cdlab996/vant-lowcode-materials)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/vant-lowcode-materials)](https://www.npmjs.com/package/@cdlab996/vant-lowcode-materials)
[![GitHub license](https://github.com/cdLab996/lowcode-engine-materials-vue)](https://github.com/cdLab996/lowcode-engine-materials-vue/blob/main/LICENSE)

</div>

## Component material complete list

- [x] button
- [x] image
- [x] Switch
- [x] tab
- [x] tabs

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/vant-lowcode-materials
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/vant-lowcode-materials/dist/assets.json'

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

      const loadedAssets = await injectAssets('https://unpkg.com/@cdlab996/vant-lowcode-materials/dist/assets.json')
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
  "version": "1.0.0",
  "packages": [
    {
      "package": "@cdlab996/vant-lowcode-materials",
      "version": "1.0.0",
      "library": "Cdlab996VantLowcodeMaterials",
      "urls": [
        "https://unpkg.com/@cdlab996/vant-lowcode-materials/dist/index.css",
        "https://unpkg.com/@cdlab996/vant-lowcode-materials/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996VantLowcodeMaterialsMeta",
      "url": "https://unpkg.com/@cdlab996/vant-lowcode-materials/dist/meta.js",
      "package": {
        "npm": "@cdlab996/vant-lowcode-materials"
      }
    }
  ],
  "sort": {
    "groupList": [],
    "categoryList": []
  }
}
```
