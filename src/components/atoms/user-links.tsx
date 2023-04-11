import React from "react";
import styled from "styled-components";
import {PngIcon} from "./png-icon";

interface UserLinksProps {}

interface UserLinks {
    name: 'GitHub' | 'LinkedIn' | 'WhatsApp' | 'CodePen'
    url: string
}

export const UserLinks: React.FC<UserLinksProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const links = contentData.links.map((link: UserLinks, index: number) => {
        return (
            <LinkWrap key={index}>
                <PngIcon type={link.name} href={link.url} mode={"dark"} />
            </LinkWrap>
        )
    })
    return (
        <StyledUserLinks>
            {links}
        </StyledUserLinks>
    )
}

const StyledUserLinks = styled.div`
  width: 100%;
  float: right;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  overflow: visible;
  margin-bottom: 10px;
`

const LinkWrap = styled.div`
  width: 150px;
  height: 71px;
  display: flex;
  justify-content: center;
  overflow: visible;
`