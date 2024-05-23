import React, { useState } from 'react';
import Star from './Star';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};
const starContainerStyle = {
  display: 'flex',
  gap: '4px',
};

const StarRating = ({ maxRating = 5, color = '#fcc419', size = 18 }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color: color,
  };
  return (
    <div style={containerStyle} className="flex items-center justify-between">
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle} className="w-3 text-sm md:text-base">
        {tempRating || rating || ''}
      </p>
    </div>
  );
};

export default StarRating;
