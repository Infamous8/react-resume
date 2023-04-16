import React from "react";
import {SectionInlineContent} from "../atoms/section-inline-content";

interface SkillsProps {}

interface SkillProps {
    name: string
    years: string
    primary: boolean
}

export const Skills: React.FC<SkillsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.skills.content;
    const Skills = contentSections.map((item: SkillProps) => {
        return (
            <SectionInlineContent key={item.name} name={item.name} years={item.years} primary={item.primary} />
        )
    })
    return (
        <>
            {Skills}
        </>
    )
}
