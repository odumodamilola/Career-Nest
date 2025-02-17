import React, { useState, useEffect } from 'react';

const StatsDashboard = () => {
  const [counts, setCounts] = useState([
    { current: 0, target: 350, label: "SUCCESSFUL STUDENTS" },
    { current: 0, target: 215, label: "VIDEO TUTORIALS" },
    { current: 0, target: 150, label: "INCREDIBLE MENTORS" },
    { current: 0, target: 785, label: "UNIQUE PROGRAMS" },
  ]);

  useEffect(() => {
    const animateCounters = () => {
      setCounts(prev => prev.map(item => {
        const increment = Math.ceil(item.target / 50);
        return {
          ...item,
          current: Math.min(item.current + increment, item.target)
        };
      }));
    };

    const interval = setInterval(animateCounters, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center p-4 mt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-6 my-10" >
        {counts.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] p-8 text-center transition-all hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)]"
            style={{
              border: '1px solid rgba(237, 237, 237, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '35px',
            }}
          >
            <div 
              className="text-[2.75rem] font-bold text-[#2f2e41] mb-4"
              style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
            >
              {item.current.toLocaleString()}+
            </div>
            <div 
              className="text-[0.95rem] text-[#6c6b80] font-medium uppercase tracking-[0.1em]"
              style={{ letterSpacing: '0.15em' }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsDashboard;