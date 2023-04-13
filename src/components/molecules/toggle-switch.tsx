import React from "react";
import styled from "styled-components";
import {Switch} from "../atoms/switch";

interface ToggleSwitchProps {
    title: string
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
    return (
        <StyledToggleSwitch>
            <Switch/>
            <StyledToggleLabel>{props.title}</StyledToggleLabel>
        </StyledToggleSwitch>
    )
}

const StyledToggleSwitch = styled.div`
  display: flex;
  align-items: center;
`

const StyledToggleLabel = styled.label`
  margin-left: 12px;
`