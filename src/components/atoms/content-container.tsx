import React from "react";
import styled from "styled-components";

interface ContentContainerProps {
    children: React.ReactNode
}

export const ContentContainer: React.FC<ContentContainerProps> = (props) => {
    return (
        <StyledContentContainer>
            {props.children}
        </StyledContentContainer>
    )
}

const StyledContentContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto 100px auto;
  transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  padding: 50px 0;
  @media only screen and (max-width: 1920px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 50px 60px;
  }
  @media only screen and (max-width: 720px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 50px 30px;
  }
  @media only screen and (max-width: 640px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 50px 15px;
  }
  @media only screen and (max-width: 380px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 50px 10px;
  }
`