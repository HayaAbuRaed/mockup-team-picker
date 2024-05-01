import { React, useState } from "react";
import getMembers from "../../data";
import Buttons from "../Buttons/Buttons";
import TeamList from "../TeamList/TeamList";
import styles from "./Picker.module.css";

const members = getMembers();

const MemberPicker = () => {
  const [team, setTeam] = useState(members);

  const [filteredMembers, setFilteredMembers] = useState(team);

  const handleMemberSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredMembers = members.filter((member) => {
      const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();

      return fullName.includes(searchValue);
    });

    setFilteredMembers(filteredMembers);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <input
          type="search"
          placeholder="Find members"
          onChange={handleMemberSearch}
        />
      </div>

      <TeamList team={filteredMembers} setTeam={setTeam} />

      <Buttons team={team} setTeam={setTeam} />
    </div>
  );
};

export default MemberPicker;
