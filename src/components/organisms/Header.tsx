import React from "react";
import styled from "styled-components";
import {SelfContainedContentCell} from "../molecules/self-contained-content-cell";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <SelfContainedContentCell margin={'50px 0 0 0'}>
            <HeaderContent>

            </HeaderContent>
        </SelfContainedContentCell>
    )
}

const HeaderContent = styled.nav`
  height: 200px;
  border: 1px solid red;
`