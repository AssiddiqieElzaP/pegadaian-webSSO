import axios from 'axios';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ApprovalMessage({ show, onClose, id}) {
  const fetchApproval = async (id) => {
    const insert = {
      approvalType:'Approve',
      reason:null,
    }
    try {
      await axios
      .put(`${process.env.REACT_APP_BASE_URL}/approval/action`, insert,{
        params:{
          id:id,
        },
      })  
      .then((res) =>{
        const dataApprov = res.data
        window.location.reload();
        // console.log(dataApprov)
      })
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Konfirmasi Simpan Data</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>Anda yakin ingin menyimpan data ini?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={()=>fetchApproval(id)}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ApprovalMessage;