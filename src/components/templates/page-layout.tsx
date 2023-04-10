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
            <ContentContainer>
                <Header margin={'30px 0 50px 0'} />
                {props.children}
                <Footer margin={'150px 0 0 0'} />
            </ContentContainer>
        </StyledPageLayout>
    )
}

const StyledPageLayout = styled.div``
