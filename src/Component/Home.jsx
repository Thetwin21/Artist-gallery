import React, { useState } from "react";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import ShowImg from "./ShowImg";
import Theartist from "./Theartist";

const Home = () => {
  const [openFirstImg, setOpenFirstImg] = useState(true);
  const [openSecondImg, setOpenSecondImg] = useState(true);
  const [openThirdImg, setOpenThirdImg] = useState(true);
  const [openFourtImg, setOpenFourtImg] = useState(true);
  const [openFifthImg, setOpenFifthtImg] = useState(true);
  return (
    <div className="home">
      <Theartist />
      <Gallery
        setOpenFirstImg={setOpenFirstImg}
        openFirstImg={openFirstImg}
        setOpenSecondImg={setOpenSecondImg}
        openSecondImg={openSecondImg}
        setOpenThirdImg={setOpenThirdImg}
        openThirdImg={openThirdImg}
        setOpenFourtImg={setOpenFourtImg}
        openFourtImg={openFourtImg}
      />
      <ShowImg
        animate={openFirstImg}
        imgSrc={"../Images/img1.jpg"}
        onClick={() => setOpenFirstImg(true)}
      />
      <ShowImg
        animate={openSecondImg}
        imgSrc={"../Images/img2.jpg"}
        onClick={() => setOpenSecondImg(true)}
      />
      <ShowImg
        animate={openThirdImg}
        imgSrc={"../Images/img3.jpg"}
        onClick={() => setOpenThirdImg(true)}
      />
      <ShowImg
        animate={openFourtImg}
        imgSrc={"../Images/img4.jpg"}
        onClick={() => setOpenFourtImg(true)}
      />
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ type: "spring" }}
        width="200px"
        height="200px"
        background="yellow"
      ></motion.div>
    </div>
  );
};

export default Home;
