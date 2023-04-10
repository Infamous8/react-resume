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
            {links}
        </StyledUserLinks>
    )
}

const StyledUserLinks = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  border: 1px solid red;
  margin-top: 30px;
`

const LinksWrap = styled.div`
  border: 1px solid blue;
  width: 100%;
`