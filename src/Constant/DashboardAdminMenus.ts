import NavMenu from "../Models/NavMenu"


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