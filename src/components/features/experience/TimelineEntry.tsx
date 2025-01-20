import React, { useRef, useEffect } from 'react';
import Chip, { Skill } from '../../common/Chip';

export interface Experience {
    date: string;
    logo?: string;
    title: string;
    company: string;
    details?: string[];
    testimonial?: string;
    skills?: Skill[];
}

interface TimelineEntryProps extends Experience {
    onHeightChange: (index: number, height: number) => void;
    index: number;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
    date,
    logo,
    title,
    company,
    details,
    skills,
    onHeightChange,
    index
}): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect((): void => {
        if (ref.current) {
            onHeightChange(index, ref.current.offsetTop + ref.current.offsetHeight / 2);
        }
    }, [onHeightChange, index]);

    const regularDetails = details?.filter((detail: string): boolean => !detail.includes('"'));
    const testimonial = details?.find((detail: string): boolean => detail.includes('"'));

    return (
        <div ref={ref} className="relative sm:pl-8 mb-8 font-inter">
            <div className="bg-card rounded-lg shadow-md p-4">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <img
                            src={logo}
                            alt={`${company} logo`}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm">{date}</div>
                        <div className="font-semibold text-lg">{title}</div>
                        <div className="font-medium">{company}</div>
                    </div>
                </div>

                {regularDetails && regularDetails.length > 0 && (
                    <ul className="mt-4 space-y-1">
                        {regularDetails.map((detail, index) => (
                            <li key={index} className="text-sm">
                                &bull; {detail}
                            </li>
                        ))}
                    </ul>
                )}

                {testimonial && (
                    <div className="mt-4 p-3 rounded-lg">
                        <blockquote className="text-sm italic">
                            {testimonial}
                        </blockquote>
                    </div>
                )}

                {skills && skills.length > 0 && (
                    <div className="mt-4">
                        <Chip skills={skills} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelineEntry; 