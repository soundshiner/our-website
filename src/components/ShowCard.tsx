import React from 'react';
import { Clock, User } from 'lucide-react';

interface ShowCardProps {
  name: string;
  time: string;
  description: string;
  host: string;
  image?: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ name, time, description, host, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-lg flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <User className="w-8 h-8 text-white" />
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <div className="flex items-center gap-1 text-[#9b87f5] bg-[#9b87f5]/10 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              <small className="font-medium">{time}</small>
            </div>
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>
          <div className="flex items-center gap-1 text-gray-600">
            <User className="w-4 h-4" />
            <span className="text-sm">Animé par {host}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;