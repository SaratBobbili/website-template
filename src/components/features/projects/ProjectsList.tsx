import Header from '../../layout/Header';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import homeImg from '../../../assets/homeImg.svg';

const ProjectsList: React.FC = (): JSX.Element => {
    const projects: ProjectCardProps[] = [
        {
            title: 'RLMBoost',
            description: <>Initial featured project. More project details and additional entries will be added soon.</>,
            image: homeImg,
            githubUrl: 'https://github.com/SaratBobbili/rlm-lens',
            technologies: [
                { name: 'Python', icon: 'python' },
                { name: 'PyTorch', icon: 'pytorch' }
            ]
        }
    ];

    return (
        <section className="section-container">
            <Header text="Projects" />
            <p className="text-center md:text-left font-inter italic my-2 lg:my-4">
                Project thumbnail is currently a placeholder and can be replaced later.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsList;
