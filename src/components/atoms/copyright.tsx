import React from "react";
import styled from "styled-components";
import {Divider} from "./divider";

interface CopyrightProps {}

export const Copyright: React.FC<CopyrightProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const firstName = contentData.user.firstName
    const middleName = contentData.user.middleName
    const lastName = contentData.user.lastname
    const currentYear = new Date().getFullYear()
    return (
        <StyledCopyright>
            <NameSpace>©</NameSpace>
            {firstName.length > 0 && <NameSpace>{firstName}</NameSpace>}
            {middleName.length > 0 && <NameSpace>{middleName}</NameSpace>}
            {lastName.length > 0 && <NameSpace>{lastName}</NameSpace>}
            <Divider marginLeft={'0'} marginRight={'6px'}/>
            <NameSpace>{currentYear}</NameSpace>
        </StyledCopyright>
    )
}

const StyledCopyright = styled.div`
  display: flex;
  align-items: center;
`

const NameSpace = styled.span`
  margin-right: 6px;
`