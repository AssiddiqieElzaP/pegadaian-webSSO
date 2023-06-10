import React, {  useEffect, useState } from 'react'
import SidebarMenu from '../../component/sidebar/sidebar'
import Header from '../../component/navbar/header'
import {  Card, Container,Table} from 'react-bootstrap'
import axios from 'axios';
import DetailBackup from '../../component/modal/DetailBackup';

import {FcCancel,FcViewDetails,FcOk} from 'react-icons/fc'
// import {GoLog} from 'react-icons/go'
import ApprovalMessage from '../../component/modal/Approval';
import NonApprovalMessage from '../../component/modal/NonAprroval';
import PageApproval from '../../component/pagination/PageApproval'

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
    backupType:"",
    reason:""
  })
 



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
          .get(`http://localhost:8080/api/v1/approval/grid?page=${page}&limit=${limit}`)
          .then((res) => {
            const data = res.data.data.content; //harus dibuatkan variabel sebelum di panggil di usestate
            setDataApproval(data);
            // setPage(data);
            // setLimit(data);
            // console.log(test)
            // console.log(limit)
            // console.log(page)
        
          });
      } catch (error) {}
    };
    fetchData();
  },[]);


  //pagination
  const [page,setPage] = useState(1);
  const [limit] = useState(2);  
  // const [pages,setPages] = useState(1);

  //untuk menyesuaikan 
  const indexOfLastPage = page * limit;
  const indexOfFirstPage = indexOfLastPage - limit;
  const currentPage =dataApproval.slice(indexOfFirstPage,indexOfLastPage)
  const howManyPage = Math.ceil(dataApproval.length/limit)
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
        {currentPage.map((g)=>{
          return(         
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.work_unit_code}-{g.work_unit_name}</td>
              <td>{g.position_name}</td>
              <td>{g.backupType}</td>
              <td>{g.duration} Hari</td>
              <td>{g.description}</td>
              {/* <td ><button onClick={() => handleShowModal(g.id,g.backupType)} className='btn-color-detail'>Detail</button></td> */}
              <td><FcViewDetails fontSize={25} style={{cursor:'pointer'}} onClick={() => handleShowModal(g.id,g.backupType)}/></td>
              <td className='d-flex'>{
                g.approvalType === "Pending" ? 
                <div className='m-auto'>
                  <FcOk className='mx-2' fontSize={25} style={{cursor:'pointer'}} onClick={() => setShowApproval({action:true,id:g.id,backupType:g.backupType})}/>
                  <FcCancel fontSize={25} style={{cursor:'pointer'}}  onClick={() => setShowNonApproval({action:true,id:g.id,backupType:g.backupType,nama:g.name})}/>
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

      <PageApproval pages = {howManyPage} setPage={setPage}/>        
        </Card>
    </Container>
   </div>
   </>
  )
}
