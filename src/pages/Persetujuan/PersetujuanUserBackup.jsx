import React, { useEffect, useState } from "react";
import SidebarMenu from "../../component/sidebar/sidebar";
import Header from "../../component/navbar/header";
import { Card, Container, Table } from "react-bootstrap";
import axios from "axios";
import DetailBackup from "../../component/modal/DetailBackup";

// import {GoLog} from 'react-icons/go'
import { MdDeleteSweep } from "react-icons/md";
import { FcCancel, FcViewDetails, FcOk } from "react-icons/fc";
import NavbarComp from "../../component/navbar/NavbarComp";
import ApprovalMessage from "../../component/modal/Approval";
import NonApprovalMessage from "../../component/modal/NonAprroval";
import PageApproval from "../../component/pagination/PageApproval";
import ActionDelete from "../../component/modal/ActionDelete";

export default function PersetujuanUserBackup() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNonApproval, setShowNonApproval] = useState({
    action: false,
    id: null,
    backupType: "",
    nama: "",
  });
  const [showApproval, setShowApproval] = useState({
    action: false,
    id: null,
    backupType: "",
  });

  const [showconfirmationdelete, setShowConfirmationDelete] = useState(false);
  const [dataApproval, setDataApproval] = useState([]);

  const [dataAddbackup, setDataAddBackup] = useState({
    id: null,
    backupType: "",
    reason: "",
  });

  const fetchDataAddBackup = async (id, backupType) => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/approval/detail?id=${id}&backupType=${backupType}`
        )
        .then((res) => {
          const data = res.data.data; //harus dibuatkan variabel sebelum di panggil di usestate
          setDataAddBackup(data);
          // console.log(test)
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDelete = async (id, backupType) => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/approval/delete?id=${id}&backupType=${backupType}`
        )
        .then((res) => {
          const data = res.data.data; //harus dibuatkan variabel sebelum di panggil di usestate
          setDataAddBackup(data);
          // console.log(test)
          console.log("data berhasil di hapus", data);
          setShowConfirmationDelete(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const [getId, setGetId] = useState(null);
  const [getBackup, setGetBackup] = useState(null);

  const handleDelete = (id, backupType) => {
    setGetId(id);
    setGetBackup(backupType);
    setShowConfirmationDelete(true);
  };

  const handleShowModal = async (id, backupType) => {
    await fetchDataAddBackup(id, backupType);
    setShowConfirmation(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_BASE_URL}/approval/grid`)
          .then((res) => {
            const data = res.data.data.content;
            setDataApproval(data);
          });
      } catch (error) {}
    };
    fetchData();
  }, []);

  //pagination
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  //untuk menyesuaikan
  const indexOfLastPage = page * limit;
  const indexOfFirstPage = indexOfLastPage - limit;
  const currentPage = dataApproval.slice(indexOfFirstPage, indexOfLastPage);
  const howManyPages = Math.ceil(dataApproval.length / limit);

  return (
    <>
      <NavbarComp />
      <div className="d-flex" style={{ height: "125vh" }}>
        <SidebarMenu />
        <Container className="mx-auto p-0">
          <Header heading="PERSETUJUAN USER BACKUP" />
          <Card className="mt-2 mx-3 p-4">
            <Table bordered className="m-auto text-center">
              <thead style={{ fontSize: "14px" }}>
                <tr>
                  <th>NAMA PEGAWAI</th>
                  <th>UNIT KERJA</th>
                  <th>JABATAN</th>
                  <th>JENIS BACKUP</th>
                  <th>DURASI BACKUP</th>
                  <th>KETERANGAN</th>
                  <th>DETAIL</th>
                  <th>STATUS</th>
                  <th>AKSI</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14px" }}>
                {currentPage.map((g) => (
                  <tr key={g.id}>
                    <td>{g.name}</td>
                    <td>
                      {g.work_unit_code}-{g.work_unit_name}
                    </td>
                    <td>{g.position_name}</td>
                    <td>{g.backupType}</td>
                    <td>{parseInt(g.duration) + 1} Hari</td>
                    <td>{g.description}</td>
                    {/* <td ><button onClick={() => handleShowModal(g.id,g.backupType)} className='btn-color-detail'>Detail</button></td> */}
                    <td>
                      <FcViewDetails
                        fontSize={25}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleShowModal(g.id, g.backupType)}
                      />
                    </td>
                    <td className="d-flex">
                      {g.approvalType === "Pending" ? (
                        <div className="m-auto">
                          <FcOk
                            className="mx-2"
                            fontSize={25}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setShowApproval({
                                action: true,
                                id: g.id,
                                backupType: g.backupType,
                              })
                            }
                          />
                          <FcCancel
                            fontSize={25}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setShowNonApproval({
                                action: true,
                                id: g.id,
                                backupType: g.backupType,
                                nama: g.name,
                              })
                            }
                          />
                        </div>
                      ) : g.approvalType === "Approve" ? (
                        <p style={{ margin: "auto" }}>Disetujui</p>
                      ) : (
                        <p style={{ margin: "auto" }}>Ditolak</p>
                      )}
                    </td>
                    <td>
                      <MdDeleteSweep
                        onClick={() => handleDelete(g.id, g.backupType)}
                        fontSize={25}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <DetailBackup
              show={showConfirmation}
              data={dataAddbackup}
              onClose={() => setShowConfirmation(false)}
            />
            <ApprovalMessage
              show={showApproval.action}
              id={showApproval.id}
              backupType={showApproval.backupType}
              aproval="Approve"
              onClose={() => setShowApproval(false)}
            />

            <NonApprovalMessage
              show={showNonApproval.action}
              id={showNonApproval.id}
              backupType={showNonApproval.backupType}
              nama={showNonApproval.nama}
              aproval="NonApprove"
              onClose={() => setShowNonApproval(false)}
            />
            <PageApproval
              pages={howManyPages}
              setPage={setPage}
              currentPage={currentPage}
              dataApproval={dataApproval}
            />
            <ActionDelete
              show={showconfirmationdelete}
              onClose={() => setShowConfirmationDelete(false)}
              onDelete={fetchDelete(getId, getBackup)}
            />
          </Card>
        </Container>
      </div>
    </>
  );
}
