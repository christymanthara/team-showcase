// RadarChartComponent.jsx
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const RadarChartComponent = ({ skills, memberName }) => {
  // Format the skills data for the radar chart
  const formatSkillsForRadar = (skills) => {
    return skills.map(item => ({
      subject: item.skill,
      A: item.value,
      fullMark: 100
    }));
  };

  return (
    <div className="w-full p-8">
      <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Skills Proficiency</h3>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatSkillsForRadar(skills)}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar 
              name={memberName} 
              dataKey="A" 
              stroke="#6366F1" 
              fill="#818CF8" 
              fillOpacity={0.6} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Skills List */}
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-indigo-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-indigo-800">{skill.skill}</span>
                <span className="text-indigo-700 font-bold">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadarChartComponent;