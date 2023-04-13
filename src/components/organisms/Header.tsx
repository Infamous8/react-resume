import React from "react";
import styled from "styled-components";
import {SelfContainedContentCell} from "../molecules/self-contained-content-cell";
import {Avatar} from "../atoms/avatar";
import {UserDetails} from "../atoms/user-details";
import {UserLinks} from "../atoms/user-links";
import {SimplifiedContentCell} from "../atoms/content-cell";

interface HeaderProps {
    margin?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <SelfContainedContentCell margin={props.margin}>
            <HeaderContent>
                <UserContent>
                    <UserAvatar>
                        <Avatar />
                    </UserAvatar>
                    <UserDetails/>
                </UserContent>
                <UserLinks/>
                <UserAbout>
                    <SimplifiedContentCell title={'A little about me'} collapsible={true} collapsedDefault={true}>
                        A little about me
                    </SimplifiedContentCell>
                </UserAbout>
            </HeaderContent>
        </SelfContainedContentCell>
    )
}

const HeaderContent = styled.nav`
  padding: 30px;
`

const UserContent = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`

const UserAvatar = styled.div`
  @media only screen and (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
`

const UserAbout = styled.div`
  margin-top: 70px;
  @media only screen and (max-width: 1350px) {
    margin-top: 85px;
  }
  @media only screen and (max-width: 950px) {
    margin-top: 100px;
  }
`