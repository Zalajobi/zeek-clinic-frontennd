import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <React.Fragment>
      <aside
        className={`md:h-100 w-screen shrink-0 overflow-x-scroll border-r border-r-custom-gray-100 bg-brand-secondary-background !shadow-lg dark:border-r-ds-dark-400 dark:bg-ds-dark-700 ${
          showSidebar ? "md:w-auto" : "md:w-[13rem]"
        } no-scroll md:overflow-y-scroll`}>
        <div
          className={clsx(
            "sticky top-0 z-50 hidden h-14 shrink-0 flex-row items-center border-b bg-brand-secondary-background py-2 px-4 dark:border-b-ds-dark-400 dark:bg-ds-dark-700 md:flex",
            { ["justify-between"]: !showSidebar },
            { ["justify-center"]: showSidebar }
          )}
          >
          <Link to="#">
            <img
              src={`/img/sidebar/bask-logo-rounded-square.png`}
              alt="Logo"
              width={40}
              height={40}
              className={clsx({ ["hidden"]: showSidebar })}
            />
          </Link>

          <button
            className="grid h-5 w-5 cursor-pointer place-items-center rounded-lg border-brand-background p-1 outline-none transition-colors hover:bg-brand-background focus:outline-none dark:border-ds-dark-400 hover:dark:bg-ds-dark-600/50"
            onClick={() => {
              setShowSidebar(!showSidebar)
            }}
          >
            <img
              src={`/img/sidebar/sidebar-${
                showSidebar ? "collapsed" : "open"
              }.svg`}
              alt="Logo"
              width={12}
              height={12}
            />
          </button>
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Sidebar;