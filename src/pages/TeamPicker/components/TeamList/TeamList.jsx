import React from "react";
import styles from "./List.module.css";
import MemberListItem from "./MemberListItem";

const TeamList = ({ team, setTeam }) => {
  return (
    <ul className={styles.ul}>
      {team.map((member) => (
        <MemberListItem key={member.id} member={member} setTeam={setTeam} />
      ))}
    </ul>
  );
};

export default TeamList;
