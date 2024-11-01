import Image from "next/image";

export default function Feature() {
  return (
    <div className="min-h-screen bg-white pt-28 text-gray-900">
      {/* Core Features Section */}
      <section className="px-8 py-4 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Core Features of Advanced Cash on Delivery
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>

        <section className="mb-12 mt-8 flex justify-center">
          <Image
            src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
            alt="Core Features of Advanced Cash on Delivery"
            width={800} // Adjust width for desired size
            height={400} // Adjust height for desired size
            className="rounded-lg shadow-lg"
          />
        </section>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex flex-col rounded-lg bg-gray-50 p-6  mb-12">
            <div className="mb-6 w-full md:pr-6">
              <h3 className="mb-2 text-xl font-semibold">
                Seamless COD Integration
              </h3>
              <p className="text-gray-600">
                Enable smooth cash on delivery options tailored to your store’s
                needs, ensuring a better customer experience.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
                alt="Seamless COD Integration"
                width={400} // Adjust width for desired size
                height={300} // Adjust height for desired size
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Feature 1 */}
          <div className="flex flex-col rounded-lg bg-gray-50 p-6  mb-12">
            <div className="mb-6 w-full md:pr-6">
              <h3 className="mb-2 text-xl font-semibold">
                Seamless COD Integration
              </h3>
              <p className="text-gray-600">
                Enable smooth cash on delivery options tailored to your store’s
                needs, ensuring a better customer experience.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
                alt="Seamless COD Integration"
                width={400} // Adjust width for desired size
                height={300} // Adjust height for desired size
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Feature 1 */}
          <div className="flex flex-col rounded-lg bg-gray-50 p-6 mb-12">
            <div className="mb-6 w-full md:pr-6">
              <h3 className="mb-2 text-xl font-semibold">
                Seamless COD Integration
              </h3>
              <p className="text-gray-600">
                Enable smooth cash on delivery options tailored to your store’s
                needs, ensuring a better customer experience.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
                alt="Seamless COD Integration"
                width={400} // Adjust width for desired size
                height={300} // Adjust height for desired size
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Feature 1 */}
          <div className="flex flex-col rounded-lg bg-gray-50 p-6  mb-12">
            <div className="mb-6 w-full md:pr-6">
              <h3 className="mb-2 text-xl font-semibold">
                Seamless COD Integration
              </h3>
              <p className="text-gray-600">
                Enable smooth cash on delivery options tailored to your store’s
                needs, ensuring a better customer experience.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
                alt="Seamless COD Integration"
                width={400} // Adjust width for desired size
                height={300} // Adjust height for desired size
                className="rounded-lg"
              />
            </div>
          </div>{" "}
          {/* Feature 1 */}
          <div className="flex flex-col rounded-lg bg-gray-50 p-6  mb-12">
            <div className="mb-6 w-full md:pr-6">
              <h3 className="mb-2 text-xl font-semibold">
                Seamless COD Integration
              </h3>
              <p className="text-gray-600">
                Enable smooth cash on delivery options tailored to your store’s
                needs, ensuring a better customer experience.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
                alt="Seamless COD Integration"
                width={400} // Adjust width for desired size
                height={300} // Adjust height for desired size
                className="rounded-lg"
              />
            </div>
          </div>{" "}
          {/* Feature 1 */}
          <div className="flex flex-col rounded-lg bg-gray-50 p-6  mb-12">
            <div className="mb-6 w-full md:pr-6">
              <h3 className="mb-2 text-xl font-semibold">
                Seamless COD Integration
              </h3>
              <p className="text-gray-600">
                Enable smooth cash on delivery options tailored to your store’s
                needs, ensuring a better customer experience.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/features/features-light-01.png" // Adjust the path if the image is saved differently
                alt="Seamless COD Integration"
                width={400} // Adjust width for desired size
                height={300} // Adjust height for desired size
                className="rounded-lg"
              />
            </div>
          </div>                                                                                            
        </div>
      </section>
    </div>
  );
}
