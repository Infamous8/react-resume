import React, {useState} from "react";
import styled from "styled-components";

interface ButtonProps {
    title?: string
    href?: string
    onClick?: () => void
}

interface TextButtonProps {
    title: string
}

interface LinkButtonProps {
    href: string
}

interface ChevronButtonProps {
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            {props.title && (
                <TextButton title={props.title} />
            )}
            {props.href && (
                <LinkButton href={props.href} />
            )}
            {props.title === undefined && props.href === undefined && props.onClick && (
                <ChevronButton onClick={props.onClick}/>
            )}
        </>
    )
}

const TextButton: React.FC<TextButtonProps> = (props) => {
    return (
        <StyledButton>

        </StyledButton>
    )
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
    return (
        <StyledLinkButton href={props.href}>

        </StyledLinkButton>
    )
}

const ChevronButton: React.FC<ChevronButtonProps> = (props) => {
    const [rotated, setRotated] = useState(false)
    const Chevron = require("../../assets/icons/chevron.png")

    const onClick = () => {
        setRotated(!rotated);
        props.onClick();
    }

    return (
        <StyledButton onClick={onClick}>
            <ChevronImage src={Chevron} alt="chevron icon" style={rotated ? {transform: "rotate(180deg)"} : {}} />
        </StyledButton>
    )
}

const StyledButton = styled.button`
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00DBE5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  :hover {
    background-color: #31B2C9;
  }
  :active {
    min-width: 46px;
    min-height: 46px;
  }
  img {
    width: 16px;
    height: auto;
  }
`

const ChevronImage = styled.img`
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
`

const StyledLinkButton = styled.a``