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
                <Test>
                    <StyledSectionInlineContent dark={mode}>
                        {props.name}
                        <Divider marginLeft={'15px'} marginRight={'15px'} />
                        {props.years}
                    </StyledSectionInlineContent>
                    <ToolTipWrap className={'skillTooltip'}>
                        <Tooltip tip={'Primary Skill'} />
                    </ToolTipWrap>
                </Test>
            )}
            {!props.primary && (
                <Test>
                    <StyledSectionInlineContentSecondary dark={mode}>
                        {props.name}
                        <Divider marginLeft={'15px'} marginRight={'15px'} />
                        {props.years}
                    </StyledSectionInlineContentSecondary>
                    <ToolTipWrap className={'skillTooltip'}>
                        <Tooltip tip={'Secondary Skill'} />
                    </ToolTipWrap>
                </Test>
            )}
        </>
    )
}

const Test = styled.div`
  height: 72px;
  margin-top: 20px;
`

const StyledSectionInlineContent = styled.span<StyledComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.dark ? '#FFFFFF' : 'rgba(0,0,0,.2)'};
  margin-right: 15px;
  padding: 10px 15px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  :hover + .skillTooltip {
    display: block;
  }
`

const StyledSectionInlineContentSecondary = styled(StyledSectionInlineContent)<StyledComponentProps>`
  background-color: ${props => props.dark ? '#F2F7FF' : 'rgba(0,0,0,.1)'};
`

const ToolTipWrap = styled.div`
  display: none;
  margin: 0 auto;
`