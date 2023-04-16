import React from "react";
import styled from "styled-components";

interface FlexProps {
    children: React.ReactNode
}

export const Flex: React.FC<FlexProps> = (props) => {
    return (
        <StyledFlex>
            {props.children}
        </StyledFlex>
    )
}

const StyledFlex = styled.div`
  display: flex;
`