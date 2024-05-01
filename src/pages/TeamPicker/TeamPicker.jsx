import React from "react";
import MemberPicker from "./components/MemberPicker/MemberPicker";
import styles from "./TeamPicker.module.css";

const TeamPicker = () => {
  return (
    <>
      <h3 className={styles.h3}> Add members to Front-end development team </h3>

      <MemberPicker />
    </>
  );
};

export default TeamPicker;
