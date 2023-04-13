import React from "react";
import {PageLayout} from "../templates/page-layout";
import {ContentCell} from "../atoms/content-cell";

interface HomeProps {}

interface EducationProps {
    name: string
    years: string
}

interface ExperienceProps {
    name: string
    years: string
}

interface SkillsProps {
    name: string
}

interface ProjectsProps {
    name: string
    years: string
    link: string
}

interface AssociationProps {
    name: string
    relationShip: string
}

interface InterestProps {
    name: string
    reason: string
}

interface RecognitionProps {
    name: string
    year: string
    description: string
}

export const Home: React.FC<HomeProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections;

    const Education = contentSections.education.content.map((item: EducationProps) => {
        return (
            <div key={item.name}>
                Qualification: {item.name}
                Years: {item.years}
            </div>
        )
    })

    const Experience = contentSections.experience.content.map((item: ExperienceProps) => {
        return (
            <div key={item.name}>
                Experience: {item.name}
                Years: {item.years}
            </div>
        )
    })

    const Skills = contentSections.skills.content.map((item: SkillsProps) => {
        return (
            <span key={item.name}>{item.name}</span>
        )
    })

    const Projects = contentSections.projects.content.map((item: ProjectsProps) => {
        return (
            <div key={item.name}>
                Project: {item.name}
                {item.years !== "" && item.years}
                {item.link !== "" && item.link}
            </div>
        )
    })

    const Associations = contentSections.associations.content.map((item: AssociationProps) => {
        return (
            <div key={item.name}>
                {item.name}
                {item.relationShip}
            </div>
        )
    })

    const Interests = contentSections.interests.content.map((item: InterestProps) => {
        return (
            <div key={item.name}>
                {item.name}
                {item.reason}
            </div>
        )
    })

    const Recognitions = contentSections.recognitions.content.map((item: RecognitionProps) => {
        return (
            <div key={item.name}>
                {item.name}
                {item.year !== "" && item.year}
                {item.description !== "" && item.description}
            </div>
        )
    })

    return (
        <PageLayout>
            {contentSections.education.show && (
                <ContentCell section={'education'} collapsible={true} collapsedDefault={false} >
                    {Education}
                </ContentCell>
            )}
            {contentSections.experience.show && (
                <ContentCell  section={'experience'} collapsible={true} collapsedDefault={false}>
                    {Experience}
                </ContentCell>
            )}
            {contentSections.skills.show && (
                <ContentCell  section={'skills'} collapsible={true} collapsedDefault={false}>
                    {Skills}
                </ContentCell>
            )}
            {contentSections.projects.show && (
                <ContentCell  section={'projects'} collapsible={true} collapsedDefault={true}>
                    {Projects}
                </ContentCell>
            )}
            {contentSections.associations.show && (
                <ContentCell section={'associations'} collapsible={true} collapsedDefault={true}>
                    {Associations}
                </ContentCell>
            )}
            {contentSections.interests.show && (
                <ContentCell  section={'interests'} collapsible={true} collapsedDefault={true}>
                    {Interests}
                </ContentCell>
            )}
            {contentSections.recognitions.show && (
                <ContentCell  section={'recognitions'} collapsible={true} collapsedDefault={true}>
                    {Recognitions}
                </ContentCell>
            )}
        </PageLayout>
    )
}