import React, { useContext } from "react";
import { Team } from "../models/Teams";

type TeamsContext = {
  teamMembers: Team[];
};

const TeamsContext = React.createContext<TeamsContext | null>(null);

export const TeamsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [teamMembers, setTeamMembers] = React.useState<Team[]>([]);

  React.useEffect(() => {
    const fetchDataTeams = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?results=10&nat=gb`,
      );
      const result = await response.json();
      setTeamMembers(result.results);
    };

    fetchDataTeams();
  }, []);

  return (
    <TeamsContext.Provider value={{ teamMembers }}>
      {children}
    </TeamsContext.Provider>
  );
};

export const UseTeamsContext = () => {
  const context = useContext(TeamsContext);
  return context as TeamsContext;
};
