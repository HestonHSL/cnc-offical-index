import { Icon } from 'umi';

const ResourcesSection = () => {
    const resources = [
        {
            title: 'The Ultimate Guide to CNC Machining Processes Comparison',
            date: 'September 2, 2025',
            category: 'CNC Machining',
            image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=CNC+Machining+Guide',
            link: '#'
        },
        {
            title: '3D Printing vs CNC Machining: All Differences Explained',
            date: 'August 31, 2025',
            category: '3D Printing',
            image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=3D+Printing+vs+CNC',
            link: '#'
        },
        {
            title: 'Medical Injection Molding: Process, Benefits, and Applications in Healthcare',
            date: 'August 23, 2025',
            category: 'Injection Molding',
            image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Medical+Injection+Molding',
            link: '#'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Manufacturing Resources
                    </h2>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                            {/* Thumbnail */}
                            <div className="relative">
                                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </a>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category Tag */}
                                <div className="mb-3">
                                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                        {resource.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                    <a
                                        href={resource.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {resource.title}
                                    </a>
                                </h3>

                                {/* Meta Data */}
                                <div className="flex items-center text-sm text-gray-500">
                                    <Icon icon="fa:calendar" className="mr-2" />
                                    <span>{resource.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ResourcesSection;
