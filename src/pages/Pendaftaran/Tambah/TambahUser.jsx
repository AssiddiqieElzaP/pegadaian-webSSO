import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import { addBusinessDays, isWeekend } from "date-fns";
import "../../../App.css";
import FooterWeb from "../../../component/footer/FooterWeb";
import Confirmasi from "../../../component/modal/Confirmasi";
import { toast } from "react-toastify";

function TambahUser() {
  //Get Data NIK etc
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  // const [alertMessage, setAlertMessage] = useState("");
  const [validated, setValidated] = useState(false);
  // const [mygroup, setMygroup] = useState({});
  const [formDisabledDuration, setFormDisabledDuration] = useState({});
  const [formDisabled, setFormDisabled] = useState({});
  const formRef = useRef(null);
  const [data, setData] = useState({
    nik: "",
    nama_pegawai: "",
    jabatan:"",
    kode_jabatan:"",
    unit_kerja:"",
    user_id_bck:"",
    kode_grade:"",
  });
  const [unit, setUnit] = useState({
    work_unit_id: "",
    kode_work_unit: "",
    nama_work_unit: "",
  });

  const [jabatan,setJabatan] =useState({
    jabtan_id:"",
    nama_jabatan:"",

  })
  const [formData, setFormData] = useState({
    description: "",
    nik: "",
  });

  const pilihUnitKerja = (event) => {
    const selectedValue = event.target.value;
    setSelectedUnit(selectedValue);
    // Click(selectedValue);
  };

  const pilihGroupKerja = (event) => {
    const selectedValue = event.target.value;
    setSelectedGroup(selectedValue);
  };

  // const Click = async (value) => {
  //   if (value == null) {
  //     return <option>Kode Group - Nama Group</option>;
  //   } else {
  //     try {
  //       await axios
  //         .get(`${process.env.REACT_APP_BASE_URL}/add-backup/group?id=${value}`)
  //         .then((res) => {
  //           const testgroup = res.data;
  //           setMygroup(testgroup);
  //           // console.log(testgroup)
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };
  
  const handleKey = async (Event) => {
    if (Event.key === "Enter") {
      try {
        await axios
          .post(`${process.env.REACT_APP_BASE_URL}/add-backup/nik?kd_kantor=12321`, {
            nik: data.nik,
          
          })

          .then((res) => {
            setData({
              user_id: res.data.data.user_id,
              nik: res.data.data.nik,
              nama_pegawai: res.data.data.nama_pegawai,
              jabatan: res.data.data.jabatan,
              kode_jabatan: res.data.data.kode_jabatan,
              unit_kerja: res.data.data.unit_kerja,
              kode_unit_kerja: res.data.data.kode_unit_kerja,
              user_id_bck: res.data.data.user_id_bck,
              kode_grade : res.data.data.kode_grade,
            });
            setFormDisabled(false);
            // console.log(res.data);
            // toast.success("Nik Terdaftar", {
            //   position: toast.POSITION.TOP_CENTER,
            //   autoClose: 3000,
            //   hideProgressBar: true,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            // });
            console.log("data Succes");
          });
      } catch (err) {
        // console.error(error);
        console.log("data failed");
        toast.error("NIK Invalid", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    }
  };

  const handleDecription = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const insert = {
      user_pengaju_id: data.user_id,
      username_delegasi: data.user_id_bck,
      work_unit_id: (selectedUnit),
      jabatan_id: (selectedGroup),
      duration: (selectedDate),
      start_date: dateStart,
      end_date: dateEnd,
      description: formData.description,
      created_by: "P94005",
      // created_by: localStorage.getItem("user_name"),
      updated_by: "P94005",
      // updated_by: localStorage.getItem("user_name"),
    };
    // console.log('data tidak ada',validation())
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/add-backup/save?kd_jabatan=PTKAdmin`,
        insert
      );
      // setAlertMessage("Data tersimpan");
      console.log("data tersimpan", response.data);
      setShowConfirmation(false);
      handleClear();
      toast.success("Data Tersimpan", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      // Optional: Handle the server response
    } catch (error) {
      setShowConfirmation(false);
      toast.error("NIK sudah diajukan", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
    // Tutup dialog konfirmasi
  };

  const handleForm = (e) => {
    e.preventDefault();

    const form = formRef.current;

    if (form.checkValidity()) {
      setShowConfirmation(true);
      form.reset();
    } else {
      form.classList.add("was-validated");
      toast.error("Silahkan isi data pengajuan terlebih dahulu", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        // hideProgressBar: true,
        // closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  // setting date
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleChangeDurasi = (event) => {
    const duration = event.target.value;
    setSelectedDate(duration);
    calculateEndDate(dateStart, duration);
  };

  
  // setting duration
  const calculateEndDate = (startDate, duration) => {
    const durationInDays = parseInt(duration);
    if (startDate && !isNaN(durationInDays)) {
      const calculatedEndDate = addBusinessDays(startDate, durationInDays);
      setDateEnd(calculatedEndDate);
    } else {
      setDateEnd(null);
    }
  };

  const handleStartDateChange = (date) => {
    setDateStart(date);
    calculateEndDate(dateStart, selectedDate);
    setFormDisabledDuration(false);
  };

  // bersihkan field
  const handleClear = () => {
    setData({
      user_id: "",
      nik: "",
      nama_pegawai: "",
      jabatan: "",
      kode_jabatan: "",
      user_id_bck: "",
    });
    setSelectedUnit("");
    setSelectedGroup("");
    setDateStart("");
    setDateEnd("");
    setSelectedDate("");
    setFormData({
      description: "",
    });
    setValidated("");
  };

  //Fetch WorkUnit
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_BASE_URL}/add-backup/work-unit?parent_work_unit=00002`)
          .then((res) => {
            const test = res.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setUnit(test);
            // console.log(test)
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Fetch jabatan
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_BASE_URL}/add-backup/group?work_unit=00017`)
          .then((res) => {
            const dataJabatan = res.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setJabatan(dataJabatan);
            // console.log(test)
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container className="mx-auto p-0" id="defaultActiveKey">
        <Card className="mx-3 my-2" border="dark">
          <Form
            className="mx-3 py-3 px-3"
            noValidate
            validated={validated}
            ref={formRef}
            onSubmit={handleSave}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">
                  Nik Pegawai<span className="color-span">*</span>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Masukkan Nik Pegawai lalu tekan enter"
                  onKeyDown={handleKey}
                  name="nik"
                  onChange={(e) => setData({ ...data, nik: e.target.value })}
                  value={data.nik}
                />
                <Form.Control.Feedback type="invalid">
                  Field tidak boleh kosong
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlid="validationCustom02">
                <Row>
                  <Col>
                    <Form.Label className="mb-0 ms-1">
                      Unit Kerja Backup <span className="color-span">*</span>
                    </Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      value={selectedUnit}
                      onChange={pilihUnitKerja}
                      required
                      disabled={formDisabled}
                    >
                      <option value="">Kode Unit - Nama Unit</option>
                      {unit?.data?.map((list) => (
                        <option
                          key={list.kode_work_unit}
                          value={list.kode_work_unit}
                          onChange={pilihGroupKerja}
                        >
                          {list.kode_work_unit}-{list.nama_work_unit}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Field tidak boleh kosong
                    </Form.Control.Feedback>
                  </Col>

                  <Col>
                    <Form.Label className="mb-0 ms-1">
                       Jabatan Backup <span className="color-span">*</span>
                    </Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      value={selectedGroup}
                      onChange={pilihGroupKerja}
                      required
                      disabled={formDisabled}
                    >
                      <option value="">Kode Jabatan - Nama Jabatan</option>

                      {jabatan?.data?.map((g) => (
                        <option name="group_id" key={g.kode_jabatan} value={g.kode_jabatan}>
                          {g.nama_jabatan}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Field tidak boleh kosong
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Pegawai"
                  disabled
                  name="nama_pegawai"
                  value={data.nama_pegawai !== "" ? data.nama_pegawai : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">
                  Keterangan Backup <span className="color-span">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alasan Backup"
                  name="description"
                  value={formData.description}
                  onChange={handleDecription}
                  required
                  disabled={formDisabled}
                />
                <Form.Control.Feedback type="invalid">
                  Field tidak boleh kosong
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">Unit Kerja</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Unit - Unit Kerja"
                  disabled
                  name="kode_unit"
                  value={
                    data.kode_unit_kerja && data.unit_kerja !== ""
                      ? data.kode_unit_kerja && data.unit_kerja
                      : ""
                  }
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlid="validationCustom01">
                <Row>
                  <Col>
                    <Form.Label className="mb-0 ms-1">
                      Tanggal Mulai <span className="color-span">*</span>
                    </Form.Label>
                    <DatePicker
                      name="start_date"
                      selected={dateStart}
                      filterDate={(date) => !isWeekend(date)}
                      dateFormat="dd MMM yyyy"
                      minDate={new Date()}
                      onChange={handleStartDateChange}
                      className={"form-control form-control-sm"}
                      required
                      disabled={formDisabled}
                    />
                  </Col>
                  <Col>
                    <Form.Label className="mb-0 ms-1">Tanggal Akhir</Form.Label>
                    <DatePicker
                      name="end_date"
                      selected={dateEnd}
                      filterDate={(date) => !isWeekend(date)}
                      dateFormat="dd MMM yyyy"
                      className={"form-control form-control-sm"}
                      value={dateEnd}
                      disabled
                      placeholderText="pilih durasi"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">Jabatan </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                  disabled
                  value={
                    data.kode_jabatan && data.jabatan !== ""
                      ? data.kode_jabatan && data.jabatan
                      : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">
                  Durasi Backup <span className="color-span">*</span>
                </Form.Label>
                <Form.Select
                  style={{ fontSize: "12px" }}
                  onChange={handleChangeDurasi}
                  value={selectedDate}
                  name="duration"
                  disabled={formDisabledDuration}
                  required
                >
                  <option value="">Pilih lama hari backup</option>
                  <option value="0">1 Hari</option>
                  <option value="1">2 Hari</option>
                  <option value="2">3 Hari</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Field Tidak boleh Kosong
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">User ID Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Generate NIKBKP"
                  disabled
                  value={data.user_id_bck !== "" ? data.user_id_bck : ""}
                  name="uid_bkp"
                />
              </Form.Group>
              <Form.Group as={Col}></Form.Group>
            </Row>
          </Form>
          <div className="d-flex  mb-3 ">
            <button
              className="btn-color me-2 group_button"
              onClick={handleForm}
              disabled={formDisabled}
              style={
                formDisabled
                  ? {
                      backgroundColor: "gray",
                      color: "white",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              Simpan
            </button>
            <button className="btn-color me-5" onClick={handleClear}>
              Batal
            </button>
          </div>
          <Confirmasi
            show={showConfirmation}
            onClose={() => setShowConfirmation(false)}
            onSave={handleSave}
          />
        </Card>
        {/* <FooterWeb /> */}
      </Container>
    </>
  );
}

export default TambahUser;
