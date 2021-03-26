import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import inputImg from "../../assets/img/input.png";
import {
  ContentContainer,
  ImgContainer,
  Title,
  InputTab,
  SubmitBtn,
} from "../UI/index";
import swal from "sweetalert";

const Input = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  const [companyName, setCompanyName] = useState("");
  const [daysWork, setDaysWork] = useState("");
  const [hoursWork, setHoursWork] = useState("");
  const [comanyData, setCompanyData] = useState([]);

  useEffect(() => {
    api
      .get("company/")
      .then((res) => setCompanyData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const settingHandler = async () => {
    const indexCompanyName = comanyData.findIndex(
      (el) => el.name === companyName
    );
    if (!(indexCompanyName === -1)) {
      if (companyName && daysWork && hoursWork) {
        api
          .post(`company/${comanyData[indexCompanyName]["id"]}/`, {
            name: companyName,
            working_time: parseInt(hoursWork),
            working_days: parseInt(daysWork),
          })
          .then(() => {
            swal("Input data is updated!");
            history.push("/user");
          })
          .catch((err) => {
            swal(err);
          });
      } else {
        swal({
          title: "Oops...",
          text: "Please fill out.",
        });
      }
    } else {
      swal({
        title: "Oops...",
        text: "Input company doesn't exist",
      });
    }
    // setCompanyName("");
    // setDaysWork("");
    // setHoursWork("");
  };

  const onChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const onChangeDaysWork = (e) => {
    setDaysWork(e.target.value);
  };

  const onChangeHourswork = (e) => {
    setHoursWork(e.target.value);
  };

  return (
    <div id="input" className="Home">
      <ImgContainer>
        <img className="Illust" src={inputImg} alt="contact" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Input" />
        <InputTab
          id="company"
          type="text"
          placeholder="Company Name"
          onChange={onChangeCompanyName}
          value={companyName}
        />
        <InputTab
          id="days"
          type="number"
          placeholder="Days of your worked"
          onChange={onChangeDaysWork}
          value={daysWork}
        />
        <InputTab
          id="hours"
          type="number"
          step="0.25"
          placeholder="Hours of your worked"
          onChange={onChangeHourswork}
          value={hoursWork}
        />
        <SubmitBtn onClick={settingHandler} button="Submit" />
      </ContentContainer>
    </div>
  );
};

export default Input;
