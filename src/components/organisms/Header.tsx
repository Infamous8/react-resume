import React from "react";
import styled from "styled-components";
import {SelfContainedContentCell} from "../molecules/self-contained-content-cell";
import {Avatar} from "../atoms/avatar";
import {UserDetails} from "../atoms/user-details";
import {UserLinks} from "../atoms/user-links";

interface HeaderProps {
    margin?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <SelfContainedContentCell margin={props.margin}>
            <HeaderContent>
                <Avatar />
                <UserDetails/>
                <UserLinks/>
            </HeaderContent>
        </SelfContainedContentCell>
    )
}

const HeaderContent = styled.nav`
  padding: 30px;
  display: flex;
`