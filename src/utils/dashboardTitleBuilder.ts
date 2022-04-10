import DashboardAdminMenus from "src/const/DashboardAdminMenus"

const dashboardTitleBuilder = (path: string) => {
  return DashboardAdminMenus.find((element) => element.route === path)
}

export default dashboardTitleBuilder