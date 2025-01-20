export interface Skill {
    name: string;
    icon: string;
}

interface ChipProps {
    skills: Skill[];
}

const Chip: React.FC<ChipProps> = ({ skills }) => {
    return (
        <div className="flex flex-row gap-2 flex-wrap">
            {skills.map((skill, i) => (
                <div
                    key={i}
                    className="flex flex-row items-center gap-1 border rounded-md px-1.5 border-gray-600"
                >
                    <img className="w-3 h-3" src={`https://cdn.simpleicons.org/${skill.icon}`} />
                    <div className="text-xs">{skill.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Chip;
