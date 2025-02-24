import React from "react";
import clsx from "clsx";
import "./style.css";

interface LoadingSpinnerProps {
  heightClass: string;
  widhtClass: string;
  borderTopColorClass?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  heightClass,
  widhtClass,
  borderTopColorClass = "border-t-white",
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        heightClass,
        widhtClass,
        `!${borderTopColorClass}`,
        "loading-spinner"
      )}
    />
  );
};

export default LoadingSpinner;
