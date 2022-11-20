import React from "react";
import {
  HeaderContentWrapper,
  HeaderWrapper,
  Heading,
  InputWrappr,
  LandingInput,
  Span,
  SubHeading,
  HeaderButton
} from "./header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <SubHeading>
          Let’s Identify your <Span>VIP’s</Span> And Convert Them To{" "}
          <Span>Sales</Span>
        </SubHeading>
        <Heading>
          Axe API identifies very important personas that visits your website
          and converts them to high leads.
        </Heading>
        <InputWrappr>
          <LandingInput />
          <HeaderButton>Get Started</HeaderButton>
        </InputWrappr>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};
export default Header;
