// Import necessary dependencies
import React, { useState, useEffect } from "react";
import styles from "styles/content4.module.scss";

// Define feedback data
const feedbacks = [
  {
    content: "Chúng tôi đã tuyển dụng được nhiều ứng viên đủ tiêu chuẩn...",
    author: "Ms. Đoàn Ái Nương",
    position: "HR Manager | BBV Vietnam",
    link: "https://itviec.com/nha-tuyen-dung/bbv-vietnam",
    imgSrc:
      "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/images.png",
  },
  {
    content: "ITviec là một trong những cộng đồng IT lớn nhất Việt Nam...",
    author: "Ms. Ánh Trinh",
    position: "Talent Acquisition Lead | DEK technologies Vietnam",
    link: "https://itviec.com/nha-tuyen-dung/dek-technologies",
    imgSrc:
      "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/DEK-anEndavaCompany-Dark%20(2).png",
  },
  // Add other feedbacks here...
];

// Define FeedbackCarousel component
const FeedbackCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Auto transition between feedbacks every 8 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    // Move to the previous feedback
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    // Move to the next feedback
    setActiveIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  return (
    <section className={`${styles["feedback-container"]}`}>
      <div
        className={`${styles["h1"]} ${styles["text-center"]} ${styles["imt-12"]} ${styles["imt-lg-16"]} ${styles["imb-6"]} ${styles["imb-lg-8"]}`}
      >
        Khách hàng nói gì về chúng tôi?
      </div>
      <div
        className={`${styles["carousel"]} ${styles["slide"]}`}
        id="feedbacks-carousel"
      >
        <div className={`${styles["carousel-inner"]}`}>
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className={`${styles["carousel-item"]} ${
                index === activeIndex ? styles["active"] : ""
              }`}
            >
              <div
                className={`${styles["d-flex"]} ${styles["carousel-item-wrapper"]}`}
              >
                <div
                  className={`${styles["item"]} ${styles["ime-3"]} ${styles["p-4"]} ${styles["border-radius-large"]} ${styles["border-solid"]} ${styles["bg-white"]} ${styles["normal-text"]}`}
                >
                  <div
                    className={`${styles["feedback-content"]} ${styles["paragraph"]}`}
                  >
                    <p className={`${styles["paragraph"]}`}>
                      {feedback.content}
                    </p>
                  </div>
                  <div
                    className={`${styles["d-lg-flex"]} ${styles["justify-content-lg-between"]} ${styles["ipt-lg-8"]}`}
                  >
                    <div>
                      <h3
                        className={`${styles["red-text"]} ${styles["author"]}`}
                      >
                        {feedback.author}
                      </h3>
                      <p
                        className={`${styles["position"]} ${styles["text-rich-grey"]} ${styles["paragraph"]}`}
                      >
                        {feedback.position}
                      </p>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={feedback.link}
                      >
                        <img
                          alt={`${feedback.author} Small Logo`}
                          className={`${styles["border-solid"]} ${styles["box-shadow-normal"]} ${styles["border-radius-normal"]} ${styles["bg-white"]}`}
                          src={feedback.imgSrc}
                          width="65"
                          height="65"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["align-items-center"]} ${styles["imt-6"]}`}
        >
          <button
            className={`${styles["carousel-control-prev"]}`}
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className={`${styles["carousel-control-next"]}`}
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

// Export FeedbackCarousel component
export default FeedbackCarousel;
