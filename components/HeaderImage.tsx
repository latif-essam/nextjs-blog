import React from "react";
import Image, { StaticImageData } from "next/image";

const HeaderImage: React.FC<{ title: string; image: StaticImageData }> = ({
  title,
  image,
}) => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <Image
        src={image}
        alt="Header Image"
        layout="fill"
        objectFit="cover"
        priority
        quality={70}
        className="absolute inset-0"
      />
      <h1 className="relative z-10 text-white text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
        {title}
      </h1>
    </div>
  );
};

export default HeaderImage;
