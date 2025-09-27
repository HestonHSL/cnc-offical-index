import { Icon } from 'umi';
import { useState } from 'react';

const CustomerStoriesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const stories = [
        {
            category: 'Robotics',
            company: 'UIUC Irobotics',
            logo: 'https://via.placeholder.com/94x40/3B82F6/FFFFFF?text=UIUC',
            image: 'https://via.placeholder.com/636x471/1E40AF/FFFFFF?text=Robotics+Project',
            link: '#'
        },
        {
            category: 'Automotive',
            company: 'Tesla Motors',
            logo: 'https://via.placeholder.com/94x40/000000/FFFFFF?text=TESLA',
            image: 'https://via.placeholder.com/636x471/4A90E2/FFFFFF?text=Automotive+Parts',
            link: '#'
        },
        {
            category: 'Aerospace',
            company: 'SpaceX',
            logo: 'https://via.placeholder.com/94x40/000000/FFFFFF?text=SPACEX',
            image: 'https://via.placeholder.com/636x471/FF6B6B/FFFFFF?text=Aerospace+Components',
            link: '#'
        },
        {
            category: 'Medical',
            company: 'MedTech Inc',
            logo: 'https://via.placeholder.com/94x40/00C853/FFFFFF?text=MEDTECH',
            image: 'https://via.placeholder.com/636x471/9C27B0/FFFFFF?text=Medical+Devices',
            link: '#'
        },
        {
            category: 'Electronics',
            company: 'TechCorp',
            logo: 'https://via.placeholder.com/94x40/FF9800/FFFFFF?text=TECHCORP',
            image: 'https://via.placeholder.com/636x471/FF5722/FFFFFF?text=Electronic+Components',
            link: '#'
        }
    ];

    const nextSlide = () => {
        const maxIndex = Math.max(0, stories.length - 4);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
    };

    const prevSlide = () => {
        const maxIndex = Math.max(0, stories.length - 4);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (maxIndex + 1)) % (maxIndex + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Customer Success Stories
                    </h2>
                </div>
            </div>

            {/* Full Width Carousel Container */}
            <div className="relative w-full py-8">
                {/* Slides Container */}
                <div className="overflow-hidden py-4">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                    >
                        {stories.map((story, index) => (
                            <div key={index} className="w-1/4 flex-shrink-0 px-4">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                    {/* Main Image */}
                                    <div className="relative">
                                        <img
                                            src={story.image}
                                            alt={story.company}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        {/* Category */}
                                        <div className="mb-4">
                                            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                                {story.category}
                                            </span>
                                        </div>

                                        {/* Company Logo */}
                                        <div className="mb-4">
                                            <img
                                                src={story.logo}
                                                alt={`${story.company} logo`}
                                                className="h-6 object-contain"
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                                            {story.company}
                                        </h3>

                                        {/* Learn More Link */}
                                        <div>
                                            <a
                                                href={story.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
                >
                    <Icon icon="fa:chevron-left" className="text-gray-600 text-lg" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
                >
                    <Icon icon="fa:chevron-right" className="text-gray-600 text-lg" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-1.5">
                    {Array.from({ length: Math.max(1, stories.length - 3) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerStoriesSection;
