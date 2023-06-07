import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

function NonApprovalMessage({ show, onClose, id,backupType,nama}) {
    const [formData, setFormData] = useState({
        reason:""
      });
    
      const handleDecription = (event) =>{
        const{name,value} = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name] : value
        }))
    
      }
      

  const fetchApproval = async (id,backupType) => {
    const insert = {
      approvalType:'NonApprove',
      reason:'jelek'
    }
    try {
      await axios
      .put(`http://localhost:8080/api/v1/approval/action?`, insert,{
        params:{
          id:id,
          backupType:backupType,
        },
      })  
      .then((res) =>{
        const dataApprov = res.data
        window.location.reload();
        console.log(dataApprov)
      })
    } catch (error) {
      console.error('data tidak tersimpan',error)
    }
  }
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Konfirmasi Tidak Setuju</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={fetchApproval}>
        <Row>
        <Form.Label column sm="2">
          Nama
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="Nama Pegawai"  className='mx-3' value={nama}/>
        </Col>
        </Row>
        <Row className='my-3'>
        <Form.Label column sm="2">
          Keterangan
        </Form.Label>
        <Col sm="8">
        <Form.Control as="textarea" rows={5}  className='mx-3'
        name='reason'
        value={formData.reason}
        onChange={handleDecription}
         />
        </Col>
        </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={()=>fetchApproval(id,backupType)}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NonApprovalMessage;