interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Project',
    path: '/project'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'About',
    path: '/about'
  }
];

export { routes };