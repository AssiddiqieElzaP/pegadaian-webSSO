import React, { useState } from "react";
import TambahUser from "../../pages/Pendaftaran/Tambah/TambahUser";
import { Container, Nav } from "react-bootstrap";
import DatePicker from "../datepicker/DatePicker";
import Header from "../navbar/header";
import AddBackup from "../../pages/Pendaftaran/daftarPengguna/addBackup";
import RegisterBackup from "../../pages/Pendaftaran/daftarPengganti/registerBackup";
import SidebarMenu from "../sidebar/sidebar";
import GantiBackup from "../../pages/Pendaftaran/Ganti/GantiBackup";
export default function Tabs() {
  const [currentTabs, setCurrentTabs] = useState();
  const tabs = [
    {
      id: 1,
      tabTitle: "Tambah",
      content: <TambahUser />,
    },
    {
      id: 2,
      tabTitle: "Ganti",
      content: <GantiBackup />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTabs(e.target.id);
  };

  return (
    <>
     <div className="d-flex" style={{height:"125vh"}}>
    <SidebarMenu/>
      <Container className="mx-auto p-0">
      <Header heading="PENGAJUAN" />
        {/* <div>
                {tabs.map((tab, i) =>
                <button 
                key={i}
                id={tab.id}
                disabled={currentTabs === `${tab.id}`}
                onClick={handleTabClick}
                >{tab.tabTitle}</button>
                )}
            </div>
            <div>
                {tabs.map((tab,i) =>
                <div key={i}>
                        {currentTabs === `${tab.id}` && 
                        <div>
                            {tab.content}
                        </div>
                        }
                </div>
                )}
            </div> */}

        <Nav fill variant="tabs" >
          {tabs.map((tab, i) =>
          <Nav.Item key={i}
            id={tab.id}
                disabled={currentTabs === `${tab.id}`}
                onClick={handleTabClick} className="text-start mx-3 my-2" style={{cursor:'pointer'}}>{tab.tabTitle}
          </Nav.Item>
                )}
        </Nav>
        <div>
                {tabs.map((tab,i) =>
                <div key={i}>
                        {currentTabs === `${tab.id}` && 
                        <div>
                            {tab.content}
                        </div>
                        }
                </div>
                )}
            </div>
      </Container>
      </div>
    </>
  );
}
