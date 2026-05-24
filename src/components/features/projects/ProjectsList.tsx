import { Button } from "../../common/ui/button";
import { useState } from 'react';
import Header from "../../layout/Header";
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import homeImg from '../../../assets/homeImg.svg'

const ProjectsList: React.FC = (): JSX.Element => {
    const [showAll, setShowAll] = useState<boolean>(false);
    
    const projects: ProjectCardProps[] = [
        {
            title: 'ECHO',
            description: <>Featured ML project. Add a concise summary, problem statement, and outcomes here.</>,
            image: homeImg,
            githubUrl: 'https://github.com/SaratBobbili',
            technologies: [
                { name: 'Python', icon: 'python' },
                { name: 'PyTorch', icon: 'pytorch' }
            ]
        },
        {
            title: 'PITA',
            description: <>Featured RL/Agentic AI project. Add details, architecture highlights, and results here.</>,
            image: homeImg,
            githubUrl: 'https://github.com/SaratBobbili',
            technologies: [
                { name: 'Python', icon: 'python' },
                { name: 'Hugging Face', icon: 'huggingface' }
            ]
        },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section className="section-container">
            <Header text="Projects" />
            <p className="text-center md:text-left font-inter italic my-2 lg:my-4">
                Featured projects are placeholders and will be expanded.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            {projects.length > 3 && (
                <div className="flex justify-center mt-6">
                    <Button 
                        className="border-2 shadow-sm hover:shadow-md transition-shadow px-6 py-2 text-lg font-medium"
                        variant="outline" 
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </Button>
                </div>
            )}
        </section>
    );
};

export default ProjectsList; 