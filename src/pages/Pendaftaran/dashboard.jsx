import React from "react";
import { Card, Container } from "react-bootstrap";

import TablefromAdd from "../../component/table/tablefromAdd";
import Header from "../../component/navbar/header";
import SidebarMenu from "../../component/sidebar/sidebar";

function dashboard() {
  
  return (
    <>
      <div className="d-flex" style={{height:"125vh"}}>
        <SidebarMenu />
        <Container className="m-0 p-0">
        <Header heading="WEB SSO DELEGASI"/>
          <div className="mt-3 mx-auto">
            <h6 className="mx-3 mb-3">Cari Data Pendaftaran User Backup</h6>
            <div className="px-3">
              <Card
                border="secondary"
                style={{ width: "100%", height: "185px" }}
                className="mx-auto"
              >
                <Card.Body>
                  <Card.Title>NIK</Card.Title>
                  <form action="">
                    <input type="text" placeholder="Masukkan Nik Pegawai" />
                  </form>
                  <button className="mt-3 btn-color">Cari</button>
                </Card.Body>
              </Card>
            </div>
            <TablefromAdd />
          </div>
        </Container>
      </div>
    </>
  );
}

export default dashboard;
