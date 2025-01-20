import { Card, CardContent, CardHeader, CardFooter } from "../../common/ui/card";
import { Button } from "../../common/ui/button";
import Chip, { Skill } from "../../common/Chip";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../common/ui/tooltip";

export interface ProjectCardProps {
    image: string;
    title: string;
    description: React.ReactNode;
    technologies: Skill[];
    githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, technologies, githubUrl }) => {
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
};

export default ProjectCard; 