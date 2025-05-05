import { IconType } from 'react-icons';

interface SkillBarProps {
    skill: string;
    level: number; // de 0 a 100
    icon?: IconType;
}

export default function SkillBar({ skill, level, icon: Icon }: SkillBarProps) {
    return (
        <div className='transition-all duration-700 ease-in-out transform hover:scale-[1.02]'>
            <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
                <div className='flex items-center gap-2'>
                    {Icon && <Icon className='text-blue-600 text-lg'/>}
                    <span>{skill}</span>
                </div>
                <span className="text-gray-500">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}
