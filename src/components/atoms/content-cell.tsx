import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "./button";

interface ContentCellProps {
    children: React.ReactNode
    collapsible: boolean
    section?: 'associations' | 'education' | 'experience' | 'interests' | 'projects' | 'recognitions' | 'skills'
}

export const ContentCell: React.FC<ContentCellProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <StyledContentCell>
            {props.collapsible && (
                <CellControls>
                    <ControlsTitle>{props.section}</ControlsTitle>
                    <ControlsDecorationWrap>
                        {collapsed && <ControlsDecorationForward />}
                        {!collapsed && <ControlsDecorationBackward />}
                    </ControlsDecorationWrap>
                    <ControlsButtonWrap>
                        <Button onClick={toggleCollapse} />
                    </ControlsButtonWrap>
                </CellControls>
            )}
            {collapsed && (
                <CellContentCollapse>
                    {!collapsed && props.children}
                </CellContentCollapse>
            )}
            {!collapsed && (
                <CellContentExpand>
                    {props.children}
                </CellContentExpand>
            )}
        </StyledContentCell>
    )
}

const StyledContentCell = styled.div`
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
  background-color: #E0E5EC;
  box-shadow:  15px 15px 30px #CED3D9, -15px -15px 30px #F2F7FF;
  margin-bottom: 30px;
  transition: height .2s cubic-bezier(0.4, 0.0, 0.2, 1);
`

const CellControls = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const ControlsTitle = styled.div`
  text-transform: capitalize;
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
