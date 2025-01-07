import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DashboardMetrics = () => {
  const metrics = [
    {
      title: 'Total Products',
      value: '150',
      icon: <FontAwesomeIcon icon={faBox} className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      </div>
    </div>
  )
}