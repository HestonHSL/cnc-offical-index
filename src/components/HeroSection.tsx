import { Button } from 'antd';

const HeroSection = () => {
    return (
        <section className="pt-20 pb-32 relative">
            {/* Left side - Pure background */}
            <div className="absolute inset-0 bg-gray-50"></div>

            {/* Right side - Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                    clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 40% 100%)'
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Small text */}
                        <p className="text-lg font-bold text-blue-600 uppercase tracking-wide">
                            From Prototyping to Production
                        </p>

                        {/* Large bold heading */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Quality Parts Made Easier, Faster
                        </h1>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                            RapidDirect bridges the gap between design and manufacturing on-demand.
                            From early prototypes to high-quality production runs, our manufacturing
                            network and engineering expertise deliver speed, precision, and consistent quality.
                        </p>

                        {/* Spacing */}
                        <div className="h-6"></div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                type="primary"
                                size="large"
                                className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-base font-medium"
                            >
                                Get Instant Quote
                            </Button>
                            <Button
                                size="large"
                                className="h-12 px-8 text-base font-medium border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600"
                            >
                                Start Production Quote
                            </Button>
                        </div>

                        {/* Italic small text */}
                        <p className="text-sm text-gray-500 italic">
                            Get instant quote of your custom parts, or contact our team to discuss your production needs.
                        </p>
                    </div>

                    {/* Right Content - Empty space for background visibility */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <div className="h-96 rounded-lg">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
