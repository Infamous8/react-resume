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
            <label>{props.title}</label>
        </StyledToggleSwitch>
    )
}

const StyledToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-left: 12px;
  }
`