import React from "react";
import styled from "styled-components";

interface UserDetailsProps {}

export const UserDetails: React.FC<UserDetailsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentUser = contentData.user
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
                Phone: 0000000000
                Email: 0000000000
            </UserContactDetails>
            <UserDetailsDecoration/>
        </StyledUserDetails>
    )
}

const StyledUserDetails = styled.div`
  margin-left: 50px;
  position: relative;
  width: calc(100% - 180px - 50px);
`

const UserName = styled.h1``

const UserProfession = styled.h2``

const UserYearsExperience = styled.span``

const UserContactDetails = styled.div`
  border: 1px solid red;
  position: absolute;
  top: 0;
  right: 0;
`

const UserDetailsDecoration = styled.div`
  width: 100%;
  height: 3px;
  border: 2px;
  background-color: #00DBE5;
  position: absolute;
  bottom: 0;
`