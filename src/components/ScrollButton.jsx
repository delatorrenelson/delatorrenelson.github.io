import React, { useState } from "react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      type="button"
      className="btn bg-purple text-white btn-floating btn-lg rounded-circle"
      id="btn-back-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
