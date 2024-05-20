import React from 'react';
import styles from "styles/content2.module.scss"; 

function ITviecDifferentContainer() {
  return (
    <section className={`${styles['itviec-different-container']} ${styles['ipt-16']} ${styles['ipt-lg-30']} ${styles['ipx-5']} ${styles['ipx-lg-0']}`}>
      <div className={`${styles['text-center']}`}>
        <div className={`${styles['h1']} ${styles['lg-title']}`}>
          Điều gì tạo nên sự khác biệt ở ITJob?
        </div>
        <p className={`${styles['normal-text']} ${styles['paragraph']} ${styles['ipt-6']} ${styles['ipb-16']} ${styles['ipb-lg-0']}`}>
          ITJob là trang tuyển dụng và cơ sở dữ liệu hàng đầu về các chuyên gia IT tại Việt Nam.
        </p>
      </div>
      <div className={`${styles['d-lg-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['content-wrapper']} ${styles['ipb-20']} ${styles['ipt-lg-22']} ${styles['ipb-lg-30']} ${styles['ipx-lg-5']}`}>
        <div className={`${styles['content-box']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['position-relative']} ${styles['imt-4']} ${styles['imt-lg-0']} ${styles['bgwhite']} ${styles['border-radius-large']} ${styles['position-relative']}`}>
          <p className={`${styles['large-number']} ${styles['text-it-red']} ${styles['fw-700']}`}>10,000+</p>
          <p className={`${styles['normal-text']} ${styles['imt-2']}`}>
            Công ty và Doanh nghiệp IT
          </p>
          <img alt="first-hand" className={`${styles['position-absolute']}`} src="https://itviec.com/assets/employer_landing/first-hand-8f9978db44dfb1095793ff239fa072e94bfd1d74d7b62a875d7f69eba997b911.svg" />
        </div>
        <div className={`${styles['content-box']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['position-relative']} ${styles['imt-16']} ${styles['imt-lg-0']} ${styles['imx-lg-7']} ${styles['bgwhite']} ${styles['border-radius-large']} ${styles['position-relative']}`}>
          <p className={`${styles['large-number']} ${styles['text-it-red']} ${styles['fw-700']}`}>1,500,000+</p>
          <p className={`${styles['normal-text']} ${styles['imt-2']}`}>
            Hồ sơ đã gửi đến Nhà tuyển dụng
          </p>
          <img alt="second-hand" className={`${styles['position-absolute']}`} src="https://itviec.com/assets/employer_landing/second-hand-ef88cbd609f610ad98826b198a83feb349b8896a396f114c31721640592f6698.svg" />
        </div>
        <div className={`${styles['content-box']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['position-relative']} ${styles['imt-16']} ${styles['imt-lg-0']} ${styles['bgwhite']} ${styles['border-radius-large']} ${styles['position-relative']}`}>
          <p className={`${styles['large-number']} ${styles['text-it-red']} ${styles['fw-700']}`}>300,000+</p>
          <p className={`${styles['normal-text']} ${styles['imt-2']}`}>
            Hồ sơ Ứng viên kinh nghiệm cao
          </p>
          <img alt="third-hand" className={`${styles['position-absolute']}`} src="https://itviec.com/assets/employer_landing/third-hand-4285467762b4dd431d96729f58e05928f8b304f711ce0d683660648ebd294f36.svg" />
        </div>
      </div>
    </section>
  );
}

export default ITviecDifferentContainer;
