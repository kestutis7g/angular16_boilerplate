import { RouteInfo } from '../types/route.types';

export const Routes: RouteInfo[] = [
  {
    path: '/general/home',
    title: 'menu.home',
    type: 'link',
    icon: 'fa-solid fa-home fa-xl',
  },
  {
    path: '/general/settings',
    title: 'menu.settings',
    type: 'link',
    icon: 'fa-solid fa-gear fa-xl',
  },
  {
    path: '/payment/list',
    title: 'menu.cashRegister',
    type: 'link',
    icon: 'fa-solid fa-cash-register fa-xl',
  },
];
