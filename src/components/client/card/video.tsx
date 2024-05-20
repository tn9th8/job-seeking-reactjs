import React from "react";
import styles from "styles/video.module.scss";

const ExciteITSection = () => {
  return (
    <section
      className={`${styles["excite-it-container"]} ${styles["d-lg-flex"]}`}
    >
      <img
        className={`${styles["d-none"]} ${styles["d-lg-block"]} ${styles["excite-it-bg-image"]}`}
        src="https://itviec.com/assets/employer_landing/excite-it-desktop-fe99e865fc04408bfbd6498fbdce1ef69751457aa611844494747812c6479aa4.svg"
        alt="Excite IT Background Image"
      />
      <div
        className={`${styles["icontainer"]} ${styles["ipx-5"]} ${styles["d-lg-flex"]} ${styles["align-items-center"]} ${styles["z-2"]} ${styles["ipt-16"]} ${styles["ipt-lg-0"]} ${styles["w-100"]} ${styles["excite-it-content-wrapper"]} ${styles["imy-lg-30"]}`}
      >
        <div
          className={`${styles["excite-content"]} ${styles["text-it-white"]}`}
        >
          <div className={`${styles["lg-title"]} ${styles["fw-700"]}`}>
            Sẵn sàng Hứng Khởi ngành IT tại Việt Nam với Tuyển Dụng "Chất"
          </div>
          <p className={`${styles["paragraph"]} ${styles["ipt-6"]}`}>
            Khởi đầu từ năm 2013, sứ mệnh của ITviec chính là luôn hướng đến
            tuyển dụng "chất" ngành IT. Chúng tôi giúp nhân sự ngành IT thăng
            tiến sự nghiệp, giúp doanh nghiệp tìm được những ứng viên tuyệt vời.
            Hãy cùng chúng tôi hứng khởi ngành IT tại Việt Nam với tuyển dụng
            "Chất"!
          </p>
        </div>
        <div
          className={`${styles["video-box"]} ${styles["excite-video"]} ${styles["ips-lg-12"]} ${styles["ipt-lg-0"]} ${styles["imt-12"]} ${styles["imt-lg-0"]}`}
        >
          <iframe
            title="Excite IT Video"
            frameBorder="0"
            src="https://www.youtube.com/embed/iRL0gIHFAgQ"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ExciteITSection;
