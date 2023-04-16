import React from "react";
import {ContentCell} from "../atoms/content-cell";
import styled from "styled-components";
import {ContentContainer} from "../atoms/content-container";
import {Link} from "react-router-dom";
import {MaterialIcon} from "../atoms/material-icon";

interface AttributionProps {}

export const Attributions: React.FC<AttributionProps> = (props) => {
    return (
        <AttributionsWrap>
            <ContentContainer>
                <ContentCell collapsible={false}>
                    <AttributionsTopBar>
                        <div>
                            <h1>Attributions</h1>
                        </div>
                        <Return>
                            <Link to={'/'} style={{display: "flex", alignItems: "center", textDecoration: "none"}}><MaterialIcon name={'arrow_back_ios'} /> Back To Resume</Link>
                        </Return>
                    </AttributionsTopBar>
                </ContentCell>
                <ContentCell collapsible={false} title={'Icons'}>
                    <div>Codepen Icon: <a href="https://www.flaticon.com/free-icons/codepen" title="codepen icons">Codepen icons created by Pixel perfect - Flaticon</a></div>
                    <div>GitHub Icon: <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a></div>
                    <div>LinkedIn Icon: <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Pixel perfect - Flaticon</a></div>
                    <div>Discord Icon: <a href="https://www.flaticon.com/free-icons/discord" title="discord icons">Discord icons created by Pixel perfect - Flaticon</a></div>
                    <div>WhatsApp Icon: <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">Whatsapp icons created by Pixel perfect - Flaticon</a></div>
                </ContentCell>
                <ContentCell collapsible={false} title={'Material Icons'}>
                    <div>Material Symbols: <a href="https://fonts.google.com/icons?icon.query=l&icon.set=Material+Symbols" title="material symbols">Material Symbols by Google Fonts</a></div>
                </ContentCell>
                <ContentCell collapsible={false} title={'Fonts'}>
                    <div>Space Mono: <a href="https://fonts.google.com/specimen/Space+Mono?icon.set=Material+Symbols&query=space+mono" title="space mono">Space Mono Font by Google Fonts</a></div>
                    <div>Roboto: <a href="https://fonts.google.com/specimen/Roboto?icon.set=Material+Symbols&query=roboto" title="roboto">Roboto Font by Google Fonts</a></div>
                </ContentCell>
            </ContentContainer>
        </AttributionsWrap>
    )
}

const AttributionsWrap = styled.div``

const AttributionsTopBar = styled.div`
  padding: 30px;
`

const Return = styled.div`
  display: flex;
`