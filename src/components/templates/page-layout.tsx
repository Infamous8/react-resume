import React from "react";
import styled from "styled-components";
import {ContentContainer} from "../atoms/content-container";

interface PageLayoutProps {
    children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
    return (
        <StyledPageLayout>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </StyledPageLayout>
    )
}

const StyledPageLayout = styled.div`
  border: 1px solid green;
`
