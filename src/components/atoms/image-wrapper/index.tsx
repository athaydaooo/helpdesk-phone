import { clsx } from "clsx";
import Image from "next/image";
import * as React from "react";

interface ImageWrapperProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  imageUrl,
  alt = "",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        className,
        "relative",
        "max-w-full",
        "aspect-[1.22]",
        "self-center"
      )}
    >
      <Image src={imageUrl} layout="fill" objectFit="contain" alt={alt} />
    </div>
  );
};
