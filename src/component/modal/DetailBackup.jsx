import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

function DetailBackup({ show, onClose,data}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Data User Backup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group as={Row} className="mb-3" controlid="nik">
        <Form.Label column sm="4">
          NiK : 
        </Form.Label>
        <Col sm="8">
          <Form.Control plaintext readOnly defaultValue={data.nama_pegawai} />
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailBackup;