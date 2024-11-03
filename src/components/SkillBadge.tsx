import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="px-4 py-2 bg-white shadow-md rounded-lg text-gray-800 hover:shadow-lg transition-shadow">
      {skill}
    </div>
  );
};

export default SkillBadge;