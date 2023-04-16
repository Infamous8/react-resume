import React from "react";
import styled from "styled-components";
import {Copyright} from "../atoms/copyright";
import {SelfContainedContentCell} from "../molecules/self-contained-content-cell";
import {Divider} from "../atoms/divider";
import {Link} from "react-router-dom";

interface FooterProps {
    margin?: string
}

export const Footer: React.FC<FooterProps> = (props) => {
    return (
        <SelfContainedContentCell margin={props.margin}>
            <FooterContent>
                <Copyright/>
                <DividerWrap>
                    <Divider marginLeft={'0'} marginRight={'6px'} />
                </DividerWrap>
                <Link to={'/attributions'} style={{textDecoration: "none"}}><FooterLink>Attributions</FooterLink></Link>
            </FooterContent>
        </SelfContainedContentCell>
    )
}

const FooterContent = styled.footer`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  @media only screen and (max-width: 510px) {
    display: block;
    text-align: center;
  }
`

const DividerWrap = styled.div`
  @media only screen and (max-width: 510px) {
    display: none;
    visibility: hidden;
  }
`

const FooterLink = styled.a`
  color: #808080;
  text-decoration: none;
`