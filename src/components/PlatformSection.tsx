import { Icon } from 'umi';
import { useState } from 'react';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const PlatformSection = () => {
    const [activeIndex, setActiveIndex] = useState('0');

    const onChange = (key: string) => {
        setActiveIndex(key);
    };

    const platformFeatures = [
        {
            title: 'Instant Quotation',
            description: 'Skip the wait. With [Company Name]\'s instant quote feature, you receive accurate pricing and detailed DFM feedback in seconds. Save time, reduce risk, and keep your project on track.',
            features: [
                'No minimum order quantity.',
                'Over 100 materials and 30 finishes available.',
                'Flexible lead times and shipping options.'
            ],
            icon: 'fa:calculator'
        },
        {
            title: 'Teamspace with Membership Rewards',
            description: 'Boost team efficiency with instant quote sharing, 1-click orders, and live tracking. Collaborate effortlessly while unlocking tiered rewards for every milestone achieved.',
            features: [
                'Share quotes, specs, and orders with one click.',
                'Centralize approvals and payments to cut delays.',
                'Negotiate pricing and clarify specs without switching platforms.',
                'Unlock perks as your team contributes.'
            ],
            icon: 'fa:users'
        },
        {
            title: 'Integrated Live Chat',
            description: 'Need answers fast? With [Company Name]\'s live chat, get instant support from our experts and streamline your project communication.',
            features: [
                'Quick assistance for quotes and orders',
                'Share files, photos, and messages instantly',
                'Real-time design feedback with file annotations'
            ],
            icon: 'fa:comments'
        },
        {
            title: 'All-in-One Order Management',
            description: 'Stay on top of every detail. Track progress, verify quality, and access essential documents—everything you need in one place.',
            features: [
                'Real-time production status tracking for full visibility',
                'High-resolution inspection photos for quality assurance',
                'Easily manage documents, from DFM to invoices'
            ],
            icon: 'fa:clipboard-list'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        Manage Manufacturing Smarter with Our Digital Platform
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Streamline your manufacturing process with our comprehensive digital platform designed to accelerate your product development and production workflows.
                    </p>
                </div>

                {/* Content Section - 50/50 Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Antd Collapse Accordion */}
                    <Collapse
                        accordion
                        defaultActiveKey={['0']}
                        onChange={onChange as any}
                        className="bg-transparent border-0"
                    >
                        {platformFeatures.map((feature, index) => (
                            <Panel
                                key={index.toString()}
                                header={
                                    <div className="flex items-center space-x-4">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${activeIndex === index.toString() ? 'bg-blue-600' : 'bg-gray-100'
                                            }`}>
                                            <Icon
                                                icon={feature.icon as any}
                                                className={`text-xl ${activeIndex === index.toString() ? 'text-white' : 'text-gray-600'}`}
                                            />
                                        </div>
                                        <h3 className={`text-lg font-bold ${activeIndex === index.toString() ? 'text-blue-600' : 'text-gray-900'}`}>
                                            {feature.title}
                                        </h3>
                                    </div>
                                }
                                style={{
                                    marginBottom: '8px',
                                    border: activeIndex === index.toString() ? '1px solid #3b82f6' : '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    backgroundColor: activeIndex === index.toString() ? '#eff6ff' : 'white',
                                    boxShadow: activeIndex === index.toString() ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                                }}
                            >
                                <div className="pl-16">
                                    <p className="text-sm leading-relaxed mb-4 text-blue-700">
                                        {feature.description}
                                    </p>

                                    {/* Feature List */}
                                    <ul className="space-y-2">
                                        {feature.features.map((item, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start space-x-2">
                                                <Icon
                                                    icon="fa:check"
                                                    className="text-blue-600 text-sm mt-1 flex-shrink-0"
                                                />
                                                <span className="text-sm text-blue-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Panel>
                        ))}
                    </Collapse>

                    {/* Right Side - Image */}
                    <div className="lg:sticky lg:top-8">
                        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                                    {platformFeatures[parseInt(activeIndex) || 0]?.title || 'Select a feature'}
                                </h3>
                                <p className="text-gray-500">
                                    Interactive Platform Preview
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="text-center mt-16">
                    <Button
                        type="primary"
                        size="large"
                        className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-base font-medium"
                    >
                        Explore Our Platform
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PlatformSection;
