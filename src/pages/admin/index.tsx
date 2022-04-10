import { NextPage } from "next"
import DashboardWrapper from "src/components/admin/DashboardWrapper/DashboardWrapper"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilePen, faGauge, faEllipsisV, faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faFilePen, faGauge, faEllipsisV, faSun, faMoon, faBars)

const Dashboard: NextPage = () => {
  return <DashboardWrapper>
    <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      <p className="text-xl md:text-2xl text-gray-500"> Welcome to my Blog </p>
    </div>
  </DashboardWrapper>
}

export default Dashboard