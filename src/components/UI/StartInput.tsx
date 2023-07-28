import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface StarInputProps {
  value: number;
  onChange?: (rating: number) => void;
}

const StarInput: React.FC<StarInputProps> = ({
  value,
  onChange = () => {},
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleStarClick = (rating: number) => {
    onChange(rating);
  };

  const handleStarHover = (rating: number) => {
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((rating) => (
        <Icon
          key={rating}
          icon="material-symbols:star"
          className={`cursor-pointer text-amber ${
            (hoverValue || value) >= rating ? "text-amber" : "text-gray"
          }`}
          onClick={() => handleStarClick(rating)}
          onMouseEnter={() => handleStarHover(rating)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarInput;
