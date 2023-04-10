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

const StyledSelfContainedContentCell = styled.div``