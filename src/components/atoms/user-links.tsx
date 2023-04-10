import React from "react";
import styled from "styled-components";

interface UserLinksProps {}

interface UserLinks {
    name: string
    url: string
}

export const UserLinks: React.FC<UserLinksProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const links = contentData.links.map((link: UserLinks, index: number) => {
        return (
            <div key={index}>
                <span>{link.name}</span>
                <a href={link.url} target={"_blank"}>Link</a>
            </div>
        )
    })
    return (
        <StyledUserLinks>
            <LinksWrap>
                {links}
            </LinksWrap>
        </StyledUserLinks>
    )
}

const StyledUserLinks = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`

const LinksWrap = styled.div`
  border: 1px solid blue;
  width: 100%;
`