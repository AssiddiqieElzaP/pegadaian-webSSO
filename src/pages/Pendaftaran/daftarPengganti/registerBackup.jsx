import { useState } from "react";
import { Card, Container, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Header from "../../../component/navbar/header";

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
    <Container className="m-0 p-0">
      <Header heading="PENDAFTARAN USER PENGGANTI"/>
    <div className="mt-2 mb-0">
      <div className="d-flex  justify-content-evenly">
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
                <Form.Label className="mb-0">NIK *</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Input NIK yang menggantikan"
                  className="mt-0 mb-2" style={{height:'30px', fontSize:'14px'}}
                />
                <Form.Control.Feedback>NIK sudah sesuai</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  NIK Tidak DItemukan.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation2">
                <Form.Label className="mb-0">Nama Pegawai</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Nama Pegawai"
                  className="mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation3">
                <Form.Label className="mb-0">Jabatan</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation4">
                <Form.Label className="mb-0">Unit Kerja</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Unit - Nama Unit"
                  className="mt-0 mb-3"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Form.Group md="4" as={Col} controlId="validation5">
                <Form.Label className="mb-0">User ID Backup</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="NIK"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
                <InputGroup.Text id="inputGroupPrepend">
                  -BKP
                </InputGroup.Text>
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
                <Form.Label  className="mb-0">NIK *</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Input NIK yang menggantikan"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
                <Form.Control.Feedback>NIK sudah sesuai</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  NIK Tidak DItemukan.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation2">
                <Form.Label className="mb-0">Nama Pegawai</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Nama Pegawai"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation3">
                <Form.Label className="mb-0">Jabatan</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Form.Group md="4" controlId="validation4">
                <Form.Label className="mb-0">Unit Kerja</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Kode Unit - Nama Unit"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Form.Group controlId="validation5">
                <Form.Label className="mb-0">Durasi Backup (Hari)</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="date"
                  placeholder="Lama Backup dalam hitungan hari"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Row className="mb-2">
                <Form.Group as={Col} controlId="validationDate1">
                  <Form.Label className="mb-0">Tanggal Mulai</Form.Label>
                  <Form.Control required type="date" style={{height:'30px', fontSize:'14px'}}/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationDate2">
                  <Form.Label className="mb-0">Tanggal Akhir</Form.Label>
                  <Form.Control required type="date"style={{height:'30px', fontSize:'14px'}} />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group controlId="validation6">
                <Form.Label className="mb-0">Keterangan Backup</Form.Label>
                <Form.Control
                  required
                  disabled
                  type="text"
                  placeholder="Alasan pegawai digantikan"
                  className="mt-0 mb-2"style={{height:'30px', fontSize:'14px'}}
                />
              </Form.Group>
              <Button type="submit" hidden>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="saveButton mb-2">
        <button className="mt-2 btn-color mx-1" type="submit">Simpan</button>
        <button className="mt-2 btn-color-cancel mx-3" type="button">Batal</button>
      </div>
    </div>
    </Container>
  );
}

export default RegisterBackup;
