export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'AnYi',
    path: '/',
  },
  {
    label: '关于',
    path: '/about',
  },
  {
    label: '简历',
    path: '/resume',
  },
  {
    label: '动态',
    path: '/writing',
  },
  {
    label: '联系',
    path: '/contact',
  },
  {
    label: '项目',
    path: '/projects',
  },
];

export default routes;
