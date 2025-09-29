import { Icon } from 'umi';
import { useState } from 'react';
import { Button } from 'antd';

const SolutionsSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 'project-initiation',
            title: 'Project Initiation & Design',
            icon: 'fa:lightbulb',
            image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Concept+Design',
            description: 'From concept to manufacturable design, our team helps global brands turn ideas into ready-for-prototyping solutions.',
            features: [
                {
                    title: 'Industrial Design',
                    description: 'Concept sketches, high-quality product renders, and appearance specification documents.'
                },
                {
                    title: 'Mechanical Design',
                    description: 'Detailed structural 2D/3D drawings and engineering documentation, optimized for manufacturing feasibility.'
                },
                {
                    title: 'CMF Design',
                    description: 'Color, material and finish planning to align aesthetics with functionality and durability.'
                },
                {
                    title: 'Cost Estimation',
                    description: 'Design-stage cost forecasting and customized cost-reduction plans for your target market.'
                }
            ]
        },
        {
            id: 'prototyping',
            title: 'Prototyping & Low Volume Production',
            icon: 'fa:cogs',
            image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Prototyping',
            description: 'Our massive network support prototyping and low volume production needs, delivering accurate testing and manufacturability feedback with fast lead times.',
            features: [
                {
                    title: 'Manufacturing Advisory',
                    description: 'Material selection, DFM analysis, structural optimization, and process optimization recommendations.'
                },
                {
                    title: 'Assembly & Testing Support',
                    description: 'Assembly guidance, process sequencing, EVT testing plan, EVT&DVT phase summary reports.'
                },
                {
                    title: 'Low Volume Production',
                    description: 'Conduct small-batch manufacturing validation using final inspection reports and production summaries. Quality control plans with standards and methods.'
                }
            ]
        },
        {
            id: 'mass-production',
            title: 'Mass Production',
            icon: 'fa:industry',
            image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Mass+Production',
            description: 'We help businesses scale efficiently by integrating trusted suppliers and managing production with full transparency and quality control.',
            features: [
                {
                    title: 'Supply Chain Integration',
                    description: 'Conduct supplier evaluation and comprehensive reports.'
                },
                {
                    title: 'Raw Material Procurement & Management',
                    description: 'Assist in developing procurement plans; inspect raw material quality.'
                },
                {
                    title: 'Technical Support',
                    description: 'Offer technical solutions to facilitate mass production, optimize processes, and enhance quality control.'
                },
                {
                    title: 'Cost Control & Delivery Management',
                    description: 'Assist in controlling costs and timelines, with estimates to support project goals.'
                }
            ]
        },
        {
            id: 'packaging',
            title: 'Packaging',
            icon: 'fa:box',
            image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Packaging',
            description: 'Our team supports both product and packaging manufacturing, ensuring your goods arrive safely and professionally.',
            features: [
                {
                    title: 'Packaging Design',
                    description: 'Includes 2D and 3D drawings.'
                },
                {
                    title: 'Packaging Supplier Management',
                    description: 'Evaluate packaging suppliers and provide assessment reports.'
                },
                {
                    title: 'Sample Testing',
                    description: 'Provide sample inspection reports.'
                },
                {
                    title: 'Packaging Execution',
                    description: 'Offer packaging production plans, raw material lists, and final production summaries.'
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        End-to-End Solutions for New Product Development
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed  mx-auto">
                        More than just manufacturing. [Company Name] offers full-cycle product development solutions from design and prototyping to production and packaging. We help innovative companies worldwide to bring products to market easier, faster.
                    </p>
                </div>

                {/* Steps Navigation */}
                <div className="relative mb-16">
                    {/* Connection Line */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200"></div>

                    {/* Steps */}
                    <div className="relative flex justify-center">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center mx-8">
                                {/* Step Icon */}
                                <button
                                    onClick={() => setActiveStep(index)}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${activeStep === index
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-400 border-2 border-gray-200 hover:border-blue-300'
                                        }`}
                                >
                                    <Icon icon={step.icon as any} className="text-xl" />
                                </button>

                                {/* Step Title */}
                                <h3 className={`text-sm font-medium text-center max-w-32 ${activeStep === index ? 'text-blue-600' : 'text-gray-600'
                                    }`}>
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div>
                    {/* Main Title and Description */}
                    <div className="mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
                            {steps[activeStep].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            {steps[activeStep].description}
                        </p>
                    </div>

                    {/* Content Layout - 30% Image + 70% Features */}
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
                        {/* Left - Image (30%) */}
                        <div className="lg:col-span-3">
                            <img
                                src={steps[activeStep].image}
                                alt={steps[activeStep].title}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>

                        {/* Right - Features (70%) */}
                        <div className="lg:col-span-7">
                            <div className="space-y-6">
                                {steps[activeStep].features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        {/* Check Icon */}
                                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                            <Icon icon="fa:check" className="text-blue-600 text-sm" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
                        {/* Left - Empty (30%) */}
                        <div className="lg:col-span-3"></div>

                        {/* Right - Buttons (70%) */}
                        <div className="lg:col-span-7">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    type="primary"
                                    size="large"
                                    className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-base font-medium"
                                >
                                    Start Your NPI Project
                                </Button>
                                <Button
                                    size="large"
                                    className="h-12 px-8 text-base font-medium border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600"
                                >
                                    Explore [Company Name] NPI Solutions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
