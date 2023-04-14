import React from "react";
import {SectionContent} from "../atoms/section-content";

interface EducationsProps {}

interface EducationProps {
    name: string
    years: string
    description: string
}

export const Education: React.FC<EducationsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.education.content;
    const Education = contentSections.map((item: EducationProps) => {
        return (
            <SectionContent key={item.name} name={item.name} years={item.years} description={item.description} />
        )
    })
    return (
        <>
            {Education}
        </>
    )
}
