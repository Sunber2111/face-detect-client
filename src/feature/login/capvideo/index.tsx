import React, { useRef } from "react";
import Webcam from "react-webcam";
import "./styles.scss";
import detectAPI from "app/api/detect";
import { showError, showSuccess } from "app/notification/notify";
import { IErrorFromServer } from "app/models/error";
import Alert from "@material-ui/lab/Alert";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { verifyLoginSuccess } from "../loginSlice";
import { history } from "index";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

const videoConstraints = {
  width: 500,
  height: 400,
  facingMode: "user",
};

const CapVideo = () => {
  const webcamRef = useRef(null);

  const token = useSelector((s: RootState) => s.login.userId);

  const dispatch = useDispatch();

  const capture = React.useCallback(() => {
    const imageSrc = (webcamRef as any).current.getScreenshot().split(",")[1];

    detectAPI
      .detectFace(imageSrc, token)
      .then((res) => {
        showSuccess("Đăng Nhập Thành Công", 2000);
        dispatch(verifyLoginSuccess(res));
        history.push("/trangchu");
      })
      .catch((err) => {
        let er = err as IErrorFromServer;
        showError(er.description,2800);
      });
  }, [webcamRef]);

  return (
    <div className="video-cam">
      <div className="label">
        <Alert variant="outlined" severity="info">
          Vui lòng xác thực để chuyển sang trang tiếp theo
        </Alert>
      </div>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/png"
        width={400}
        videoConstraints={videoConstraints}
      />
      <div>
        <Button onClick={capture} fullWidth={false}>
          Xác Thực
        </Button>
      </div>
    </div>
  );
};

export default CapVideo;
