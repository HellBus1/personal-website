interface Route {
  path: string;
  component: React.FC;
  isExact?: boolean;
  isProtected?: boolean;
}

export default Route