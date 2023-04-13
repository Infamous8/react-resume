import React, {useContext, useState} from "react";
import styled from "styled-components";
import {MaterialIcon} from "./material-icon";
import {StyledComponentProps, ThemeContext} from "../../App";

interface ButtonProps {
    href?: string
    onClick?: () => void
    children?: React.ReactNode
    collapsedDefault?: boolean
    simple?: boolean
}

interface LinkProps {
    href: string
    children: React.ReactNode
}

interface ChevronButtonProps {
    onClick: () => void
    collapsedDefault?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            {props.href && (
                <Link href={props.href} children={props.children}/>
            )}
            {props.href === undefined && props.onClick && (
                <>
                    {!props.simple && (
                        <ChevronButton onClick={props.onClick} collapsedDefault={props.collapsedDefault}/>
                    )}
                    {props.simple && (
                        <SimplifiedChevronButton onClick={props.onClick} collapsedDefault={props.collapsedDefault} />
                    )}
                </>
            )}
        </>
    )
}

const Link: React.FC<LinkProps> = (props) => {
    return (
        <StyledLinkButton href={props.href} target={'_blank'}>
            {props.children}
        </StyledLinkButton>
    )
}

const ChevronButton: React.FC<ChevronButtonProps> = (props) => {
    const defaultRotated = props.collapsedDefault !== undefined ? props.collapsedDefault : false
    const [rotated, setRotated] = useState(defaultRotated)

    const onClick = () => {
        setRotated(!rotated);
        props.onClick();
    }

    return (
        <StyledButton onClick={onClick}>
            <Chevron style={rotated ? {transform: "rotate(180deg)"} : {}}>
                <MaterialIcon name={'expand_more'} />
            </Chevron>
        </StyledButton>
    )
}

const SimplifiedChevronButton: React.FC<ChevronButtonProps> = (props) => {
    const mode = useContext(ThemeContext).mode
    const defaultRotated = props.collapsedDefault !== undefined ? props.collapsedDefault : false
    const [rotated, setRotated] = useState(defaultRotated)

    const onClick = () => {
        setRotated(!rotated);
        props.onClick();
    }
    return (
        <StyledSimplifiedChevronButton onClick={onClick}>
            <SimplifiedChevronIconWrap>
                <SimpleIcon dark={mode}/>
                <SimpleIcon dark={mode} style={rotated ? {transform: 'rotate(90deg)'} : {}}/>
            </SimplifiedChevronIconWrap>
        </StyledSimplifiedChevronButton>
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

const StyledSimplifiedChevronButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`

const SimplifiedChevronIconWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SimpleIcon = styled.div<StyledComponentProps>`
  width: 18px;
  height: 3px;
  border-radius: 2px;
  background-color: ${props => props.dark ? '#212427' : '#F8F0E3'};
  position: absolute;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
`

const Chevron = styled.div`
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  pointer-events: none;
`

const StyledLinkButton = styled.a`
  text-decoration: none;
  color: #808080;
`