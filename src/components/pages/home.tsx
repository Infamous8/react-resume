import React from "react";
import {PageLayout} from "../templates/page-layout";
import {ContentCell} from "../atoms/content-cell";

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentSections = contentData.sections;

    return (
        <PageLayout>
            {contentSections.associations && (
                <ContentCell section={'associations'} collapsible={true}>
                    Associations
                </ContentCell>
            )}
            {contentSections.education && (
                <ContentCell section={'education'} collapsible={true}>
                    Education
                </ContentCell>
            )}
            {contentSections.experience && (
                <ContentCell  section={'experience'} collapsible={true}>
                    Experience
                </ContentCell>
            )}
            {contentSections.interests && (
                <ContentCell  section={'interests'} collapsible={true}>
                    Interests
                </ContentCell>
            )}
            {contentSections.links && (
                <ContentCell  section={'links'} collapsible={true}>
                    Links
                </ContentCell>
            )}
            {contentSections.projects && (
                <ContentCell  section={'projects'} collapsible={true}>
                    Projects
                </ContentCell>
            )}
            {contentSections.recognitions && (
                <ContentCell  section={'recognitions'} collapsible={true}>
                    Recognitions
                </ContentCell>
            )}
            {contentSections.skills && (
                <ContentCell  section={'skills'} collapsible={true}>
                    Skills
                </ContentCell>
            )}
        </PageLayout>
    )
}