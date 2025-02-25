import React, { useState } from "react";
import "./style.css";
import { ImageWrapper } from "../image-wrapper";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  imageSrc?: string; // Adiciona a propriedade imageSrc
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, imageSrc }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="tooltip flex flex-col justify-center items-center px-4 py-2">
          {imageSrc && (
            <ImageWrapper
              imageUrl={imageSrc}
              alt="Tooltip icon"
              className="w-full"
            />
          )}
          <div>{text}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
