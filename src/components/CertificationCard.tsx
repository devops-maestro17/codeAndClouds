import React from 'react';
import { Award } from 'lucide-react';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
}

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  credentialUrl,
  image
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <img
            src={image}
            alt={issuer}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.src = '';
              e.currentTarget.className = 'hidden';
              e.currentTarget.parentElement!.innerHTML = '<Award className="w-6 h-6 text-blue-600" />';
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 mb-2">{issuer}</p>
          <p className="text-sm text-gray-500 mb-3">Issued {date}</p>
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
          >
            View Credential
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;