import React from 'react';
import styles from "styles/content3.module.scss";

const HighValueServices = () => {
  return (
    <section className={`${styles['high-value-services-container']} ${styles['ipx-5']} ${styles['ipy-16']} ${styles['ipy-lg-30']}`}>
      <div className={`${styles['icontainer']}`}>
        <div className={`${styles['h1']} ${styles['lg-title']} ${styles['textitwhite']} ${styles['text-center']} `}>
          Dịch vụ chất lượng cao dành cho Nhà tuyển dụng IT
        </div>

        <div className={`${styles['bgwhite']} ${styles['flex-box-wrapper']} ${styles['ipy-6']} ${styles['ips-lg-12']} ${styles['ipe-lg-12']} ${styles['mt-4']} ${styles['imt-lg-12']} ${styles['ipx-6']} ${styles['ipt-lg-12']} ${styles['ipb-lg-13']}`}>
          <div className={`${styles['d-lg-flex']} ${styles['flex-row-reverse']} ${styles['align-items-lg-center']}`}>
            <div className={`${styles['d-lg-flex']} ${styles['justify-content-center']} ${styles['flex-1']}`}>
              <img className={`${styles['w-100']} ${styles['large-pic']}`} src="https://itviec.com/assets/employer_landing/job-posting-15-30ceaa97f37fd97afb7dabc2c5ef6fe5702b78faf0c3da8aedb5d7d64b274a54.png" alt="Job Posting" />
            </div>
            <div className={`${styles['flex-1']}`}>
              <div className={`${styles['h1']} ${styles['ipy-4']} ${styles['ipy-lg-0']}`}>
                Đăng tin tuyển dụng
              </div>
              <p className={`${styles['normal-text']} ${styles['parapraph']} ${styles['text-rich-grey']} ${styles['imt-lg-4']}`}>
                Đăng tuyển vị trí công việc IT, dễ dàng quản lý hồ sơ ứng viên với giao diện trực quan, đội ngũ hỗ trợ, và công cụ mạnh mẽ từ ITviec
              </p>
              <div className={`${styles['imt-8']} ${styles['d-lg-flex']}`}>
                <div className={`${styles['job-posting-content-box']} ${styles['p-3']} ${styles['imb-4']} ${styles['ime-lg-4']} ${styles['flex-1']} ${styles['d-flex']}`}>
                  <img src="https://itviec.com/assets/employer_landing/opportunities-a53edbeb973cfeaa459e920b7a4562354aa02a1c83a53150cf8ebf17aaa7ce57.svg" alt="Opportunities" />
                  <p className={`${styles['parapraph']} ${styles['imt-4']} ${styles['ims-4']}`}>
                    Gia tăng cơ hội để tiếp cận ứng viên IT chất lượng từ ITviec
                  </p>
                </div>
                <div className={`${styles['job-posting-content-box']} ${styles['p-3']} ${styles['flex-1']} ${styles['d-flex']} `}>
                  <img src="https://itviec.com/assets/employer_landing/right-skill-be1892ff9d11b80aeab90527abe6b19cfb855ab95fbcc9b7bc75c89184353bfd.svg" alt="Right Skill" />
                  <p className={`${styles['parapraph']} ${styles['imt-4']} ${styles['ims-4']}`}>
                    Thu hút ứng viên phù hợp với yêu cầu về kỹ năng IT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['bgwhite']} ${styles['flex-box-wrapper']} ${styles['ipy-6']} ${styles['ips-lg-12']} ${styles['ipe-lg-8']} ${styles['imt-8']} ${styles['ipy-lg-12']} ${styles['ipx-6']} ${styles['ipt-lg-12']} ${styles['ipb-lg-13']}`}>
          <div className={`${styles['d-lg-flex']} ${styles['align-items-lg-center']}`}>
            <div className={`${styles['d-lg-flex']} ${styles['flex-1']}`}>
              <img className={`${styles['w-100']} ${styles['large-pic']}`} src="https://itviec.com/assets/employer_landing/ai-match-15-22d68e502f2d153eec13bae292cf4207d3e90e22ff153b0a28cfcfd26592f75f.png" alt="AI Match" />
            </div>
            <div className={` ${styles['flex-1']}`}>
              <div>
                <div className={`${styles['h1']} ${styles['ipy-4']} ${styles['ipy-lg-0']}`}>
                  Gợi ý ứng viên AI Match
                </div>
                <p className={`${styles['normal-text']} ${styles['parapraph']} ${styles['text-rich-grey']} ${styles['imt-lg-4']}`}>
                  Kết nối với nguồn hồ sơ ứng viên IT đa dạng, hoạt động tích cực. Dễ dàng tiếp cận ứng viên với thao tác đơn giản. Mở khóa để giúp tìm kiếm ứng viên phù hợp.
                </p>
                <div className={`${styles['imt-8']}`}>
                  <div className={`${styles['aim-content-box']} ${styles['p-3']} ${styles['imb-4']} ${styles['d-flex']} ${styles['flex-lg-row']} ${styles['align-items-start']}`}>
                    <img src="https://itviec.com/assets/employer_landing/second-candidate-1bdd90ad9c1093d58e8cf9cbe7a69d0cdc6c0abdc07836be960a2b2b6e4afe70.svg" alt="Second Candidate" />
                    <p className={`${styles['ims-4']} ${styles['paragraph']}`}>
                      Các ứng viên phù hợp nhất được lựa chọn dựa trên kỹ năng, kinh nghiệm, nhu cầu công việc và hơn thế nữa
                    </p>
                  </div>
                  <div className={`${styles['aim-content-box']} ${styles['content-box']} ${styles['p-3']} ${styles['d-flex']} ${styles['flex-lg-row']} ${styles['align-items-start']}`}>
                    <img src="https://itviec.com/assets/employer_landing/first-candidate-429956d360c41ee733ef01951e18c86d80a1614aa14777d4f80937a7c629fc2c.svg" alt="First Candidate" />
                    <p className={`${styles['ims-4']} ${styles['paragraph']}`}>
                      Chỉ kết nối nhà tuyển dụng với những nhân tài IT đang có ý định chuyển việc
                    </p>
                  </div>
                </div>
                <div className={`${styles['ipt-6']}`}>
                  <a className={`${styles['ibtn']} ${styles['ibtn-md']} ${styles['ibtn-primary']} ${styles['w-100']} ${styles['contact-now-btn']} ${styles['fw-500']}`} href="/ai-match?itm_campaign=ai_match&amp;itm_medium=service&amp;itm_source=employer_page_vi">Xem thêm về AI Match</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['bgwhite']} ${styles['flex-box-wrapper']} ${styles['ipy-6']} ${styles['ips-lg-12']} ${styles['ipe-lg-8']} ${styles['imt-8']} ${styles['ipx-6']} ${styles['ipy-lg-12']} ${styles['ipt-lg-12']} ${styles['ipb-lg-13']}`}>
          <div className={`${styles['d-lg-flex']} ${styles['flex-row-reverse']} ${styles['align-items-lg-center']}`}>
            <div className={`${styles['d-lg-flex']} ${styles['justify-content-center']} `}>
              <img className={`${styles['w-100']} ${styles['large-pic']}`} src="https://itviec.com/assets/employer_landing/employer-branding-15-9901407b309ba5b978b453490ba825d6e1c6c82c488649032f98840cd14eed04.png" alt="Employer Branding" />
            </div>
            <div className={`${styles['flex-1']}`}>
              <div className={`${styles['h1']} ${styles['ipy-4']} ${styles['ipy-lg-0']}`}>
                Thương hiệu tuyển dụng
              </div>
              <p className={`${styles['normal-text']} ${styles['parapraph']} ${styles['text-rich-grey']} ${styles['imt-lg-4']}`}>
                Nâng cao nhận diện thương hiệu của Nhà tuyển dụng, tiếp cận các chuyên gia IT trên ITviec qua các điểm chạm đặc biệt, và kết nối với các ứng viên IT hàng đầu tại Việt Nam
              </p>
              <div className={`${styles['imt-8']}`}>
                <div className={`${styles['aim-content-box']} ${styles['p-3']} ${styles['imb-4']} ${styles['d-flex']} ${styles['flex-lg-row']} ${styles['align-items-start']}`}>
                  <img src="https://itviec.com/assets/employer_landing/first-employer-branding-974416a3d60028453bad0cad115f6ab42ea0736b117aba05e0816b1d49caf93b.svg" alt="Top Employer" />
                  <div className={`${styles['ims-4']}`}>
                    <p className={`${styles['normal-text']} ${styles['fw-600']}`}>
                      Nhà tuyển dụng hàng đầu
                    </p>
                    <p className={`${styles['imt-2']} ${styles['text-rich-grey']}`}>
                      Xuất hiện với vị trí công ty IT nổi bật hàng đầu tại Việt Nam
                    </p>
                  </div>
                </div>
                <div className={`${styles['aim-content-box']} ${styles['p-3']} ${styles['d-flex']} ${styles['flex-lg-row']} ${styles['align-items-start']}`}>
                  <img src="https://itviec.com/assets/employer_landing/second-employer-branding-970e0278afc18f58c8c7952e73f33e2288e18f92cf9a7709d8fddccd5749bbe8.svg" alt="Highlighted Employer" />
                  <div className={`${styles['ims-4']}`}>
                    <p className={`${styles['normal-text']} ${styles['fw-600']}`}>
                      Nhà tuyển dụng nổi bật
                    </p>
                    <p className={`${styles['imt-2']} ${styles['text-rich-grey']}`}>
                      Tăng cường xây dựng thương hiệu nhà tuyển dụng đến với những nhân tài IT hàng đầu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['imt-8']} ${styles['imt-lg-12']}`}>
          <h3 className={`${styles['textitwhite']} ${styles['ipb-5']} ${styles['text-center']}`}>
            Trải nghiệm dịch vụ của ITviec ngay hôm nay
          </h3>
          <div className={`${styles['d-flex']} ${styles['justify-content-center']} `}>
            <button className={`${styles['ibtn']} ${styles['ibtn-lg']} ${styles['ibtn-primary']} ${styles['w-100']} ${styles['contact-now-btn']}`} onClick={() => window.location.href='#contact-form'}>
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighValueServices;
