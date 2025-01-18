import { groupedFeatureSections } from './featureCardData';
import FeatureCard from './featureCard';

export default function Feature() {
  return (
    <div className="min-h-screen bg-white pt-28 text-gray-900">
      {/* Core Features Section */}
      {groupedFeatureSections.map((section, index) => (
        <section key={index} className="px-8 py-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">{section.heading}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">{section.paragraph}</p>

          {/* Feature Cards Section */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {section.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                imageWidth={feature.imageWidth}
                imageHeight={feature.imageHeight}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
