import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import settingImg from "../../assets/img/setting.png";
import Sliders from "./Sliders";
import { ContentContainer, ImgContainer, Title, SubmitBtn } from "../UI/index";
import { useAuth } from "../../context/Auth-context";
import { api } from "../../api/api";
import swal from "sweetalert";

const Setting = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  const [coopStartDate, setCoopStartDate] = useState("");
  const [coopEndDate, setCoopEndDate] = useState("");
  const [coopHours, setCoopHours] = useState("");
  const [company, setCompany] = useState("");
  const [isCoop, setIsCoop] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [userStatusData, setUserStatusData] = useState([]);

  useEffect(() => {
    api
      .get("user_status/")
      .then((res) => setUserStatusData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const settingHandler = async () => {
    const hasId = userStatusData.find((el) => el.uid === currentUser.uid);
    if (hasId) {
      if (coopStartDate && coopEndDate && coopHours && company && isCoop) {
        api
          .post(`user_status/${currentUser.uid}/`, {
            coop_start_date: coopStartDate,
            coop_end_date: coopEndDate,
            coop_hours: parseInt(coopHours),
          })
          .then(() => {
            api
              .post("company/", {
                name: company,
                hire_type: isCoop,
                user: currentUser.uid,
              })
              .then(() => {
                swal("Your info is updated");
                setDisabled(true);
                history.push("/input");
              })
              .catch((err) => {
                swal(err);
              });
          })
          .catch((err) => {
            swal(err);
          });
      } else if (coopStartDate && coopEndDate && coopHours) {
        api
          .post(`user_status/${currentUser.uid}/`, {
            coop_start_date: coopStartDate,
            coop_end_date: coopEndDate,
            coop_hours: parseInt(coopHours),
          })
          .then(() => {
            swal("Your co-op info is updated!");
            history.push("/input");
          })
          .catch((err) => {
            swal(err);
          });
      } else if (company && isCoop) {
        api
          .post("company/", {
            name: company,
            hire_type: isCoop,
            user: currentUser.uid,
          })
          .then(() => {
            swal("Your company info is updated!");
            setDisabled(true);
            history.push("/input");
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
      if (coopStartDate && coopEndDate && coopHours && company && isCoop) {
        api
          .post(`user_status/`, {
            uid: currentUser.uid,
            coop_start_date: coopStartDate,
            coop_end_date: coopEndDate,
            coop_hours: parseInt(coopHours),
          })
          .then(() => {
            api
              .post("company/", {
                name: company,
                hire_type: isCoop,
                user: currentUser.uid,
              })
              .then(() => {
                swal("Your info is registed!");
                setDisabled(true);
                history.push("/input");
              })
              .catch((err) => {
                swal(err);
              });
            history.push("/input");
          })
          .catch((err) => {
            swal(err);
          });
      } else if (coopStartDate && coopEndDate && coopHours) {
        api
          .post(`user_status/`, {
            uid: currentUser.uid,
            coop_start_date: coopStartDate,
            coop_end_date: coopEndDate,
            coop_hours: parseInt(coopHours),
          })
          .then(() => {
            swal("Your co-op info is registered!");
            history.push("/input");
          })
          .catch((err) => {
            swal(err);
          });
      } else if (company && isCoop) {
        api
          .post("company/", {
            name: company,
            hire_type: isCoop,
            user: currentUser.uid,
          })
          .then(() => {
            swal("Your company info is registered!");
            setDisabled(true);
            history.push("/input");
          })
          .catch((err) => {
            swal(err);
          });
      } else {
        swal({
          title: "Oops...",
          text: "Please fill out all the boxes.",
        });
      }
    }
    // setCoopStartDate("");
    // setCoopEndDate("");
    // setCoopHours("");
  };

  const onChangeCoopStartDate = (e) => {
    setCoopStartDate(e.target.value);
  };

  const onChangeCoopEndDate = (e) => {
    setCoopEndDate(e.target.value);
  };

  const onChangeCoopHours = (e) => {
    setCoopHours(e.target.value);
  };

  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const onChangeIsCoop = (e) => {
    setIsCoop(e.target.value);
  };

  return (
    <div id="setting" className="Home">
      <ImgContainer>
        <img className="Illust" src={settingImg} alt="setting" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Setting" />
        <Sliders
          onChangeCoopStartDate={onChangeCoopStartDate}
          onChangeCoopEndDate={onChangeCoopEndDate}
          onChangeCoopHours={onChangeCoopHours}
          onChangeCompany={onChangeCompany}
          onChangeIsCoop={onChangeIsCoop}
          disabled={disabled}
          coopStartDate={coopStartDate}
          coopEndDate={coopEndDate}
          coopHours={coopHours}
          curentValue={""}
        />
        <SubmitBtn onClick={settingHandler} button="Save" />
      </ContentContainer>
    </div>
  );
};

export default Setting;
