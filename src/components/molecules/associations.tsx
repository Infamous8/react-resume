import React from "react";
import styled from "styled-components";
import {SectionContent} from "../atoms/section-content";

interface AssociationsProps {}

interface AssociationProps {
    name: string
    relationShip: string
    description: string
}

export const Associations: React.FC<AssociationsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.associations.content;
    const Associations = contentSections.map((item: AssociationProps) => {
        return (
            <SectionContent key={item.name} name={item.name} relationship={item.relationShip} description={item.description} />
        )
    })
    return (
        <>
            {Associations}
        </>
    )
}

const AssociationItem: React.FC<AssociationProps> = (props) => {
    return (
        <StyledAssociationItem>
            {props.name}
            {props.relationShip}
        </StyledAssociationItem>
    )
}

const StyledAssociationItem = styled.div``