import { Button } from "../../common/ui/button";
import { useState } from 'react';
import Header from "../../layout/Header";
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import storyllamas from '../../../assets/storyllamas.jpg'
import llama32c from '../../../assets/llama32c.jpg'
import pydetectgpt from '../../../assets/pydetectgpt.png'
import capstone from '../../../assets/capstone.jpg'
import horticulture from '../../../assets/horticulture.jpg'

const ProjectsList: React.FC = (): JSX.Element => {
    const [showAll, setShowAll] = useState<boolean>(false);
    
    const projects: ProjectCardProps[] = [
        {
            title: "Llama 3.2.c",
            description: <>Inference Llama 3.2 models in 1 file of raw c</>,
            image: llama32c,
            githubUrl: "https://github.com/Dylan-Harden3/Llama3.2.c",
            technologies: [
                { name: "C", icon: "c" }
            ]
        },
        {
            title: "PyDetectGPT",
            description: <>An easy to use python package for detecting ai generated text. Check it out on <a href="https://pypi.org/project/pydetectgpt/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PyPI</a></>,
            image: pydetectgpt,
            githubUrl: "https://github.com/Dylan-Harden3/PyDetectGPT",
            technologies: [
                { name: "PyTorch", icon: "pytorch" },
                { name: "Hugging Face", icon: "huggingface" }
            ]
        },
        {
            title: "Global Path Planning",
            description: <>Navigation for Texas A&M's <a href="http://autodrive.tamu.edu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Autonomous Vehicle</a></>,
            image: capstone,
            technologies: [
                { name: "Python", icon: "python" },
                { name: "Flask", icon: "flask" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" }
            ]
        },
        {
            title: "StoryLlamas",
            description: <>Pre trained 3 miniature llama3s to generate short stories on my humble 1x8GB 2070 GPU</>,
            image: storyllamas,
            githubUrl: "https://github.com/Dylan-Harden3/StoryLlamas",
            technologies: [
                { name: "PyTorch", icon: "pytorch" }
            ]
        },
        {
            title: "Horticulture Club Site/App",
            description: <>Created a website with an event calendar and a member attendence app for a student org</>,
            image: horticulture,
            technologies: [
                { name: "React", icon: "react" },
                { name: "Rails", icon: "rubyonrails" },
                { name: "AWS S3", icon: "amazons3" },
                { name: "Docker", icon: "docker" }
            ]
        },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section className="section-container">
            <Header text="Projects" />
            <p className="text-center md:text-left font-inter italic my-2 lg:my-4">
                All thumbnails generated with <a className="underline" href="https://huggingface.co/black-forest-labs/FLUX.1-dev" target="_blank">FLUX.1-dev</a>*
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