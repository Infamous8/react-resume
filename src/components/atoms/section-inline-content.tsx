import React, {useContext} from "react";
import {Divider} from "./divider";
import styled from "styled-components";
import {Tooltip} from "./tooltip";
import {StyledComponentProps, ThemeContext} from "../../App";

interface SectionInlineContentProps {
    name: string,
    years: string
    primary: boolean
}

export const SectionInlineContent: React.FC<SectionInlineContentProps> = (props) => {
    const mode = useContext(ThemeContext).mode
    return (
        <>
            {props.primary && (
                <StyledInlineContent>
                    <InlineContentItem dark={mode}>
                        {props.name}
                        <Divider marginLeft={'15px'} marginRight={'15px'} />
                        {props.years}
                    </InlineContentItem>
                    <ToolTipWrap className={'skillTooltip'}>
                        <Tooltip tip={'Primary Skill'} />
                    </ToolTipWrap>
                </StyledInlineContent>
            )}
            {!props.primary && (
                <StyledInlineContent>
                    <InlineContentSecondaryItem dark={mode}>
                        {props.name}
                        <Divider marginLeft={'15px'} marginRight={'15px'} />
                        {props.years}
                    </InlineContentSecondaryItem>
                    <ToolTipWrap className={'skillTooltip'}>
                        <Tooltip tip={'Secondary Skill'} />
                    </ToolTipWrap>
                </StyledInlineContent>
            )}
        </>
    )
}

const StyledInlineContent = styled.div`
  display: inline-block;
  position: relative;
`

const InlineContentItem = styled.span<StyledComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.dark ? '#FFFFFF' : 'rgba(0,0,0,.2)'};
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  :hover + .skillTooltip {
    display: block;
  }
`

const InlineContentSecondaryItem = styled(InlineContentItem)<StyledComponentProps>`
  background-color: ${props => props.dark ? '#F2F7FF' : 'rgba(0,0,0,.1)'};
`

const ToolTipWrap = styled.div`
  display: none;
  position: absolute;
  bottom: -10px;
  left: 11%;
  z-index: 100;
`