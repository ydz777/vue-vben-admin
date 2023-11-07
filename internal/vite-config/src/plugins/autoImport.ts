import AutoImport from 'unplugin-auto-import/vite';

export function configAutoImportPlugin() {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],

    imports: [
      'vue',
      'vue-router',
      {
        axios: [
          // default imports
          ['default', 'axios'], // import { default as axios } from 'axios',
        ],

        // '[package-name]': [
        //   '[import-names]',
        //   // alias
        //   ['[from]', '[alias]'],
        // ],
      },
    ],

    dts: true,
  });
}
