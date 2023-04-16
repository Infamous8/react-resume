import React from "react";
import styled from "styled-components";
import {SectionContent} from "../atoms/section-content";

interface ProjectsProps {}

interface ProjectProps {
    name: string
    years: string
    link: string
    description: string
}

export const Projects: React.FC<ProjectsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.projects.content;
    const Projects = contentSections.map((item: ProjectProps) => {
        return (
            <SectionContent key={item.name} name={item.name} years={item.years} description={item.description} link={item.link} />
        )
    })
    return (
        <>
            {Projects}
        </>
    )
}

const ProjectItem: React.FC<ProjectProps> = (props) => {
    return (
        <StyledProjectItem>
            Project: {props.name}
            {props.years !== "" && props.years}
            {props.link !== "" && props.link}
        </StyledProjectItem>
    )
}

const StyledProjectItem = styled.div``