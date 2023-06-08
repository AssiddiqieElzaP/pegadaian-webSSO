import React, { useState } from "react";
import TambahUser from "../../pages/Pendaftaran/Tambah/TambahUser";
import { Container, Navbar } from "react-bootstrap";
import Header from "../navbar/header";
import SidebarMenu from "../sidebar/sidebar";
import GantiBackup from "../../pages/Pendaftaran/Ganti/GantiBackup";
import NavbarComp from "../navbar/NavbarComp";
export default function Tabs() {
  // const [isActive, setIsActive] = useState(false);

 
  const [currentTabs, setCurrentTabs] = useState("1");
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
    // setIsActive(!isActive);
  };

  return (
    <>
    <NavbarComp/>
      <div className="d-flex">
        <SidebarMenu />
        <Container className="mx-auto p-0">
          <Header heading="PENGAJUAN BARU" />
          <div className="mx-3 my-2 d-flex">
            {tabs.map((tab, i) => (
              <button
                key={i}
                id={tab.id}
                disabled={currentTabs === `${tab.id}`}
                onClick={handleTabClick}
                className={currentTabs === `${tab.id}` ? "btn-color me-2": "btn-color-cancel me-2"}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div>
            {tabs.map((tab, i) => (
              <div key={i}>
                {currentTabs === `${tab.id}` && <div>{tab.content}</div>}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
