import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export function configUnpluginPlugin() {
  return Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
    ],
  });
}
