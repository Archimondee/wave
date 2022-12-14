import colors from "configs/colors";
import React, { memo } from "react";
import StarRating from "react-native-star-rating-widget";

interface StarRatingProps {
  onChange: (args1: number) => void;
  rating: number;
  style?: any;
  size: number;
}

const StarRatingWidget = ({
  onChange,
  rating,
  style,
  size,
}: StarRatingProps) => {
  return (
    <StarRating
      style={style}
      rating={rating}
      onChange={onChange}
      starSize={size || 20}
      color={colors.primary500}
      minRating={1}
      enableHalfStar={false}
    />
  );
};

export default memo(StarRatingWidget);
