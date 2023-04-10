import React from "react";
import styled from "styled-components";
import {ContentContainer} from "../atoms/content-container";
import {Footer} from "../organisms/footer";
import {Header} from "../organisms/Header";


interface PageLayoutProps {
    children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
    return (
        <StyledPageLayout>
            <Header/>
            <ContentContainer>
                {props.children}
            </ContentContainer>
            <Footer/>
        </StyledPageLayout>
    )
}

const StyledPageLayout = styled.div``
