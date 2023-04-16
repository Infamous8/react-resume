import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {ThemeContext} from "../../App";

interface SwitchProps {}

export const Switch: React.FC<SwitchProps> = (props) => {
    const currentTheme = useContext(ThemeContext);
    const [toggled, setToggled] = useState(true);

    const toggleSwitch = () => {
        setToggled(!toggled);
        currentTheme.toggleMode();
    }

    useEffect(() => {
        console.log(currentTheme.mode)
    }, [])

    useEffect(() => {
        const mode = localStorage.getItem('mode');
        if (mode === "dark") {
            setToggled(false)
        }
        if (mode === "light") {
            setToggled(true)
        }
        else return
        console.log(mode)
    },[])

    return (
        <StyledSwitch onClick={toggleSwitch}>
            <SwitchOutline style={toggled ? {backgroundColor: '#D1D1D1'} : {backgroundColor: '#121212'}}>
                <Lever style={toggled ? {marginLeft: 0, backgroundColor: '#A7A7A7'} : {marginLeft: 20, backgroundColor: '#808080'}}/>
            </SwitchOutline>
        </StyledSwitch>
    )
}

const StyledSwitch = styled.div`
  cursor: pointer;
`

const SwitchOutline = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 20px;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
`

const Lever = styled.div`
  width: 20px;
  height: 20px;
  background-color: #808080;
  border-radius: 50%;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  margin-left: 20px;
`