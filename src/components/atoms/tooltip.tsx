import React from "react";
import styled from "styled-components";

interface ToolTipProps {
    tip: string
}

export const Tooltip: React.FC<ToolTipProps> = (props) => {
    return (
        <StyledToolTipWrap>
            <ToolTip>
                <ToolTipPointer />
                {props.tip}
            </ToolTip>
        </StyledToolTipWrap>
    )
}

const StyledToolTipWrap = styled.div``

const ToolTipPointer = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid  #808080;
  position: absolute;
  left: 40%;
  top: -8px;
`

const ToolTip = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #808080;
  padding: 1px 15px;
  color: #FFFFFF;
`