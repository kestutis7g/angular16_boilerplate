declare type RouteType = 'link' | 'sub';

export type BaseRoute = {
  path: string;
  title: string;
  type: RouteType;
  isVisible?: boolean;
};

export type RouteInfo = BaseRoute & {
  icon: string;
};
