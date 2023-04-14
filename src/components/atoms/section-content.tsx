import React, {useContext} from "react";
import styled from "styled-components";
import {Divider} from "./divider";
import {StyledComponentProps, ThemeContext} from "../../App";
import {Button} from "./button";

interface SectionContentProps {
    name: string
    years?: string
    description: string
    link?: string
    relationship?: string
}

export const SectionContent: React.FC<SectionContentProps> = (props) => {
    const mode = useContext(ThemeContext).mode
    return (
        <StyledSectionItem>
            <StyledSectionTitle dark={mode}>
                {props.name}
                {props.years && <Divider marginLeft={'15px'} marginRight={'15px'}/>}
                {props.years !== "" && props.years}
            </StyledSectionTitle>
            <StyledSectionContent dark={mode}>
                {props.relationship && (
                    <RelationShip>
                        {props.relationship && props.relationship}
                    </RelationShip>
                )}
                <Description>
                    {props.description}
                </Description>
                {props.link && (
                    <Link>
                        <Button href={props.link}>View Here.</Button>
                    </Link>
                )}
            </StyledSectionContent>
        </StyledSectionItem>
    )
}

const StyledSectionItem = styled.div`
  margin-top: 15px;
`

const StyledSectionTitle = styled.div<StyledComponentProps>`
  padding: 8px;
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${props => props.dark ? '#FFFFFF' : 'rgba(0,0,0,.2)'};
`
const StyledSectionContent = styled.div<StyledComponentProps>`
  padding: 12px 8px 8px 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props => props.dark ? '#F2F7FF' : 'rgba(0,0,0,.1)'};
`

const RelationShip = styled.div`
  margin-bottom: 10px;
`

const Description = styled.div``

const Link = styled.div`
  margin-top: 10px;
`