import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 mb-12 ${className}`}>
      {title}
    </h2>
  );
};

export default SectionTitle;