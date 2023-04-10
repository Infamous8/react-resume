import React from "react";
import styled from "styled-components";

interface DividerProps {
    marginLeft: string
    marginRight: string
}

export const Divider: React.FC<DividerProps> = (props) => {
    return (
        <StyledDivider style={{marginLeft: props.marginLeft, marginRight: props.marginRight}}/>
    )
}

const StyledDivider = styled.div`
  height: 15px;
  width: 2px;
  border-radius: 2px;
  background-color: #00DBE5;
`