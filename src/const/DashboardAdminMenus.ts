import NavMenu from "src/model/NavMenu"

const DashboardAdminMenus: NavMenu[] = [
  {
    name: 'Beranda',
    iconName: 'gauge',
    route: '/admin'
  },
  {
    name: 'Manajemen Post',
    iconName: 'file-pen',
    route: '/admin/post'
  }
]

export default DashboardAdminMenus