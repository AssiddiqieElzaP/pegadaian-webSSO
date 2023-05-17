import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function RegisterBackup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-evenly">
        <h6 className="mx-5">Detail Pegawai yang menggantikan</h6>
        <h6 className="mx-5">Detail Pegawai yang digantikan</h6>
      </div>
      <div className="px-3 d-flex">
        <Card
          border="secondary"
          style={{ width: "100%", height: "auto" }}
          className="me-3"
        >
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group md="4" controlId="validation1">
                <Form.Label>NIK *</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Input NIK yang menggantikan"
                />
                <Form.Control.Feedback>NIK sudah sesuai</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  NIK Tidak DItemukan.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation2">
                <Form.Label>Nama Pegawai</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Nama Pegawai"
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation3">
                <Form.Label>Jabatan</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation4">
                <Form.Label>Unit Kerja</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Unit - Nama Unit"
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation5">
                <Form.Label>User ID Backup</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="NIK - BKP"
                />
              </Form.Group>
              <Button type="submit" hidden>
                Submit form
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card
          border="secondary"
          style={{ width: "100%", height: "auto" }}
          className="me-3"
        >
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group md="4" controlId="validation1">
                <Form.Label>NIK *</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Input NIK yang menggantikan"
                />
                <Form.Control.Feedback>NIK sudah sesuai</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  NIK Tidak DItemukan.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation2">
                <Form.Label>Nama Pegawai</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Nama Pegawai"
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation3">
                <Form.Label>Jabatan</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation4">
                <Form.Label>Unit Kerja</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Unit - Nama Unit"
                />
              </Form.Group>
              <Form.Group controlId="validation5">
                <Form.Label>Durasi Backup (Hari)</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="date"
                  placeholder="Lama Backup dalam hitungan hari"
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationDate1">
                  <Form.Label>Tanggal Mulai</Form.Label>
                  <Form.Control required type="date" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationDate2">
                  <Form.Label>Tanggal Akhir</Form.Label>
                  <Form.Control required type="date" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group controlId="validation6">
                <Form.Label>Keterangan Backup</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Alasan pegawai digantikan"
                />
              </Form.Group>
              <Button type="submit" hidden>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="saveButton mb-3">
        <button className="mt-3 btn-color mx-1" type="submit">Simpan</button>
        <button className="mt-3 btn-color-cancel mx-3" type="button">Batal</button>
      </div>
    </div>
  );
}

export default RegisterBackup;
