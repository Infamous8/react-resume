import React from "react";
import styled from "styled-components";
import {Tooltip} from "./tooltip";

interface MaterialIconPhoneProps {
    type: 'GitHub' | 'LinkedIn' | 'WhatsApp' | 'CodePen'
    mode: 'dark' | 'light'
    href: string
}

export const PngIcon: React.FC<MaterialIconPhoneProps> = (props) => {
    const iconImg = require(`../../assets/icons/${props.mode}/${props.type}.png`)
    return (
        <StyledPngIcon href={props.href} target={"_blank"}>
            <PngIconContent>
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

const PngIconContent = styled.div`
  margin: 0 auto;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF; //DARK MODE
  //border: 2px solid #000000; //LIGHT MODE
  border-radius: 50%;
  position: relative;
  img {
    height: 20px;
    width: auto;
    filter: invert(1); //DARK MODE
    //filter: invert(0); //LIGHT MODE
  }
  :hover + .tooltip {
    display: block;
  }
`

const ToolTipWrap = styled.div`
  display: none;
`