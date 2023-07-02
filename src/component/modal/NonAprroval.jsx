import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

function NonApprovalMessage({ show, onClose, id, nama }) {
  const [formData, setFormData] = useState({
    reason: "",
  });
  const [validated, setValidated] = useState(false);
  const fetchApproval = async (id) => {
    const insert = {
      approval_type:'NonApprove',
      updated_by:'P94006',
      reason: formData.reason,
    };
    if (formData.reason === "") {
      toast.error("Silahkan isi keterangan penolakan", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        // hideProgressBar: true,
        // closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      try {
        await axios
          .put(`${process.env.REACT_APP_BASE_URL}/approval/action?`, insert, {
            params: {
              id: id,
            },
          })
          .then((res) => {
            const dataApprov = res.data;
            window.location.reload();
            console.log(dataApprov);
          });
      } catch (error) {
        console.error("data tidak tersimpan", error);
      }
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Konfirmasi Tidak Setuju</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={fetchApproval} noValidate validated={validated}>
          <Row>
            <Form.Label column sm="3">
              Nama Pegawai
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Nama Pegawai"
                className="mx-3"
                defaultValue={nama}
                disabled
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Form.Label column sm="3">
              Keterangan
            </Form.Label>
            <Col sm="8">
              <Form.Control
                as="textarea"
                rows={5}
                className="mx-3"
                name="reason"
                onChange={(e) => setFormData({ reason: e.target.value })}
                value={formData.reason}
                required
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={() => fetchApproval(id)}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NonApprovalMessage;
