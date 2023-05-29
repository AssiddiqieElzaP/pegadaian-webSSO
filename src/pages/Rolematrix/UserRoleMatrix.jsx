import React from "react";
import SidebarMenu from "../../component/sidebar/sidebar";
import { Card, Container, Dropdown, Form, Table } from "react-bootstrap";
import Header from "../../component/navbar/header";
import "./UserRole.css";
function UserRoleMatrix() {
  return (
    <>
      <div className="d-flex" style={{ height: "125vh" }}>
        <SidebarMenu />
        <Container className="mx-auto p-0">
          <Header heading="USER ROLE MATRIX" />
          <Card
            border="dark"
            className="px-2 py-3 my-3 mx-3 text-center"
            style={{ height: "80vh" }}
          >
            <div className="px-3 mt-2">
              <Header heading="JABATAN ROLE MATRIX" />
              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  HC Wilayah
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto mt-2">
                    <div className="p-4">
                      <Table bordered hover className="m-auto">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  Deputi Area
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto my-2">
                    <div className="p-4">
                      <Table bordered hover className="m-auto">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  Pimpinan Cabang
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto my-2">
                    <div className="p-4">
                      <Table bordered hover className="m-auto">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  Manager Gadai
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto my-2">
                    <div className="p-4">
                      <Table bordered hover className="m-auto">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  Manager Non Gadai
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto my-2">
                    <div className="p-4">
                      <Table bordered hover className="m-auto">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  Kasir
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto my-2">
                    <div className="p-4">
                      <Table bordered hover className="mx-auto my-2">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="d-inline">
                <Dropdown.Toggle id="autoclose-true" className="dropdownClass">
                  Penaksir
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "100%" }}>
                  <Container className="mx-auto my-2">
                    <div className="p-4">
                      <Table bordered hover className="mx-auto my-2">
                        <thead className="text-center">
                          <tr>
                            <th>ROLE USER</th>
                            <th>VIEW</th>
                            <th>CREATE</th>
                            <th>MODIFY</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>PENGAJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>PERSETUJUAN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                           
                          </tr>
                          <tr>
                            <td>DASHBOARD</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                          <tr>
                            <td>ADMIN</td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            <td><Form.Check aria-label="option 1" /></td>
                            
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default UserRoleMatrix;
