import React from "react";
import {SectionContent} from "../atoms/section-content";

interface ExperiencesProps {}

interface ExperienceProps {
    name: string
    years: string
    description: string
    primary: boolean
}

export const Experience: React.FC<ExperiencesProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.experience.content;
    const Experience = contentSections.map((item: ExperienceProps) => {
        return (
            <SectionContent key={item.name} name={item.name} years={item.years} description={item.description} />
        )
    })
    return (
        <>
            {Experience}
        </>
    )
}