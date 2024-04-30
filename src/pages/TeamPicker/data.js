export const MEMBERS = [
  { id: 1, firstName: "Carolien", lastName: "Bloeme", isInTeam: false },
  { id: 2, firstName: "Sun", lastName: "Jun", isInTeam: true },
  { id: 3, firstName: "Song", lastName: "Bao", isInTeam: false },
  { id: 4, firstName: "Olivia", lastName: "Arribas", isInTeam: true },
  { id: 5, firstName: "Miguel", lastName: "Garcia", isInTeam: false },
  { id: 6, firstName: "Luis", lastName: "Perez", isInTeam: true },
  { id: 7, firstName: "Sara", lastName: "Lopez", isInTeam: true },
];

const getMembers = () => {
  let team = localStorage.getItem("team");

  if (team === null) {
    // If "team" doesn't exist in local storage, initialize it with MEMBERS
    localStorage.setItem("team", JSON.stringify(MEMBERS));
    team = JSON.stringify(MEMBERS);
  }

  try {
    return JSON.parse(team);
  } catch (error) {
    console.error("Error parsing 'team' from local storage:", error);
    // Return a default value or handle the error as appropriate
    return [];
  }
};

export default getMembers;
