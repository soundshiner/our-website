import React from 'react';
import { Clock, User, Radio } from 'lucide-react';

interface ScheduleSlot {
  time: string;
  show: string;
  host: string;
}

interface ScheduleDay {
  day: string;
  slots: ScheduleSlot[];
}

interface ScheduleTableProps {
  schedule: ScheduleDay[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  return (
    <div className="space-y-8">
      {schedule.map((day, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#9b87f5] to-[#230e4e] px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">{day.day}</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {day.slots.map((slot, slotIndex) => (
              <div key={slotIndex} className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-lg flex items-center justify-center">
                      <Radio className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{slot.show}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{slot.time}</span>
                      </div>
                      {slot.host !== "Auto" && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>avec {slot.host}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      slot.host === "Auto" 
                        ? "bg-gray-100 text-gray-700" 
                        : "bg-[#9b87f5]/10 text-[#9b87f5]"
                    }`}>
                      {slot.host === "Auto" ? "Programmation Continue" : "Émission Live"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;