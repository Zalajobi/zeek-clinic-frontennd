import React from "react";
import { ToasterConfig } from "../../global/Toast";
import Header from "../../superadmin/Header";
import Sidebar from "./Sidebar";
import {useSuperadminBaseTemplate} from "../../../hooks/superadmin/useSuperadminBaseTemplate";
import {SuperadminBaseData} from "../../../types/superadmin";

const SuperadminBaseTemplate = ({children}:{children: React.ReactNode}) => {
  const { requestData } = useSuperadminBaseTemplate()

  return (
    <React.Fragment>
      <div className="relative flex h-screen flex-1 overflow-y-auto bg-white text-brand-body-text dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar/>

        <div className="w-100 flex h-screen flex-1 flex-col overflow-y-auto">
          <Header name={`${requestData?.first_name} ${requestData?.last_name}`}/>

          {children}
        </div>
      </div>

      <ToasterConfig/>
    </React.Fragment>
  )
}

export default SuperadminBaseTemplate;