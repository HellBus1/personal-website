interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: 'Home',
    path: '/home'
  },
  {
    name: 'Articles',
    path: '/articles'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Snippets',
    path: '/snippets'
  },
  {
    name: 'About',
    path: '/about'
  }
];

export { routes };
