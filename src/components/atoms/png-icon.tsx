import React, {useContext} from "react";
import styled from "styled-components";
import {Tooltip} from "./tooltip";
import {StyledComponentProps, ThemeContext} from "../../App";

interface MaterialIconPhoneProps {
    type: 'GitHub' | 'LinkedIn' | 'WhatsApp' | 'CodePen'
    mode: 'dark' | 'light'
    href: string
}

export const PngIcon: React.FC<MaterialIconPhoneProps> = (props) => {
    const mode = useContext(ThemeContext).mode
    const iconImg = require(`../../assets/icons/${props.mode}/${props.type}.png`)
    return (
        <StyledPngIcon href={props.href} target={"_blank"}>
            <PngIconContent mode={mode}>
                <img src={iconImg} alt={`${props.type} icon`} />
            </PngIconContent>
            <ToolTipWrap className={'tooltip'}>
                <Tooltip tip={props.type} />
            </ToolTipWrap>
        </StyledPngIcon>
    )
}

const StyledPngIcon = styled.a`
  display: block;
  cursor: pointer;
`

const PngIconContent = styled.div<StyledComponentProps>`
  margin: 0 auto;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.mode ? '2px solid #000000' : '2px solid #FFFFFF'};
  border-radius: 50%;
  position: relative;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  img {
    height: 20px;
    width: auto;
    filter: ${props => props.mode? 'invert(0)' : 'invert(1)'};
    transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  :hover + .tooltip {
    display: block;
  }
`

const ToolTipWrap = styled.div`
  display: none;
`