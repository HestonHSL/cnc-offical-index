import { Icon } from 'umi';
import { Button } from 'antd';

const Header = () => {
    const navItems = [
        'Capabilities',
        'Solutions',
        'Resources',
        'About',
        'Our Platform'
    ];

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center space-x-2">
                            <Icon icon="fa:cog" className="text-2xl text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">RapidDirect</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center">
                        <Button
                            type="primary"
                            size="large"
                            className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
                        >
                            Get Instant Quote
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
