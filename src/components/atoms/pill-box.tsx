import React from "react";
import styled from "styled-components";

interface PillBocProps {
    children: React.ReactNode
}

export const PillBox: React.FC<PillBocProps> = (props) => {
    return (
        <StyledPillBox>
            {props.children}
        </StyledPillBox>
    )
}

const StyledPillBox = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 10px;
`