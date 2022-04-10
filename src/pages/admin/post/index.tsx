import { NextPage } from "next";
import DashboardWrapper from "src/components/admin/DashboardWrapper/DashboardWrapper";
import { useRouter } from "next/router";
import dashboardTitleBuilder from "src/utils/dashboardTitleBuilder";

const Post: NextPage = () => {
  const router = useRouter()

  return <DashboardWrapper>
    <p className="text-2xl font-semibold">{dashboardTitleBuilder(router.pathname)?.name}</p>
  </DashboardWrapper>
}

export default Post