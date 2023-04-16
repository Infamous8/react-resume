import React from "react";
import {SectionContent} from "../atoms/section-content";

interface InterestsProps {}

interface InterestProps {
    name: string
    reason: string
}

export const Interests: React.FC<InterestsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.interests.content;
    const Interests = contentSections.map((item: InterestProps) => {
        return (
            <SectionContent key={item.name} name={item.name} description={item.reason} />
        )
    })
    return (
        <>
            {Interests}
        </>
    )
}
