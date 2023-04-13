import React from "react";
import styled from "styled-components";
import {MaterialIcon} from "./material-icon";
import {Button} from "./button";

interface UserDetailsProps {}

export const UserDetails: React.FC<UserDetailsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentUser = contentData.user
    const callLink = 'tel:' + contentUser.contactPhone
    const mailToLink = 'mailto:' + contentUser.contactEmail
    return (
        <StyledUserDetails>
            <UserName>{contentUser.firstName && contentUser.firstName} {contentUser.middleName && contentUser.middleName} {contentUser.lastname && contentUser.lastname}</UserName>
            <UserProfession>{contentUser.profession && contentUser.profession}</UserProfession>
            <UserYearsExperience>
                {contentUser.yearsExperience && (
                    <>
                        {contentUser.yearsExperience} years of experience
                    </>
                )}
            </UserYearsExperience>
            <UserContactDetails>
                {contentUser.contactPhone && (
                    <ContactDetail>
                        <MaterialIcon name={'call'}/>
                        <Button href={callLink}>{contentUser.contactPhone}</Button>
                    </ContactDetail>
                )}
                {contentUser.contactEmail && (
                    <ContactDetail>
                        <MaterialIcon name={'mail'}/>
                        <Button href={mailToLink}>{contentUser.contactEmail}</Button>
                    </ContactDetail>
                )}
            </UserContactDetails>
            <UserDetailsDecoration/>
        </StyledUserDetails>
    )
}

const StyledUserDetails = styled.div`
  margin-left: 50px;
  position: relative;
  width: calc(100% - 180px - 50px);
  @media only screen and (max-width: 950px) {
    margin-left: 0;
    width: 100%;
  }
`

const UserName = styled.h1``

const UserProfession = styled.h2``

const UserYearsExperience = styled.span``

const UserContactDetails = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  display: flex;
  div:last-child {
    margin-left: 15px;
  }
  @media only screen and (max-width: 1350px) {
    position: relative;
  }
`

const ContactDetail = styled.div`
  display: flex;
  >div:first-child {
    margin-right: 6px;
  }
`

const UserDetailsDecoration = styled.div`
  width: 100%;
  height: 3px;
  border: 2px;
  background-color: #00DBE5;
  position: absolute;
  bottom: 0;
  @media only screen and (max-width: 1350px) {
    bottom: -15px;
  }
  @media only screen and (max-width: 950px) {
    bottom: -35px;
  }
`