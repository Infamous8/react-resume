import React from "react";
import {PageLayout} from "../templates/page-layout";
import {ContentCell} from "../atoms/content-cell";

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections;

    return (
        <PageLayout>
            {contentSections.education.show && (
                <ContentCell section={'education'} collapsible={true} collapsedDefault={false} >
                    Education
                </ContentCell>
            )}
            {contentSections.experience.show && (
                <ContentCell  section={'experience'} collapsible={true} collapsedDefault={false}>
                    Experience
                </ContentCell>
            )}
            {contentSections.skills.show && (
                <ContentCell  section={'skills'} collapsible={true} collapsedDefault={false}>
                    Skills
                </ContentCell>
            )}
            {contentSections.projects.show && (
                <ContentCell  section={'projects'} collapsible={true} collapsedDefault={true}>
                    Projects
                </ContentCell>
            )}
            {contentSections.associations.show && (
                <ContentCell section={'associations'} collapsible={true} collapsedDefault={true}>
                    Associations
                </ContentCell>
            )}
            {contentSections.interests.show && (
                <ContentCell  section={'interests'} collapsible={true} collapsedDefault={true}>
                    Interests
                </ContentCell>
            )}
            {contentSections.recognitions.show && (
                <ContentCell  section={'recognitions'} collapsible={true} collapsedDefault={true}>
                    Recognitions
                </ContentCell>
            )}
        </PageLayout>
    )
}