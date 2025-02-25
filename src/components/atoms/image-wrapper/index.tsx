import { clsx } from "clsx";
import Image from "next/image";
import * as React from "react";

interface ImageWrapperProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  imageUrl,
  alt = "",
  className = "",
  priority = false,
}) => {
  return (
    <div
      className={clsx(
        className,
        "relative max-w-full aspect-[1.22] self-center"
      )}
    >
      <Image
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "contain" }}
        alt={alt}
        priority={priority}
      />
    </div>
  );
};
