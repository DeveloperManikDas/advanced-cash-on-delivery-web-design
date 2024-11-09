import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-50 p-6 mb-12">
      <div className="mb-6 w-full md:pr-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
