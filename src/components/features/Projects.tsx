import { Card, CardContent, CardHeader, CardFooter } from "../common/ui/card";
import { Button } from "../common/ui/button";
import Chip, { Skill } from "../common/Chip";
import storyllamas from '../../assets/storyllamas.jpg'
import llama32c from '../../assets/llama32c.jpg'
import pydetectgpt from '../../assets/pydetectgpt.png'
import capstone from '../../assets/capstone.jpg'
import horticulture from '../../assets/horticulture.jpg'
import Header from "../layout/Header";
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../common/ui/tooltip";

interface ProjectCardProps {
    image: string;
    title: string;
    description: React.ReactNode;
    technologies: Skill[];
    githubUrl?: string;
}

function ProjectCard({ image, title, description, technologies, githubUrl }: ProjectCardProps) {
    return (
        <Card className="font-inter w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
            <div className="relative w-full h-48">
                <img
                    src={image}
                    alt={`${title} project thumbnail`}
                    className="absolute w-full h-full object-cover min-h-full"
                />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <CardHeader className="flex flex-row justify-between items-center">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    aria-label="GitHub"
                                    className={!githubUrl ? "cursor-not-allowed opacity-50" : ""}
                                    onClick={(e) => {
                                        if (githubUrl) {
                                            window.open(githubUrl, '_blank');
                                        } else {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </Button>
                            </TooltipTrigger>
                            {!githubUrl && (
                                <TooltipContent>
                                    This project's source code is private
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </TooltipProvider>
                </CardHeader>
                <CardContent>
                    <div className="prose">{description}</div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <Chip key={index} skills={[tech]} />
                    ))}
                </CardFooter>
            </div>
        </Card>
    );
}

export default function ProjectsList() {
    const [showAll, setShowAll] = useState(false);
    
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
}