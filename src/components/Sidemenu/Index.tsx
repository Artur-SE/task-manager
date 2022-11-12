import { NavLink } from "react-router-dom";
import { StyledSideMenuWrapper } from "./styled";

export const SideMenu = (): JSX.Element => {
  return (
    <StyledSideMenuWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/SkillTree">Skill Tree</NavLink>
      <NavLink to="/achievements">Achievements</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </StyledSideMenuWrapper>
  );
};
