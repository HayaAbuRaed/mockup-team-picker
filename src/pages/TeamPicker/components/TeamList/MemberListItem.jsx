import { React, useState } from "react";
import styles from "./ListItem.module.css";

const MemberListItem = ({ member, setTeam }) => {
  const [checked, setChecked] = useState(member.isInTeam);

  const handleClick = () => {
    setChecked((prev) => !prev);
    setTeam((prev) => {
      return prev.map((m) => {
        if (m.id === member.id) {
          return { ...m, isInTeam: !m.isInTeam };
        }
        return m;
      });
    });
  };

  return (
    <li className={styles.li} style={{ color: checked ? "#000" : "#9095a5" }}>
      <span className={styles.memberInfo}>
        <i className="fa-solid fa-user"></i>
        {`${member.firstName} ${member.lastName}`}
      </span>

      <button
        onClick={handleClick}
        className={`${styles.checkBox} ${checked && styles.checked}`}
      >
        <i
          className="fa-solid fa-check"
          style={{ visibility: checked ? "visible" : "hidden" }}
        ></i>
      </button>
    </li>
  );
};

export default MemberListItem;
