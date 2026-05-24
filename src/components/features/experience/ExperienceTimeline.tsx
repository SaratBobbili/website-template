import React from 'react';
import Timeline from './Timeline';
import { Experience } from './TimelineEntry';
import samsung from '../../../assets/samsung.png';
import tamu from '../../../assets/tamu.png';

const ExperienceTimeline: React.FC = () => {
    const workExperiences: Experience[] = [
        {
            date: 'Current',
            logo: samsung,
            title: 'PhD Student',
            company: 'Research Profile (to be updated)',
            details: [
                'Focus areas: Reinforcement Learning and Agentic AI systems.',
                'Detailed experience entries will be added from resume soon.'
            ],
            skills: [
                { name: 'Python', icon: 'python' },
                { name: 'PyTorch', icon: 'pytorch' },
                { name: 'Linux', icon: 'linux' }
            ],
        },
    ];

    const educationExperiences: Experience[] = [
        {
            date: 'In Progress',
            logo: tamu,
            title: 'PhD Program',
            company: 'Details coming soon',
            details: [
                'Education details will be finalized after resume import.'
            ],
        },
    ];

    return (
        <section id="experience" className="section-container">
            <Timeline experiences={workExperiences} headerText="Work Experience" />
            <div className='my-4 lg:my-10'></div>
            <Timeline experiences={educationExperiences} headerText="Education" />
            <div className='py-4 lg:py-10'></div>
        </section>
    );
};

export default ExperienceTimeline; 