import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  // background-color: pink;
  border-bottom: 1px solid rgb(211, 211, 211);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  // padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background-color: green;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  // ${OptionContainerStyles}
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;