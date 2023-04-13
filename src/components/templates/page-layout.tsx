import React, {useContext} from "react";
import styled from "styled-components";
import {ContentContainer} from "../atoms/content-container";
import {Footer} from "../organisms/footer";
import {Header} from "../organisms/Header";
import {ToggleSwitch} from "../molecules/toggle-switch";
import {ThemeContext} from "../../App";


interface PageLayoutProps {
    children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const currentTheme = useContext(ThemeContext)
    const mode = currentTheme.mode
    return (
        <StyledPageLayout>
            <ContentContainer>
                <ToggleSwitch title={mode ? 'Switch to dark theme' : 'Switch to light theme'} />
                <Header margin={'30px 0 50px 0'} />
                {props.children}
                <Footer margin={'150px 0 0 0'} />
            </ContentContainer>
        </StyledPageLayout>
    )
}

const StyledPageLayout = styled.div``
