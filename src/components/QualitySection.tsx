import { Icon } from 'umi';

const QualitySection = () => {
    const features = [
        {
            title: 'Advanced Inspection Equipment',
            description: 'We use more than 20 types of inspection tools including CMM, 2D measuring instruments, XRF analyzers, gauges, micrometers, and calipers to check part dimensions, material quality, and surface finish.'
        },
        {
            title: 'Comprehensive Inspection Documentation',
            description: 'We provide detailed inspection reports such as first article inspection (FAI), RoHS compliance certificates, dimensional measurements, and functional test results to support your quality management.'
        },
        {
            title: 'Certified Manufacturing Partner',
            description: 'Holding certifications including ISO 9001:2015, ISO 13485, ISO 14001, and IATF 16949, [Company Name] is a trusted partner for industries with strict quality requirements such as automotive, medical devices, and consumer electronic.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
                    {/* Left Content - 60% */}
                    <div className="lg:col-span-6">
                        {/* Main Title */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            Where Quality Meets Reliability
                            <br />
                            in Custom Manufacturing
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            [Company Name]'s team of over 30 quality engineers conducts thorough inspections at every stage including pre-production, in-process, and final inspections to ensure a 90% first-pass yield. Our ISO-certified processes guarantee reliable and high-quality parts from prototyping through full production.
                        </p>

                        {/* Features List */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="group pl-6 hover:border-l-4 hover:border-blue-600 hover:pl-4 transition-all duration-300">
                                    <h3 className="text-sm font-bold text-blue-600 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - 30% */}
                    <div className="lg:col-span-4">
                        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <Icon icon="fa:trophy" className="text-8xl text-blue-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                                    Quality Assurance
                                </h3>
                                <p className="text-gray-500">
                                    ISO Certified Manufacturing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
