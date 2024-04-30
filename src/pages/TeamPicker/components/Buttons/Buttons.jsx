import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ team, setTeam }) => {
  const handleSave = () => {
    localStorage.setItem("team", JSON.stringify(team));

    alert("✅ Team saved successfully!");
  };
  
  // simple cancel mocking
  const handleCancel = () => window.location.reload();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.cancel}`}
        onClick={handleCancel}
      >
        Cancel
      </button>

      <button
        className={`${styles.button} ${styles.save}`}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Buttons;
