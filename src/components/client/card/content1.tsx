// HireTheBestITSection.js

import React from 'react';
import styles from "styles/client.module.scss";

const HireTheBestITSection = () => {
  return (
    <section className={`${styles['hire-the-best-it-container']} ${styles['bg-gradient-search']} ` }>
      <div className={` ${styles['icontainer']} ${styles['d-lg-flex']} ${styles['align-items-center']} ${styles['flex-row-reverse']} ${styles['ipx-5']} ${styles['ipy-16']} ${styles['ipy-lg-30']}`}>
      <div className={` ${styles['flex-1']} ${styles['ips-lg-20']}`}>
        <img alt="hide-the-best-it" className={`${styles['w-100']}`} src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png" />
      </div>

        <div className={`${styles['flex-1']} ${styles['text-it-white']} ${styles['left-box']}`}>
          <div className={styles['left-box-content']}>
            <h1 className={`${styles['lg-title']} ${styles['imt-8']} `}>
              Tuyển dụng Nhân tài IT tại Việt Nam cùng ITJob
            </h1>
            <p className={`${styles['normal-text']} ${styles['imt-6']} ${styles['imb-12']} ${styles['parapraph']}`}>
              Với hiểu biết sâu sắc về lĩnh vực IT và các kỹ năng chuyên môn, chúng tôi có thể giúp bạn tiếp cận và tuyển dụng những ứng viên IT tốt nhất.
            </p>
            <button className={` ${styles['ibtn']}  ${styles['ibtn-lg']}  ${styles['ibtn-primary']}  ${styles['contact-now-btn']}`} data-action="click->employer-landing#handleScrollToForm click->employer-landing#addDataLayerHeadline">
              Liên hệ ngay
            </button>
            <div className={` ${styles['row-container']} ${styles['flex-lg-row']} ${styles['align-items-center']} ${styles['imt-8']}`}>
              <p className={`${styles['text-dark-grey']} ${styles['ime-1']}`}>
                  Đã có tài khoản Khách hàng?
              </p>
              <a className={`${styles['text-it-white']} ${styles['text-decoration-underline']}`} target="_blank" href="/login">Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTheBestITSection;
