import React from "react";
import styled from "styled-components";
import {ContentCell} from "../atoms/content-cell";

interface SelfContainedContentCellProps {
    children: React.ReactNode
    margin?: string
}

export const SelfContainedContentCell: React.FC<SelfContainedContentCellProps> = (props) => {
    return (
        <StyledSelfContainedContentCell style={props.margin ? {margin: props.margin} : {}}>
            <ContentCell collapsible={false}>
                {props.children}
            </ContentCell>
        </StyledSelfContainedContentCell>
    )
}

const StyledSelfContainedContentCell = styled.div`
  padding: 0 60px;
  transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  @media only screen and (max-width: 720px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 0 30px;
  }
  @media only screen and (max-width: 640px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 0 15px;
  }
  @media only screen and (max-width: 380px) {
    transition: padding .2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 0 10px;
  }
`