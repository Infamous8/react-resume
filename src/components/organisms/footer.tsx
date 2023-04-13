import React from "react";
import styled from "styled-components";
import {Copyright} from "../atoms/copyright";
import {SelfContainedContentCell} from "../molecules/self-contained-content-cell";

interface FooterProps {
    margin?: string
}

export const Footer: React.FC<FooterProps> = (props) => {
    return (
        <SelfContainedContentCell margin={props.margin}>
            <FooterContent>
                <Copyright/>
            </FooterContent>
        </SelfContainedContentCell>
    )
}

const FooterContent = styled.footer`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
`