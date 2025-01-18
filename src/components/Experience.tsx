import React, { useRef, useEffect, useState } from 'react';
import Header from './utils/Header';
import charlesSchwab from '../assets/charlesschwab.png';
import resideo from '../assets/resideo.jpg';
import samsung from '../assets/samsung.png';
import tamu from '../assets/tamu.png';

interface Experience {
    date: string;
    logo?: string;
    title: string;
    company: string;
    details?: string[];
    testimonial?: string;
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
    onHeightChange, 
    index 
  }) => {
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (ref.current) {
        onHeightChange(index, ref.current.offsetTop + ref.current.offsetHeight / 2);
      }
    }, [onHeightChange, index]);
  
    const regularDetails = details?.filter(detail => !detail.includes('"'));
    const testimonial = details?.find(detail => detail.includes('"'));
  
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
        </div>
      </div>
    );
  };

interface TimelineProps {
  experiences: Experience[];
  headerText: string;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, headerText }) => {
  const [dotPositions, setDotPositions] = useState<number[]>([]);

  const updateDotPosition = (index: number, position: number) => {
    setDotPositions((prev) => {
      const updated = [...prev];
      updated[index] = position;
      return updated;
    });
  };

  return (
    <>
      <Header text={headerText} />
      <div className='my-4 lg:my-6'></div>
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

const WorkExperienceTimeline: React.FC = () => {
    const workExperiences: Experience[] = [
      {
        date: 'Summer 2024',
        logo: samsung,
        title: 'Software Engineer Intern',
        company: 'Samsung',
        details: [
          'Created a company knowledge base chatbot using Python and Llama 3 with Retrieval-Augmented Generation (RAG) on 100,000+ Jira/Confluence pages, enabling users to utilize GenAI with up to date proprietary information',
          'Implemented authentication with Okta and session storage in MongoDB, ensuring end-to-end privacy for highly confidential R&D data while enabling seamless retrieval of 3000+ conversations per month',
          'Facilitated rollout to 500 employees by writing Infrastructure as Code (IaC) to deploy 5 systemd services on 2 A100 servers and leveraged NGINX for Load Balancing and High Availability',
          '"Dylan did an excellent job, he accomplished a lot and closed many tickets in a short amount of time." - Staff Engineer',
        ],
      },
      {
        date: 'Summer 2023',
        logo: resideo,
        title: 'Software Engineer Intern',
        company: 'Resideo',
        details: [
          'Implemented a workflow observability solution for doorbell camera registrations using the ElasticSearch .NET SDK, eliminating unnecessary debugging meetings and saving engineering hours for 6 other developers',
          'Executed a list of 10+ tickets for bug fixes and enhancements in an internal React app to provide over 8 dependent teams with streamlined backend system interactions for IoT device management',
          'Resolved frequent instability issues with IoT device simulators by migrating to server side pagination with .NET, SQL Server and REST APIs, ensuring visibility into 7+ end to end testing processes',
          '"Dylan\'s quick grasp of new technologies, strong teamwork, and commitment to completing tasks make him a valuable addition to any team. His punctuality, communication skills, and initiative set him apart. ... I\'m confident he\'ll excel in any future endeavors." - Senior Engineer',
        ],
      },
      {
        date: 'Summer 2022',
        logo: charlesSchwab,
        title: 'Software Engineer Intern',
        company: 'Charles Schwab',
        details: [
          'Developed tailored features for 3 user groups in a client-facing web-app with Angular and .NET, transitioning a by-mail voting process to digital for over 10,000 advisors on Schwab Advisor Services platform',
          'Directed a cross-functional team during a company wide Business Summit Challenge, presenting an innovative product idea to leadership and earning 1st place among all intern group',
          '"Dylan did a great job working on this. He worked independently, followed good engineering practices, and delivered clean code in a timely manner. ... He is a solid engineer, a motivated individual, and a great team player." - My Manager',
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
  
export default WorkExperienceTimeline;