import { Button } from 'antd';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content - Title */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Start Custom Parts Manufacturing
                        </h2>
                    </div>

                    {/* Right Content - Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <Button
                            type="primary"
                            size="large"
                            className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-base font-medium"
                        >
                            CNC Quote
                        </Button>
                        <Button
                            size="large"
                            className="h-12 px-8 text-base font-medium border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600"
                        >
                            3D Printing Quote
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
