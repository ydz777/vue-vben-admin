import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const salesAdvisor: AppRouteModule = {
  path: '/salesAdvisor',
  name: 'salesAdvisor',
  component: LAYOUT,
  redirect: '/salesAdvisor/cmProductData',
  meta: {
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: '销售参谋',
  },
  children: [
    {
      path: 'cmProductData',
      name: 'CmProductData',
      component: () => import('/@/views/salesAdvisor/cmProductData/index.vue'),
      meta: {
        title: '产品数据分析',
      },
    },
    {
      path: 'cmGoodsList',
      name: 'CmGoodsList',
      component: () => import('/@/views/salesAdvisor/cmGoodsList/index.vue'),
      meta: {
        title: '商品列表',
      },
    },
  ],
};

export default salesAdvisor;
