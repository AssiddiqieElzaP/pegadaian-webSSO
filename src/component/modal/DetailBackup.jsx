import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import moment from "moment/moment";
import "./modal.css";
import ConfirmationDelete from "./ConfirmationDelete";
import { useState } from "react";
import axios from "axios";

function DetailBackup({ show, onClose, data, handleDelete }) {
  // const currentDate = data.tanggal_akhir_bkp()
  const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
  const setDataAddBackup = null;
  const formattedDateMulai = moment(data.tanggal_mulai_bkp).format(
    "yyyy-MM-DD"
  );
  const formattedDateAkhir = moment(data.tanggal_akhir_bkp).format(
    "yyyy-MM-DD"
  );

  const fetchDelete = async (id) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/approval/delete?id=${id}`)
        .then((res) => {
          const data = res.data.data; //harus dibuatkan variabel sebelum di panggil di usestate
          setDataAddBackup(data);
          // console.log(test)
          console.log("data berhasil di hapus", data);
        });
    } catch (error) {
      console.error(error);
    }
    setShowConfirmationDelete(false);
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Data User Backup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleDelete}>
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
              <Form.Label column sm="10">
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

          <Row className="mb-3">
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="10">
                Pembuat Pengajuan
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.created_by}
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="4">
                Status
              </Form.Label>
              <Form.Control type="text" defaultValue={data.status} disabled />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="10">
                Pemberi Persetujuan
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.approved_by}
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} controlid="">
              <Form.Label column sm="4">
                Keterangan
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data.alasan_ditolak}
                disabled
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => ConfirmationDelete()}>
          Delete
        </Button>
      </Modal.Footer>

      <ConfirmationDelete
        show={showConfirmationDelete}
        onDelete={fetchDelete}
        onClose={() => setShowConfirmationDelete(false)}
      />
    </Modal>
  );
}

export default DetailBackup;
