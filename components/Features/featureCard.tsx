import Image from "next/image";

// Defining the TypeScript interface for the component's props
interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

// React Functional Component with structured props
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}) => {
  return (
    // Main container for the feature card with spacing and background color
    <div className="flex flex-col border border-gray-200 rounded-lg bg-white p-6 mb-12 hover:shadow-lg transition-shadow">
      {/* Title and description section */}
      <div className="mb-4 md:mb-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Image section */}
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
