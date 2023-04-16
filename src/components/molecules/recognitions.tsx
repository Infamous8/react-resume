import React from "react";
import {SectionContent} from "../atoms/section-content";

interface RecognitionsProps {}

interface RecognitionProps {
    name: string
    year: string
    description: string
}

export const Recognitions: React.FC<RecognitionsProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections.recognitions.content;
    const Recognitions = contentSections.map((item: RecognitionProps) => {
        return (
            <SectionContent key={item.name} name={item.name} years={item.year} description={item.description} />
        )
    })
    return (
        <>
            {Recognitions}
        </>
    )
}
