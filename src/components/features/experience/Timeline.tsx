import React, { useState, useCallback } from 'react';
import Header from '../../layout/Header';
import TimelineEntry, { Experience } from './TimelineEntry';

interface TimelineProps {
    experiences: Experience[];
    headerText: string;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, headerText }): JSX.Element => {
    const [dotPositions, setDotPositions] = useState<number[]>([]);

    const updateDotPosition = useCallback((index: number, position: number): void => {
        setDotPositions((prev: number[]): number[] => {
            const updated = [...prev];
            updated[index] = position;
            return updated;
        });
    }, []);

    return (
        <>
            <Header text={headerText} />
            <div className="my-4 lg:my-6"></div>
            <div className="relative">
                <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-300 hidden sm:block">
                    {dotPositions.map((position, index) => (
                        <div
                            key={index}
                            className="absolute h-3 w-3 rounded-full bg-secondary border-2 border-white"
                            style={{ top: `${position}px`, left: '-0.375rem' }}
                        />
                    ))}
                </div>
                {experiences.map((experience, index) => (
                    <TimelineEntry
                        key={index}
                        {...experience}
                        index={index}
                        onHeightChange={updateDotPosition}
                    />
                ))}
            </div>
        </>
    );
};

export default Timeline; 