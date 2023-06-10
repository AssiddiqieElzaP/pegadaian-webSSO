import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import moment from 'moment/moment';
function DetailBackup({ show, onClose,data}) {

  const currentDate = new Date();

  const formattedDate = moment(currentDate).format('yyyy-MM-DD');

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Data User Backup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Nama
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.nama_pegawai} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          User ID Backup
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.uid_bkp}  disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Unit Kerja
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text'  defaultValue={data.unit_kerja} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Jabatan
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.jabatan} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Unit Kerja Backup
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.unit_kerja_bkp} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Jabatan Backup
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.jabatan_bkp} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Tanggal Mulai Backup
        </Form.Label>
        <Col sm="8">
          <Form.Control  value={formattedDate} defaultValue={data.tanggal_mulai_backup} disabled />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Tanggal Akhir Backup
        </Form.Label>
        <Col sm="8">
          <Form.Control  value={formattedDate} defaultValue={data.tanggal_akhir_backup} disabled />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Status
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text'  defaultValue={data.status} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Pemberi Persetujuan
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.approved_by} disabled/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlid="">
        <Form.Label column sm="4">
          Keterangan
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' defaultValue={data.reason} disabled/>
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