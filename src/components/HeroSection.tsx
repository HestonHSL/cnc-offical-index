import { Button } from 'antd';
import heroBackground from '../assets/hero-background.jpg';

const HeroSection = () => {
    return (
        <section className="pt-20 pb-32 relative">
            {/* Background image with gradient overlay */}
            <div
                className="absolute inset-0 bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: '60% auto',
                    backgroundPosition: 'right center'
                }}
            ></div>

            {/* Gradient overlay from white (left) to transparent (right) */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0) 80%)'
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Small text */}
                        <p className="text-lg font-bold text-blue-600 uppercase tracking-wide">
                            From Prototyping to Production
                        </p>

                        {/* Large bold heading */}
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Exquisite Craftsmanship, Outstanding Manufacturing<br /><span className="text-blue-600 text-xl">———A Leading Expert in CNC Parts Machining</span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Welcome to [Company Name] — Your Trusted Partner for High-Precision CNC Parts Manufacturing! We are dedicated to providing the most advanced CNC machining technologies to a wide range of industries. Whether it's aerospace, automotive manufacturing, medical devices, or precision tools and electronic components, we leverage our exceptional technology and extensive experience to deliver the most precise and reliable parts solutions.
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

                    {/* Right Content - Space for background image visibility */}
                    <div className="lg:pl-8">
                        <div className="h-96 rounded-lg">
                            {/* This space allows the background image to show through */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
