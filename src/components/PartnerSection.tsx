import { Icon } from 'umi';
import { useState, useEffect } from 'react';

const PartnerSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const advantages = [
        {
            number: "5000㎡",
            text: "Facotry in Total"
        },
        {
            number: "20,000+",
            text: "Customers Worldwide"
        },
        {
            number: "120+",
            text: "Countries & Regions Served"
        }
    ];

    const carouselItems = [
        { icon: 'fa:industry', title: 'Manufacturing Excellence' },
        { icon: 'fa:globe', title: 'Global Reach' },
        { icon: 'fa:shipping-fast', title: 'Fast Delivery' },
        { icon: 'fa:users', title: 'Expert Team' },
        { icon: 'fa:quality', title: 'Quality Assurance' },
        { icon: 'fa:clock', title: '24/7 Support' }
    ];

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const goToSlide = (index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content - 60% */}
                    <div className="lg:col-span-7">
                        <div className="w-4/5">
                            {/* Main Title */}
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                                Your Trusted Manufacturing Partner in China. Global Shipping
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                Based in China, RapidDirect combines in-house production with a network of over 700 vetted local suppliers to deliver fast, high-quality on-demand manufacturing solutions. As a leading China-based hub, we provide global shipping with delivery to North America and Europe in as little as 3–10 days. With English-speaking project engineers and fast response times, we support customers across time zones to keep production running smoothly.
                            </p>
                        </div>

                        {/* Advantages Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="text-left">
                                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                                        {advantage.number}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {advantage.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - 40% - Carousel */}
                    <div className="lg:col-span-5">
                        <div className="relative w-[36rem] h-[32rem] mx-auto overflow-hidden">
                            {/* Slides Container */}
                            <div
                                className="flex h-full transition-transform duration-600 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {carouselItems.map((item, index) => (
                                    <div key={index} className="w-full h-full flex-shrink-0 px-4">
                                        <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                                            <div className="text-center">
                                                <Icon icon={item.icon as any} className="text-9xl text-blue-600 mb-4" />
                                                <div className="text-3xl font-medium text-gray-700">{item.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons - Overlay */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                            >
                                <Icon icon="fa:chevron-left" className="text-white text-2xl drop-shadow-lg" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                            >
                                <Icon icon="fa:chevron-right" className="text-white text-2xl drop-shadow-lg" />
                            </button>

                            {/* Dots Indicator - Bottom Overlay */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {carouselItems.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-blue-600' : 'bg-white/70'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PartnerSection;
