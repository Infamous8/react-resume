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
    const contentData = require('../../data/structure.json');
    const userData = contentData.user
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
                        {userData.about}
                    </SimplifiedContentCell>
                </UserAbout>
            </HeaderContent>
        </SelfContainedContentCell>
    )
}

const HeaderContent = styled.nav`
  padding: 30px;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  @media only screen and (max-width: 720px) {
    padding: 15px;
  }
  @media only screen and (max-width: 640px) {
    padding: 5px;
  }
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