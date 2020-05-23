import React from "react";
import "./DayNightToggle.css";
import styled from "styled-components";

const Wrapper = styled.div`
  transform: scale(0.4);
`;

export const DayNightToggle = ({ onToggle }) => {
  return (
    <Wrapper>
      <input onClick={onToggle} type="checkbox" id="hide-checkbox" />
      <label htmlFor="hide-checkbox" className="toggle">
        <span className="toggle-button">
          <span className="crater crater-1"></span>
          <span className="crater crater-2"></span>
          <span className="crater crater-3"></span>
          <span className="crater crater-4"></span>
          <span className="crater crater-5"></span>
          <span className="crater crater-6"></span>
          <span className="crater crater-7"></span>
        </span>
        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
        <span className="star star-7"></span>
        <span className="star star-8"></span>
      </label>
    </Wrapper>
  );
};
