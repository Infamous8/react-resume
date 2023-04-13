import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Button} from "./button";
import {StyledComponentProps, ThemeContext} from "../../App";

interface ContentCellProps {
    children: React.ReactNode
    collapsible: boolean
    section?: 'associations' | 'education' | 'experience' | 'interests' | 'projects' | 'recognitions' | 'skills'
    title?: string
    collapsedDefault?: boolean
}

export const ContentCell: React.FC<ContentCellProps> = (props) => {
    const mode = useContext(ThemeContext).mode
    const [collapsed, setCollapsed] = useState(props.collapsedDefault)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <StyledContentCell dark={mode}>
            {props.collapsible && (
                <CellControls>
                    <ControlsTitle>
                        {props.section && props.section}
                        {props.title && props.title}
                    </ControlsTitle>
                    <ControlsDecorationWrap>
                        {collapsed && <ControlsDecorationForward />}
                        {!collapsed && <ControlsDecorationBackward />}
                    </ControlsDecorationWrap>
                    <ControlsButtonWrap>
                        <Button onClick={toggleCollapse} collapsedDefault={props.collapsedDefault} />
                    </ControlsButtonWrap>
                </CellControls>
            )}
            {collapsed && props.collapsible && (
                <CellContentCollapse>
                    {!collapsed && props.children}
                </CellContentCollapse>
            )}
            {!collapsed && props.collapsible && (
                <CellContentExpand>
                    {props.children}
                </CellContentExpand>
            )}
            {!props.collapsible && (
                <CellContentNoCollapse>
                    {props.children}
                </CellContentNoCollapse>
            )}
        </StyledContentCell>
    )
}

export const SimplifiedContentCell: React.FC<ContentCellProps> = (props) => {
    const mode = useContext(ThemeContext).mode
    const [collapsed, setCollapsed] = useState(props.collapsedDefault)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
    return (
        <StyledSimplifiedContentCell>
            {props.collapsible && (
                <CellControls>
                    <ControlsTitle>
                        {props.section && props.section}
                        {props.title && props.title}
                    </ControlsTitle>
                    <ControlsButtonWrap>
                        <Button simple={true} onClick={toggleCollapse} collapsedDefault={props.collapsedDefault} />
                    </ControlsButtonWrap>
                </CellControls>
            )}
            {collapsed && props.collapsible && (
                <CellContentCollapse>
                    {!collapsed && props.children}
                </CellContentCollapse>
            )}
            {!collapsed && props.collapsible && (
                <CellContentExpand>
                    {props.children}
                </CellContentExpand>
            )}
            {!props.collapsible && (
                <div>
                    test
                    {props.children}
                </div>
            )}
        </StyledSimplifiedContentCell>
    )
}

const StyledContentCell = styled.div<StyledComponentProps>`
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
  background-color: ${props => props.dark ? '#E0E5EC' : '#262626'};
  box-shadow: ${props => props.dark ? '15px 15px 30px #CED3D9, -15px -15px 30px #F2F7FF' : '-12px -12px 12px 0 rgba(58, 58, 58, 0.3),12px 12px 12px 0 rgba(0,0,0,.2)'} ;
  margin-bottom: 30px;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
`

const StyledSimplifiedContentCell = styled.div``

const CellControls = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const ControlsTitle = styled.div`
  text-transform: capitalize;
  white-space: nowrap;
`

const ControlsDecorationWrap = styled.div`
  width: 100%;
  margin: 0 12px;
  height: 3px;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: start;
`

const ControlsDecorationForward = styled.div`
  height: 100%;
  background-color: #00DBE5;
  animation: slide .2s forwards;
  animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
  @keyframes slide {
    0% {width: 0}
    100% {width: 100%}
  }
`

const ControlsDecorationBackward = styled(ControlsDecorationForward)`
  animation: slideLeft .35s forwards;
  animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
  @keyframes slideLeft {
    0% {width: 100%}
    100% {width: 0}
  }
`

const ControlsButtonWrap = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CellContentExpand = styled.div`
  animation: open .25s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
  transform-origin: top;
  overflow: hidden;
  @keyframes open {
    0% {
      transform: scaleY(0);
      height: 0;
      opacity: 0;
    }
    100% {
      transform: scaleY(100%);
      height: 100%;
      opacity: 1;
    }
  }
`

const CellContentCollapse = styled.div`
  animation: close .25s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
  transform-origin: top;
  overflow: hidden;
  @keyframes close {
    0% {
      transform: scaleY(1);
      height: 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      height: 0;
      opacity: 0;
    }
  }
`

const CellContentNoCollapse = styled.div`
  animation: none;
`
