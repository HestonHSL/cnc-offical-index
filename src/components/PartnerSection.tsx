import { Icon } from 'umi';
import { useState, useEffect } from 'react';
import factory1 from '../assets/PartnerSection/factory-1.jpg';
import factory2 from '../assets/PartnerSection/factory-2.jpg';
import factory3 from '../assets/PartnerSection/factory-3.jpg';

const PartnerSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const advantages = [
        {
            number: "2000㎡",
            text: "Factory in Total"
        },
        {
            number: "5000+",
            text: "Customers Worldwide"
        },
        {
            number: "25+",
            text: "Countries & Regions Served"
        }
    ];

    const carouselItems = [
        { image: factory1, title: 'Modern CNC Manufacturing' },
        { image: factory2, title: 'Advanced Production Lines' },
        { image: factory3, title: 'Precision Machining Center' }
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
                                Based in China, [Company Name] combines in-house production with a network of over 700 vetted local suppliers to deliver fast, high-quality on-demand manufacturing solutions. As a leading China-based hub, we provide global shipping with delivery to North America and Europe in as little as 3–10 days. With English-speaking project engineers and fast response times, we support customers across time zones to keep production running smoothly.
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
                                        <div className="w-full h-full rounded-lg overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                                <div className="text-white text-2xl font-semibold">{item.title}</div>
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
