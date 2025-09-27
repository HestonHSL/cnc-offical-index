import { Icon } from 'umi';
import { Button } from 'antd';

const HowToWorkSection = () => {
    const steps = [
        {
            icon: 'fa:upload',
            title: 'Upload a CAD File',
            description: 'Start by choosing your preferred manufacturing process, then upload your design file.'
        },
        {
            icon: 'fa:calculator',
            title: 'Get a Quote',
            description: 'Next, configure project details like material, finishing option, and quantity, receive an accurate quote and DFM feedback, then place your order.'
        },
        {
            icon: 'fa:shipping-fast',
            title: 'Parts Delivered!',
            description: 'Once production is complete and your parts pass quality inspections, they are shipped to you.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        How to Work With Us
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg">
                            {/* Icon */}
                            <div className="w-16 h-16 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <Icon
                                    icon={step.icon as any}
                                    className="text-2xl text-blue-600"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-left">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="text-center mt-12">
                    <Button
                        type="primary"
                        size="large"
                        className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-base font-medium"
                    >
                        Start Your Instant Quote
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowToWorkSection;
