import React, {  useEffect, useState } from 'react'
import SidebarMenu from '../../component/sidebar/sidebar'
import Header from '../../component/navbar/header'
import {  Card, Container, Pagination, Table} from 'react-bootstrap'
import axios from 'axios';
import DetailBackup from '../../component/modal/DetailBackup';

import {AiOutlineCloseCircle,AiOutlineCheckCircle,AiOutlineFileDone} from 'react-icons/ai'
// import {GoLog} from 'react-icons/go'
import ApprovalMessage from '../../component/modal/Approval';
import NonApprovalMessage from '../../component/modal/NonAprroval';

export default function PersetujuanUserBackup() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNonApproval, setShowNonApproval] = useState({
    action:false,
    id:null,
    backupType:'',
    nama:''
  });
  const [showApproval,setShowApproval] = useState({
    action:false,
    id:null,
    backupType:''
  })
  const [dataApproval,setDataApproval] = useState([])

  const[dataAddbackup,setDataAddBackup] = useState({
    id:null,
    backupType:""
  })
 



  const fetchDataAddBackup = async (id,backupType) => {
    try {
      await axios
          .get(`http://localhost:8080/api/v1/approval/detail?id=${id}&backupType=${backupType}`)
          .then((res) => {
            const data = res.data.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setDataAddBackup(data);
            // console.log(test)
            // console.log(data)
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
              {/* <td ><button onClick={() => handleShowModal(g.id,g.backupType)} className='btn-color-detail'>Detail</button></td> */}
              <td><AiOutlineFileDone fontSize={25} style={{cursor:'pointer'}} onClick={() => handleShowModal(g.id,g.backupType)}/></td>
              <td className='d-flex'>{
                g.approvalType === "Pending" ? 
                <div className='m-auto'>
                  <AiOutlineCheckCircle className='mx-2' fontSize={25} style={{cursor:'pointer'}} onClick={() => setShowApproval({action:true,id:g.id,backupType:g.backupType})}/>
                  <AiOutlineCloseCircle fontSize={25} style={{cursor:'pointer'}}  onClick={() => setShowNonApproval({action:true,id:g.id,backupType:g.backupType,nama:g.name})}/>
                </div>
                : g.approvalType === "Approve" ? 
                <p style={{margin:'auto'}}>Disetujui</p>
                : <p style={{margin:'auto'}}>Ditolak</p>
              }
               
              </td>
            </tr>
           
          )
        }

        )}
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
