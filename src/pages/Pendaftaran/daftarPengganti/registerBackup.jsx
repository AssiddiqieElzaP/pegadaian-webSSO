import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Header from "../../../component/navbar/header";
import axios from "axios";
import SidebarMenu from "../../../component/sidebar/sidebar";

function RegisterBackup() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const [data, setData] = useState({
    nik: "",
    uid_bkp: "",
    name: "",
    jabatan: "",
    unit_kerja: "",
    nama_pegawai: "",
    backup_id: "",
    kode_jabatan: "",
    kode_unit_kerja: "",
  });

  const [replace, setReplace] = useState({
    nik: "",
    nama_pegawai: "",
    kode_jabatan: "",
    jabatan: "",
    kode_unit_kerja: "",
    unit_kerja: "",
    durasi_backup: "",
    tanggal_mulai: "",
    tanggal_akhir: "",
    keterangan: "",
    user_need_backup_id: "",
  });

  const handleReplace = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        axios
          .post(
            "http://10.87.10.123:8080/api/v1/change-backup/nik-user-backup",
            {
              nik: replace.nik,
            }
          )
          .then((res) => {
            console.log(res.data);
            setReplace({
              nik: res.data.data.nik,
              nama_pegawai: res.data.data.nama_pegawai,
              jabatan: res.data.data.jabatan,
              unit_kerja: res.data.data.unit_kerja,
              kode_jabatan: res.data.data.kode_jabatan,
              kode_unit_kerja: res.data.data.kode_unit_kerja,
              tanggal_mulai: res.data.data.tanggal_mulai,
              tanggal_akhir: res.data.data.tanggal_akhir,
              keterangan: res.data.data.keterangan,
              durasi_backup: res.data.data.durasi_backup,
              user_need_backup_id: res.data.data.user_need_backup_id,
            });
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        axios
          .post("http://10.87.10.123:8080/api/v1/change-backup/id-backup", {
            uid_bkp: data.uid_bkp,
          })
          .then((res) => {
            console.log(res.data);
            setData({
              backup_id: res.data.data.backup_id,
              nik: res.data.data.nik,
              nama_pegawai: res.data.data.nama_pegawai,
              jabatan: res.data.data.jabatan,
              unit_kerja: res.data.data.unit_kerja,
              user_id_bkp: res.data.data.user_id_bkp,
              kode_jabatan: res.data.data.kode_jabatan,
              kode_unit_kerja: res.data.data.kode_unit_kerja,
            });
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const saveData = (e) => {
    e.preventDefault();

    const insert = {
      backup_id: data.backup_id,
      user_need_backup_id: replace.user_need_backup_id,
      created_by: localStorage.getItem("name"),
      updated_by: localStorage.getItem("name"),
    };

    axios
      .post("http://10.87.10.123:8080/api/v1/change-backup/save", insert)
      .then((res) => {
        alert(res.data.message);
      });
  };

  return (
    <>
      <div className="d-flex">
        {/* <SidebarMenu /> */}
        <Container className="m-0 p-0">
          {/* <Header heading="PENDAFTARAN USER PENGGANTI" /> */}
          <div className="mt-2 mb-0">
            <div className="px-3 d-flex">
              <Card
                border="secondary"
                style={{ width: "100%", height: "auto" }}
                className="me-3"
              >
                <Card.Body>
                  <Form>
                    <Form.Group md="4" controlid="id">
                      <Form.Label className="mb-0">NIK *</Form.Label>
                      <Form.Control
                        name="nik"
                        onChange={(e) =>
                          setData({ ...data, uid_bkp: e.target.value })
                        }
                        onKeyDown={handleKey}
                        required
                        type="text"
                        placeholder="Input NIK yang menggantikan"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                      />
                    </Form.Group>
                    <Form.Control.Feedback>
                      NIK sudah sesuai
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      NIK Tidak DItemukan.
                    </Form.Control.Feedback>
                    <Form.Group md="4" controlId="validation2">
                      <Form.Label className="mb-0">Nama Pegawai</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="Nama Pegawai"
                        className="mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          data.nama_pegawai !== "" ? data.nama_pegawai : ""
                        }
                      />
                    </Form.Group>
                    <Form.Group md="4" controlId="validation3">
                      <Form.Label className="mb-0">Jabatan</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="Kode Jabatan - Nama Jabatan"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          replace.kode_jabatan + " - " + replace.jabatan !== ""
                            ? replace.kode_jabatan + " - " + replace.jabatan
                            : ""
                        }
                      />
                    </Form.Group>
                    <Form.Group md="4" controlId="validation4">
                      <Form.Label className="mb-0">Unit Kerja</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="Kode Unit - Nama Unit"
                        className="mt-0 mb-3"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          data.kode_unit_kerja + " - " + data.unit_kerja !== ""
                            ? data.kode_unit_kerja + " - " + data.unit_kerja
                            : ""
                        }
                      />
                    </Form.Group>
                    <Form.Group md="4" as={Col} controlId="validation5">
                      <Form.Label className="mb-0">User ID Backup</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="NIK"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={data.user_id_bkp !== "" ? data.user_id_bkp : ""}
                      />
                      <InputGroup.Text id="inputGroupPrepend">
                        -BKP
                      </InputGroup.Text>
                    </Form.Group>
                    <Button type="btn" hidden>
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
                  <Form>
                    <Form.Group md="4" controlid="nik">
                      <Form.Label className="mb-0">NIK *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Input NIK yang menggantikan"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        name="nik"
                        onChange={(e) =>
                          setReplace({ ...replace, nik: e.target.value })
                        }
                        onKeyDown={handleReplace}
                      />
                      <Form.Control.Feedback>
                        NIK sudah sesuai
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        NIK Tidak DItemukan.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="4" controlId="validation2">
                      <Form.Label className="mb-0">Nama Pegawai</Form.Label>
                      <Form.Control
                        name="name"
                        value={
                          replace.nama_pegawai !== ""
                            ? replace.nama_pegawai
                            : ""
                        }
                        required
                        disabled
                        type="text"
                        placeholder="Nama Pegawai"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                      />
                    </Form.Group>
                    <Form.Group md="4" controlId="validation3">
                      <Form.Label className="mb-0">Jabatan</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="Kode Jabatan - Nama Jabatan"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          replace.nama_pegawai !== ""
                            ? replace.nama_pegawai
                            : ""
                        }
                      />
                    </Form.Group>
                    <Form.Group md="4" controlId="validation4">
                      <Form.Label className="mb-0">Unit Kerja</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="Kode Unit - Nama Unit"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          replace.kode_unit_kerja +
                            " - " +
                            replace.unit_kerja !==
                          ""
                            ? replace.kode_unit_kerja +
                              " - " +
                              replace.unit_kerja
                            : ""
                        }
                      />
                    </Form.Group>
                    <Form.Group controlId="validation5">
                      <Form.Label className="mb-0">
                        Durasi Backup (Hari)
                      </Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="number"
                        placeholder="Lama Backup dalam hitungan hari"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          replace.durasi_backup !== ""
                            ? replace.durasi_backup
                            : ""
                        }
                      />
                    </Form.Group>
                    <Row className="mb-2">
                      <Form.Group as={Col} controlId="validationDate1">
                        <Form.Label className="mb-0">Tanggal Mulai</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          style={{ height: "30px", fontSize: "14px" }}
                          value={
                            replace.tanggal_mulai !== ""
                              ? replace.tanggal_mulai
                              : ""
                          }
                          disabled
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} controlId="validationDate2">
                        <Form.Label className="mb-0">Tanggal Akhir</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          style={{ height: "30px", fontSize: "14px" }}
                          value={
                            replace.tanggal_akhir !== ""
                              ? replace.tanggal_akhir
                              : ""
                          }
                          disabled
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group controlId="validation6">
                      <Form.Label className="mb-0">
                        Keterangan Backup
                      </Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        placeholder="Alasan pegawai digantikan"
                        className="mt-0 mb-2"
                        style={{ height: "30px", fontSize: "14px" }}
                        value={
                          replace.keterangan !== "" ? replace.keterangan : ""
                        }
                      />
                    </Form.Group>
                    <Button type="button" hidden>
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
            <div className="saveButton mb-2">
              <button
                className="mt-3 btn-color mx-3"
                onClick={(e) => saveData(e)}
                type="submit"
              >
                Simpan
              </button>
              <button className="mt-2 btn-color-cancel mx-3" type="button">
                Batal
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default RegisterBackup;
