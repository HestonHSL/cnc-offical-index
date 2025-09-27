import { Icon } from 'umi';

const ServicesSection = () => {
    const services = [
        {
            icon: 'fa:cog',
            title: 'CNC Machining',
            description: 'CNC milling, turning & precision machining for prototypes and end-use parts. ±0.001″ tolerance, 0.020″ thin walls, 1-day lead times.'
        },
        {
            icon: 'fa:cube',
            title: 'Injection Molding',
            description: 'Get plastic injection molding, overmolding & insert molding with fast & production tooling. No MOQ. T1 samples in 2 weeks. Scale 1 to 1M units.'
        },
        {
            icon: 'fa:square',
            title: 'Sheet Metal Fabrication',
            description: 'Expert laser cutting, bending, welding & stamping. Fast, precise sheet metal prototypes to production. 3-day lead time. 0.008 in. thin walls.'
        },
        {
            icon: 'fa:print',
            title: '3D Printing',
            description: 'SLA, HP MJF, SLS & SLM for functional prototypes & low-volume 3D printing. ±0.008 in. precision. 1-day lead time.'
        },
        {
            icon: 'fa:bars',
            title: 'Extrusion',
            description: 'Offer high quality, low-cost metal extrusions with a variety of post-machining options. Rapid 2-week delivery.'
        },
        {
            icon: 'fa:circle',
            title: 'Die Casting',
            description: 'High-volume precision die casting: Aluminum/Zinc/Magnesium/Copper. 0.03in walls, 1000+ unit batches.'
        },
        {
            icon: 'fa:flask',
            title: 'Vacuum Casting',
            description: 'Rapid soft-tooled plastic prototypes: ±0.002″ precision, 20 parts in 15 days. Cost-effective small-batch alternative to injection molding. Ideal for fast iterations.'
        },
        {
            icon: 'fa:bolt',
            title: 'Wire EDM',
            description: 'Precision sinker & wire EDM: Sharp inside corners & thin walls. Burr-free micromachining with 0.001-0.01″ kerf. Ideal for tooling-free complex geometries.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 items-center">
                    {/* Left - Large Title */}
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                            RapidDirect Manufacturing Services from Prototyping to Production
                        </h2>
                    </div>

                    {/* Right - Description */}
                    <div className="lg:col-span-7">
                        <p className="text-sm text-gray-600 leading-relaxed">
                            With our own factory in Shenzhen and a strong network of vetted manufacturers across China, we offer a broad range of manufacturing capabilities — from CNC machining to injection molding, sheet metal, and 3D printing. Whether you need fast-turn prototypes or low- to high-volume production, we're your trusted partner for complex, custom parts delivered with speed and precision.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 hover:border-2 hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 group overflow-hidden"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                                <Icon
                                    icon={service.icon as any}
                                    className="text-2xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
