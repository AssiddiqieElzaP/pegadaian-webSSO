import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import moment from "moment/moment";
import "./modal.css";

function DetailBackup({ show, onClose, data }) {
  // const currentDate = data.tanggal_akhir_bkp()
  const formattedDateMulai = moment(data.tanggal_mulai_bkp).format("yyyy-MM-DD");
  const formattedDateAkhir = moment(data.tanggal_akhir_bkp).format("yyyy-MM-DD");
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Data User Backup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Form.Group as={Col} className="mb-3" controlid="">
              <Form.Label column sm="3">
                Nama
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.nama_pegawai}
                disabled
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlid="">
              <Form.Label column sm="4">
                Unit Kerja Backup
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.unit_kerja_bkp}
                disabled
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlid="">
              <Form.Label column sm="4">
                User ID Backup
              </Form.Label>
              <Form.Control type="text" defaultValue={data.uid_bkp} disabled />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlid="">
              <Form.Label column sm="4">
                Jabatan Backup
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.jabatan_bkp}
                disabled
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="4">
                Unit Kerja
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.unit_kerja}
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="10">
                Tanggal Mulai Backup
              </Form.Label>
              <Form.Control
                value={formattedDateMulai}
                defaultValue={data.tanggal_mulai_bkp}
                disabled
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="4">
                Jabatan
              </Form.Label>
              <Form.Control type="text" defaultValue={data.jabatan} disabled />
            </Form.Group>
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="10">
                Tanggal Akhir Backup
              </Form.Label>
              <Form.Control
                value={formattedDateAkhir}
                defaultValue={data.tanggal_akhir_bkp}
                disabled
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlid="">
            <Form.Label column sm="4">
              Status
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" defaultValue={data.status} disabled />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlid="">
            <Form.Label column sm="4">
              Pembuat Pengajuan
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                defaultValue={data.created_by}
                disabled
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlid="">
            <Form.Label column sm="4">
              Pemberi Persetujuan
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                defaultValue={data.approved_by}
                disabled
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlid="">
            <Form.Label column sm="4">
              Keterangan
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                defaultValue={data.alasan_ditolak}
                disabled
              />
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
