import React, {  useEffect, useState } from 'react'
import SidebarMenu from '../../component/sidebar/sidebar'
import Header from '../../component/navbar/header'
import { Card, Container, Pagination, Table, Button, Modal, Form, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import DetailBackup from '../../component/modal/DetailBackup';
import { async } from 'q';

export default function PersetujuanUserBackup() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showApproval,setShowApproval] = useState(false)
  const [dataApproval,setDataApproval] = useState([])

  const[dataAddbackup,setDataAddBackup] = useState({
    id:null,
    backupType:""
  })
 

  const fetchApproval = async () => {
    try {
      await axios
      .get()
      .then((res) => {

      })
    } catch (error) {
      
    }
  }

  const fetchDataAddBackup = async (id,backupType) => {
    try {
      await axios
          .get(`http://localhost:8080/api/v1/approval/detail?id=${id}&backupType=${backupType}`)
          .then((res) => {
            const data = res.data.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setDataAddBackup(data);
            // console.log(test)
            console.log(data)
          });
    } catch (error) {
      console.error(error);
    }
  }

  const handleShowModal = (id,backupType) => {
    fetchDataAddBackup(id,backupType);
    setShowConfirmation(true);
  };

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:8080/api/v1/approval/grid`)
          .then((res) => {
            const data = res.data.data.content; //harus dibuatkan variabel sebelum di panggil di usestate
            setDataApproval(data);
            // console.log(test)
            // console.log(data)
          });
      } catch (error) {}
    };
    fetchData();
  },[]);
  return (
   <>
   <div className="d-flex" style={{height:"125vh"}}>
    <SidebarMenu/>
    <Container  className="mx-auto p-0"> 
    <Header heading="PERSETUJUAN USER BACKUP"/>
        <Card className='mt-2 mx-3 p-4'>
        <Table bordered  className='m-auto text-center' >
      <thead style={{fontSize:"14px"}}>
        <tr>
          <th>NAMA PEGAWAI</th>
          <th>UNIT KERJA</th>
          <th>JABATAN</th>
          <th>JENIS BACKUP</th>
          <th>DURASI BACKUP</th>
          <th>KETERANGAN</th>
          <th>DETAIL</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody  style={{fontSize:"14px"}}>
        {dataApproval?.map((g,key)=>{
          return(
            
            <tr key={key}>
              <td>{g.name}</td>
              <td>{g.work_unit_code}-{g.work_unit_name}</td>
              <td>{g.position_name}</td>
              <td>{g.backupType}</td>
              <td>{g.duration} Hari</td>
              <td>{g.description}</td>
              <td ><button onClick={() => handleShowModal(g.id,g.backupType)}>Detail</button></td>
              <td className='d-flex'>{
                g.approvalType === "Pending" ? 
                <div >
                  
                  <button className='mx-1 px-2'>Y</button>
                  <button className='px-2'>X</button>
                </div>
                : g.approvalType === "Approve" ? 
                  <div><span>Disetujui</span></div>
                : <p>Ditolak</p>
              }
               
              </td>
            </tr>
           
          )
        }

        )}
      </tbody>
    </Table>

    {/* <Modal show={setShowConfirmation(true)} onHide={setShowConfirmation(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Data User Backup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {dataAddbackup ? (
            <Form>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                UID Backup :
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue={dataAddbackup.uid_bkp} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                Nama :
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue="0000000000" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                Unit Kerja :
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue="0000000000" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                Jabatan :
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue="0000000000" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                Jenis Backup:
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue="0000000000" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                Durasi Backup :
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue="0000000000" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlid="nik">
              <Form.Label column sm="4">
                Keterangan:
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue="0000000000" />
              </Col>
            </Form.Group>
            </Form>
          ) : (
            <p>Loading details...</p>
          )}
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={setShowConfirmation(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> */}
    <DetailBackup
        show={showConfirmation}
        data={dataAddbackup}
        onClose={() => setShowConfirmation(false)}
      />
    <Pagination>
     
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      
    </Pagination>
        </Card>
    </Container>
   </div>
   </>
  )
}
