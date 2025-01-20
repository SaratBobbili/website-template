import React from 'react';
import Timeline from './Timeline';
import { Experience } from './TimelineEntry';
import charlesSchwab from '../../../assets/charlesschwab.png';
import resideo from '../../../assets/resideo.jpg';
import samsung from '../../../assets/samsung.png';
import tamu from '../../../assets/tamu.png';

const ExperienceTimeline: React.FC = () => {
    const workExperiences: Experience[] = [
        {
            date: 'Summer 2024',
            logo: samsung,
            title: 'Software Engineer Intern',
            company: 'Samsung',
            details: [
                '"Dylan did an excellent job, he accomplished a lot and closed many tickets in a short amount of time." - Staff Engineer',
            ],
            skills: [
                { name: 'Python', icon: 'python' },
                { name: 'Linux', icon: 'linux' },
                { name: 'PyTorch', icon: 'pytorch' },
                { name: 'Hugging Face', icon: 'huggingface'},
                { name: 'MongoDB', icon: 'mongodb' },
            ],
        },
        {
            date: 'Summer 2023',
            logo: resideo,
            title: 'Software Engineer Intern',
            company: 'Resideo',
            details: [
                '"Dylan\'s quick grasp of new technologies, strong teamwork, and commitment to completing tasks make him a valuable addition to any team. His punctuality, communication skills, and initiative set him apart. ... I\'m confident he\'ll excel in any future endeavors." - Senior Engineer',
            ],
            skills: [
                { name: '.NET', icon: 'dotnet' },
                { name: 'React', icon: 'react' },
                { name: 'Elasticsearch', icon: 'elasticsearch' },
                { name: 'PostgreSQL', icon: 'postgresql' },
                { name: 'Kubernetes', icon: 'kubernetes' },
            ],
        },
        {
            date: 'Summer 2022',
            logo: charlesSchwab,
            title: 'Software Engineer Intern',
            company: 'Charles Schwab',
            details: [
                '"Dylan did a great job working on this. He worked independently, followed good engineering practices, and delivered clean code in a timely manner. ... He is a solid engineer, a motivated individual, and a great team player." - My Manager',
            ],
            skills: [
                { name: '.NET', icon: 'dotnet' },
                { name: 'Angular', icon: 'angular' },
                { name: 'TypeScript', icon: 'typescript'}
            ],
        },
    ];

    const educationExperiences: Experience[] = [
        {
            date: '2023 - 2025',
            logo: tamu,
            title: 'Master of Computer Science',
            company: 'Texas A&M University',
            details: [
                'Courses: Machine Learning, Deep Learning, Reinforcement Learning, Large Language Models, Trustworthy NLP, Computer Vision',
                'GPA: 3.75'
            ],
        },
        {
            date: '2019 - 2023',
            logo: tamu,
            title: 'Bachelor of Science in Computer Science',
            company: 'Texas A&M University',
            details: [
                'Courses: SR Capstone Design, Competitive Programming, Software Engineering, Computer Graphics, Computer & Network Security',
                'GPA: 3.53'
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