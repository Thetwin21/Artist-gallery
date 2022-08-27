import React from "react";
// import { Img1 } from '..public/Images/alina-bordunova-smFrfSTusz0-unsplash.jpg'
const Gallery = ({
  openFirstImg,
  setOpenFirstImg,
  openSecondImg,
  setOpenSecondImg,
  openThirdImg,
  setOpenThirdImg,
  openFourtImg,
  setOpenFourtImg,
}) => {
  const changeImg1 = () => {
    setOpenFirstImg(false);
    setOpenSecondImg(true);
    setOpenThirdImg(true);
    setOpenFourtImg(true);
  };
  const changeImg2 = () => {
    setOpenSecondImg(false);
    setOpenFirstImg(true);
    setOpenThirdImg(true);
    setOpenFourtImg(true);
  };
  const changeImg3 = () => {
    setOpenThirdImg(false);
    setOpenFirstImg(true);
    setOpenSecondImg(true);
    setOpenFourtImg(true);
  };
  const changeImg4 = () => {
    setOpenFourtImg(false);
    setOpenFirstImg(true);
    setOpenSecondImg(true);
    setOpenThirdImg(true);
  };
  return (
    <div className="gallery">
      <div className="emptydiv"></div>
      <div className="g-container">
        <div className="gallery-content">
          <h3>GALLERY</h3>
          <div className="img-container">
            {/* first image slide */}
            <div
              className="img"
              style={{
                display: openFirstImg ? "initial" : "none",
                transform: openFirstImg
                  ? "translate(-50,-50)"
                  : "translateX(0)",
              }}
              onClick={changeImg1}
            >
              <img src="../Images/img1.jpg" alt="" />
            </div>
            {/* second image slide */}
            <div
              className="img"
              style={{
                display: openSecondImg ? "initial" : "none",
                transform: openSecondImg
                  ? "translate(-50,-50)"
                  : "translateX(0)",
              }}
              onClick={changeImg2}
            >
              <img src="../Images/img2.jpg" alt="" />
            </div>
            {/* Third image slide */}
            <div
              className="img"
              style={{
                display: openThirdImg ? "initial" : "none",
                transform: openThirdImg
                  ? "translate(-50,-50)"
                  : "translateX(0)",
              }}
              onClick={changeImg3}
            >
              <img src="../Images/img3.jpg" alt="" />
            </div>
            {/* fourt image slide */}
            <div
              className="img"
              style={{
                display: openFourtImg ? "initial" : "none",
                transform: openFourtImg
                  ? "translate(-50,-50)"
                  : "translateX(0)",
              }}
              onClick={changeImg4}
            >
              <img src="../Images/img4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
