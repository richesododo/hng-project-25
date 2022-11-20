import styled from "styled-components";
import { ButtonWrapper } from "../general/button.styled";

const HeaderWrapper = styled.header`
  color: white;
  background: #091540;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding: 22px;
  }
  @media (max-width: 690px) {
    height: 100vh;
  }
`;

const HeaderContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 42px;
  align-items: center;
  justify-content: center;

  margin: 199px auto 97px;
  @media (max-width: 690px) {
    margin: 120px auto 48px;
  }
`;
const Span = styled.span`
  color: #c04a1c;
`;
const SubHeading = styled.h2`
  max-width: 1022px;
  font-weight: 600;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  @media (max-width: 690px) {
    font-size: 35px;
    line-height: 50px;
  }
`;

const Heading = styled.h1`
  max-width: 712px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */

  text-align: center;
  @media (max-width: 690px) {
    font-size: 16px;
  }
`;

const InputWrappr = styled.div`
  position: relative;
  max-width: 518px;
  width: 100%;
  height: 64px;
`;

const LandingInput = styled.input.attrs({
  type: "text",
  placeholder: "Enter Business email",
  name: "landing_email"
})`
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background: rgba(111, 227, 235, 0.06);
  padding: 8px 210px 8px 8px;
  border-radius: 4px;
  ::-webkit-input-placeholder {
    color: inherit;
    font-weight: inherit;
  }
  ::-moz-placeholder {
    color: inherit;
  }
  @media (max-width: 690px) {
    padding: 8px 148px 8px 8px;
  }
`;
const HeaderButton = styled(ButtonWrapper)`
  padding: 8px;
  height: 50px;
  background: #f05d23;
  width: 183px;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  borderradius: 4px;
  color: #121212;
  @media (max-width: 690px) {
    font-size: 12px;
    width: 120px;
  }
`;
export {
  HeaderWrapper,
  HeaderContentWrapper,
  Span,
  SubHeading,
  Heading,
  InputWrappr,
  LandingInput,
  HeaderButton
};
