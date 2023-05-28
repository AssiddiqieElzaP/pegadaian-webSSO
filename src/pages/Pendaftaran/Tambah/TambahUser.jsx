import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import axios from "axios";

function TambahUser() {
  const [data, setData] = useState({
    nik: "",
  });

  const [unit, setUnit] = useState([
    {
      id: "",
      userId: "",
      title: "",
    },
  ]);

  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setUnit(res.data);
        // console.log(res)
      });
    } catch (error) {}
  }, []);

  const [replace, setReplace] = useState({
    unit_kerja: "",
    group_backup: "",
    keterangan: "",
    durasi_backup: "",
    tanggal_backup: "",
  });

  const handleKey = (Event) => {
    if (Event.key === "Enter") {
      if (validated()) {
        try {
          axios
            .post("http://172.168.102.91:8080/api/v1/backup/nik", {
              nik: data.nik,
            })
            .then((res) => {
              // console.log(res.data);
              setData({
                user_id: res.data.data.user_id,
                nik: res.data.data.nik,
                nama_pegawai: res.data.data.nama_pegawai,
                jabatan: res.data.data.jabatan,
                kode_jabatan: res.data.data.kode_jabatan,
                unit_kerja: res.data.data.unit_kerja,
                kode_unit_kerja: res.data.data.kode_unit_kerja,
                user_id_bkp: res.data.data.user_id_bkp,
              });
            });
        } catch (error) {
          console.error(error);
        }
      }
    }

    // setValidated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()) {
      setNik("");
      setKetBackup("");
      setTanggal("");
    }

    if (validated()) {
      console.log("test");
      // try {
        //     axios
        //     .post('http://10.87.10.123:8080/api/v1/welcome/login', {
        //         nik: values.nik,
        //         password: values.password,
        //     })
        //     .then((res) => {
        //         console.log((res.data));
        //         // input data create by
        //         localStorage.setItem("token", res.data.data.Token);
        //         localStorage.setItem("name", res.data.data.Name);
  
        //             navigate("/dashboard")
        //         })
  
        //     } catch (error) {
        //         console.error((error))
        //     }
        //   }
    }
  }

  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  const currentDate = new Date();
  const maxDate = new Date(currentDate.setDate(currentDate.getDate() + 2));

  const [nik, setNik] = useState();
  const [ketBackup, setKetBackup] = useState();
  const [tanggal, setTanggal] = useState();

  const [nikError, setNikError] = useState();
  const [ketBackupError, setKetBackupError] = useState();
  const [tanggalError, setTanggalError] = useState();

  const validateForm = () => {
    let isValid = true;

    if (!nik) {
      setNikError("*Nik Harus Diisi");
      isValid = false;
    } else {
      setNikError("");
    }

    if (!ketBackup) {
      setKetBackupError("*Keterangan Backup Harus Diisi");
      isValid = false;
    } else {
      setKetBackupError("");
    }

    if (!tanggal) {
      setTanggalError("*Tanggal Harus Diisi");
      isValid = false;
    } else {
      setTanggalError("");
    }

    return isValid;
  };

  function onChangeHandler(value) {
    setDateStart(value[0]);
    setDateEnd(value[1]);
  }

  // const validateForm = (values) => {
  //   const errors = {};
  //   if (!values.nik) {
  //     errors.nik = 'NIK is required';
  //   }

  //   return errors
  // }

  const validated = () => {
    let result = true;
    if (data.nik === "" || data.nik === null) {
      result = false;
      toast.warning("Nik Tidak Boleh Kosong");
    }
    if (
      replace.unit_kerja === "" ||
      (replace.unit_kerja === null && replace.group_backup === "") ||
      (replace.group_backup === null && replace.keterangan === "") ||
      (replace.keterangan === null && replace.durasi_backup === "") ||
      (replace.durasi_backup === null && replace.tanggal_backup === "") ||
      replace.tanggal_backup === null
    ) {
      result = false;
      toast.warning(
        "Data yang di masukkan belum lengkap, Silahkan lengkapi data!!"
      );
    }
    return result;
  };

  return (
    <>
      <Container className="mx-auto p-0">
        <Card className="mx-3 my-2" border="dark">
          <Form className="mx-3 py-3 px-3" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="nik">
                <Form.Label className="mb-0 ms-1">
                  Nik Pegawai<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="nik"
                  id="nik"
                  value={nik}
                  placeholder="Masukkan Nik Pegawai lalu tekan enter"
                  onKeyDown={handleKey}
                  onChange={(e) =>
                    setNik(e.target.value) +
                    setData({ ...data, nik: e.target.value })
                  }
                />
                <div style={{ marginLeft: "5px" }}>
                  {nikError && <div style={{ color: "red" }}>{nikError}</div>}
                </div>
              </Form.Group>
              <Form.Group as={Col}>
                <Row>
                  <Col>
                    <Form.Label className="mb-0 ms-1">
                      Unit Kerja Backup
                    </Form.Label>
                    <Form.Select style={{ fontSize: "12px" }}>
                      <option>Kode Group - Nama Group</option>
                      {unit.map((list) => (
                        <option key={list.id}>
                          {list.userId}-{list.title}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="mb-0 ms-1">Group Backup</Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      onChange={(e) =>
                        setReplace({
                          ...replace,
                          group_backup: e.target.value,
                        })
                      }
                    >
                      <option>Kode Group - Nama Group</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="nama">
                <Form.Label className="mb-0 ms-1">Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Pegawai"
                  disabled
                  name="nama"
                  value={data.nama_pegawai !== "" ? data.nama_pegawai : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlid="backup">
                <Form.Label className="mb-0 ms-1">Keterangan Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alasan Backup"
                  name="backup"
                  id="backup"
                  value={ketBackup}
                  onChange={(e) => setKetBackup(e.target.value)}
                />
                <div style={{ marginLeft: "5px" }}>
                  {ketBackupError && (
                    <div style={{ color: "red" }}>{ketBackupError}</div>
                  )}
                </div>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="unitkerja">
                <Form.Label className="mb-0 ms-1">Unit Kerja</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Unit - Unit Kerja"
                  disabled
                  value={
                    data.kode_unit_kerja + "-" + data.unit_kerja !== ""
                      ? data.kode_unit_kerja + "-" + data.unit_kerja
                      : ""
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="mb-0 ms-1">Durasi Backup</Form.Label>
                <Form.Select
                  style={{ fontSize: "12px" }}
                  onChange={(e) =>
                    setReplace({ ...replace, durasi_backup: e.target.value })
                  }
                >
                  <option>Pilih lama hari backup</option>
                  <option value="">1 Hari</option>
                  <option value="">2 Hari</option>
                  <option value="">3 Hari</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="jabatan">
                <Form.Label className="mb-0 ms-1">Jabatan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                  disabled
                  value={
                    data.kode_jabatan + "-" + data.jabatan !== ""
                      ? data.kode_jabatan + "-" + data.jabatan
                      : ""
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlid="tanggal">
                <Form.Label className="mb-0 ms-1">
                  Tanggal Mulai - Akhir Backup
                </Form.Label>
                <DatePicker
                  id="dateStartEnd"
                  selectsRange={true}
                  minDate={new Date()}
                  startDate={dateStart}
                  endDate={dateEnd}
                  onChange={onChangeHandler}
                  dateFormat="dd MMM yyyy"
                  className={"form-control form-control-sm"}
                  showDisabledMonthNavigation
                  maxDate={maxDate}
                  // onChange={(e)=>setReplace({...replace,tanggal_backup:e.target.value})}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="user_id">
                <Form.Label className="mb-0 ms-1">User ID Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Generate NIKBKP"
                  disabled
                  value={data.user_id_bkp !== "" ? data.user_id_bkp : ""}
                />
              </Form.Group>

              <Form.Group as={Col}></Form.Group>
            </Row>
          </Form>
          <div className="d-flex  mb-3">
            <button className="btn-color me-2" type="sumbit">
              Simpan
            </button>
            <button className="btn-color">Batal</button>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default TambahUser;
