import React, { useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img``;

export const Header = ({ logo, title, subText, children }) => {
  return (
    <HeaderWrapper>
      {logo ? <Logo src={logo} alt="Simian Logo" /> : null}
      {title ? <h1>{title}</h1> : null}
      {subText ? <h3>{title}</h3> : null}
      {children}
    </HeaderWrapper>
  );
};
