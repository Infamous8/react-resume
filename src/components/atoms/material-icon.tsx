import React from "react";
import styled from "styled-components";

interface MaterialIconPhoneProps {
    name: 'call' | 'mail' | 'expand_more' | 'arrow_back_ios'
}

export const MaterialIcon: React.FC<MaterialIconPhoneProps> = (props) => {
    return (
        <StyledMaterialIcon>
            <span className={'material-symbols-outlined'}>{props.name}</span>
        </StyledMaterialIcon>


    )
}

const StyledMaterialIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`