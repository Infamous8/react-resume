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
  margin: 0 auto;
  border: 1px solid red;
`