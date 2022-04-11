import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardAdminMenus from "src/const/DashboardAdminMenus"
import NavMenu from "src/model/NavMenu"
import Image from 'next/image'
import Link from 'next/link'

interface innerProps {
  isDrawerOpen: boolean;
}

const Sidebar = ({ isDrawerOpen }: innerProps): React.ReactElement => {
  const sideMenuRenderer = () => {
    let menus = []
    for (let i = 0; i < DashboardAdminMenus.length; i++) {
      let menu: NavMenu = DashboardAdminMenus[i]

      menus.push(<Link key={i} href={menu.route}>
        <div className="flex flex-row p-3 space-x-4 hover:bg-teal-500 cursor-pointer items-center px-5">
          <FontAwesomeIcon icon={menu.iconName} color={'white'} />
          <p className="text-white">{menu.name}</p>
        </div>
      </Link>)
    }

    return menus
  }
  // 2xl:basis-1/6 xl:basis-1/5 lg:basis-1/4 md:basis-1/3

  return <aside className={`md:min-h-screen flex-col bg-slate-700 transition-all z-40 ease-in-out duration-300 ${isDrawerOpen ? "translate-x-0 " : "sm:translate-x-0 -translate-x-full"} translate-x-0 absolute md:static bottom-0 top-0 w-72`}>
    <div className="flex flex-row justify-center items-center py-5">
      <p className="text-white">Personal</p>
    </div>
    <div className="flex mx-5 my-8 items-center">
      <Image
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"}
        height={48}
        width={48}
        className={'rounded'}
      />
      <div className="flex-1 mx-4">
        <p className="text-white mb-1">Name</p>
        <p className="text-white text-sm">Super Admin</p>
      </div>
      <FontAwesomeIcon icon={"ellipsis-v"} color={"white"} size={'lg'} />
    </div>
    {sideMenuRenderer()}
  </aside>
}

export default Sidebar