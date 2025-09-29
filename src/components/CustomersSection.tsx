import { Icon } from 'umi';

const CustomersSection = () => {
    const brands = [
        { name: 'Apple', icon: 'fa:apple' },
        { name: 'Google', icon: 'fa:google' },
        { name: 'Microsoft', icon: 'fa:windows' },
        { name: 'Amazon', icon: 'fa:amazon' },
        { name: 'Tesla', icon: 'fa:car' },
        { name: 'Samsung', icon: 'fa:mobile' },
        { name: 'Intel', icon: 'fa:microchip' },
        { name: 'NVIDIA', icon: 'fa:desktop' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trust Text */}
                <div className="text-center mb-6">
                    <h2 className="text-sm font-bold text-gray-900">
                        20,000+ customers in over 120 countries & regions trust [Company Name] to manufacture their custom parts
                    </h2>
                </div>

                {/* Brand Carousel */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll space-x-12">
                        {/* First set of brands */}
                        {brands.map((brand, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center w-32 h-20 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-center">
                                    <Icon icon={brand.icon as any} className="text-3xl text-gray-600 mb-2" />
                                    <div className="text-sm font-medium text-gray-700">{brand.name}</div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {brands.map((brand, index) => (
                            <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center w-32 h-20 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-center">
                                    <Icon icon={brand.icon as any} className="text-3xl text-gray-600 mb-2" />
                                    <div className="text-sm font-medium text-gray-700">{brand.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default CustomersSection;
