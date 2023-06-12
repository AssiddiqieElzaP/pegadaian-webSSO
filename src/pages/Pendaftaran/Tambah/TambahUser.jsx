import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import { addBusinessDays, isWeekend } from "date-fns";
import "./TambahUser.css";
import FooterWeb from "../../../component/footer/FooterWeb";
import Confirmasi from "../../../component/modal/Confirmasi";

function TambahUser() {
  const [data, setData] = useState({
    nik: "",
  });
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [unit, setUnit] = useState({
    work_unit_id:"",
    kode_work_unit:"",
    nama_work_unit:"",
  });
  
  const [group, setGroup] = useState({
    group_id:"",
    kode_group:"",
    kode_jabatan:"",
  });


  const pilihUnitKerja = (event) => {
    const selectedValue = event.target.value;
    setSelectedUnit(selectedValue);   
  };

  const pilihGroupKerja = (event) => {
    const selectedValue = event.target.value;
    setSelectedGroup(selectedValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8080/api/v1/add-backup/work-unit")
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8080/api/v1/add-backup/group")
          .then((res) => {
            const test = res.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setGroup(test);
            console.log('datagroup',test)
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [mygroup, setMygroup] = useState({});
  const handleKey = (Event) => {
    if (Event.key === "Enter") {
      try {
        axios
          .post("http://localhost:8080/api/v1/add-backup/nik", {
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
        console.log("data Succes");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const [formData, setFormData] = useState({
    description: "",
    nik: "",
  });

  const handleDecription = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [validated, setValidated] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
 
  const handleSave = async () => {
      const insert = {
        user_id: data.user_id,
        uid_bkp: data.user_id_bkp,
        work_unit_id: parseInt(selectedUnit),
        group_id: parseInt(selectedGroup),
        duration: parseInt(selectedDate),
        start_date: dateStart,
        end_date: dateEnd,
        description: formData.description,
        created_by: localStorage.getItem("name"),
        updated_by: localStorage.getItem("name"),
       
      };
      // console.log('data tidak ada',validation())
      try {
        const response = await axios.post('http://localhost:8080/api/v1/add-backup/save', insert);
        setAlertMessage('Data tersimpan');
        console.log('data tersimpan',response.data); 
        setShowConfirmation(false)
        // Optional: Handle the server response
      } catch  {
        
        console.log('data tidak tersimpan');
        setShowConfirmation(false)
      }
   // Tutup dialog konfirmasi
  };


  const formRef = useRef(null);

  const handleForm=(e)=>{
    // e.preventDefault();
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   showConfirmation(false)
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // } else{
    //   setShowConfirmation(true)
    //   setValidated(true)
    // }
    e.preventDefault();

    const form = formRef.current;

    if (form.checkValidity()) {
      setShowConfirmation(true);
      form.reset();
      
    } else {
      form.classList.add('was-validated');
    }
    
  }

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
    const durationInDays = parseInt(duration, 10);
    if (startDate && !isNaN(durationInDays)) {
      const calculatedEndDate = addBusinessDays(startDate, durationInDays);
      setDateEnd(calculatedEndDate);
    } else {
      setDateEnd(null);
    }
  };

  //durasi disabled sebelum memilih tanggal
  const [formDisabled,setFormDisabled] = useState(true)

  const handleStartDateChange = (date) => {
    setDateStart(date);
    calculateEndDate(dateStart, selectedDate);
    setFormDisabled(false)
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  // bersihkan field

  const handleClear = () => {
    setData({
      user_id: "",
      nik: "",
      nama_pegawai: "",
      jabatan: "",
      kode_jabatan: "",
      unit_kerja: "",
      kode_unit_kerja: "",
      user_id_bkp: "",
    });
    setUnit({
      user_id: "",
      nik: "",
      nama_pegawai: "",
      jabatan: "",
      kode_jabatan: "",
      unit_kerja: "",
      kode_unit_kerja: "",
    });
    // setDateStart("");
    // setDateEnd("");
    // setSelectedGroup('');
    // setSelectedDate("");
    setFormData({
      description: "",
    });
    // setSelectedUnit('');
  };

  return (
    <>
      <Container className="mx-auto p-0" id="defaultActiveKey">
        <Card className="mx-3 my-2" border="dark">
          {alertMessage && <div>{alertMessage}</div>}
          <Form className="mx-3 py-3 px-3" noValidate validated={validated} ref={formRef} onSubmit={handleForm}>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">
                  Nik Pegawai<span>*</span>
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
                   Invalid NIK.
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlid="validationCustom02">
                <Row>
                  <Col>
                    <Form.Label className="mb-0 ms-1">
                      Unit Kerja Backup
                    </Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      value={selectedUnit}
                      onChange={pilihUnitKerja}
                      required
                    >
                      <option value="">Kode Group - Nama Group</option>
                      {unit?.data?.map((list) => (
                        <option
                          key={list.work_unit_id}
                          value={list.work_unit_id}
                        >
                          {list.kode_work_unit}-{list.nama_work_unit}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Field Tidak boleh Kosong
                    </Form.Control.Feedback>
                  </Col>

                  <Col>
                    <Form.Label className="mb-0 ms-1">Group Backup Baru</Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      value={selectedGroup}
                      onChange={pilihGroupKerja}
                      required
                    >
                      <option value="">Kode Group - Nama Group</option>

                      {group?.data?.map((g) => (
                        <option name="group_id" key={g.group_id} value={g.group_id}>
                          {g.kode_group}-{g.kode_jabatan}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Field Tidak boleh Kosong
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
                <Form.Label className="mb-0 ms-1">Keterangan Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alasan Backup"
                  name="description"
                  value={formData.description}
                  onChange={handleDecription}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Harus diisi.
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
                    <Form.Label className="mb-0 ms-1">Tanggal Mulai</Form.Label>
                    <DatePicker
                      name="start_date"
                      selected={dateStart}
                      filterDate={(date) => !isWeekend(date)}
                      dateFormat="dd MMM yyyy"
                      minDate={new Date()}
                      onChange={handleStartDateChange}
                      className={"form-control form-control-sm"}
                      required
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
                      value={dateEnd ? dateEnd.toDateString() : ""}
                      disabled
                      placeholderText="pilih durasi"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="validationCustom01">
                <Form.Label className="mb-0 ms-1">Jabatan</Form.Label>
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
                <Form.Label className="mb-0 ms-1">Durasi Backup</Form.Label>
                <Form.Select
                  style={{ fontSize: "12px" }}
                  onChange={handleChangeDurasi}
                  value={selectedDate}
                  name="duration"
                  disabled={formDisabled}
                  required
                >
                  <option value="">Pilih Tanggal Mulai</option>
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
                  value={data.user_id_bkp !== "" ? data.user_id_bkp : ""}
                  name="uid_bkp"
                />
              </Form.Group>
              <Form.Group as={Col}></Form.Group>
            </Row>
            <div className="d-flex  mb-3 " >
            <button className="btn-color me-2 group_button" type="submit">
              Simpan
            </button>
            <button className="btn-color me-5" onClick={handleClear}>
              Batal
            </button>
          </div>
          </Form>
          
           {/* Komponen Dialog Konfirmasi */}
      <Confirmasi
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onSave={handleSave}
      />
        </Card>
        <FooterWeb />
      </Container>
    </>
  );
}

export default TambahUser;
