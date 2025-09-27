import { Icon } from 'umi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info Column */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div>
                            <img
                                src="https://via.placeholder.com/120x40/FFFFFF/000000?text=RapidDirect"
                                alt="RapidDirect Logo"
                                className="h-10"
                            />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Icon icon="fa:building" className="text-gray-400 mt-1" />
                                <span className="text-sm">RAPID DIRECT LTD</span>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Icon icon="fa:phone" className="text-gray-400 mt-1" />
                                <span className="text-sm">
                                    + 86 0755-85276703 <br />
                                    +86 13714567885
                                </span>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Icon icon="fa:envelope" className="text-gray-400 mt-1" />
                                <span className="text-sm">info@rapiddirect.com</span>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Icon icon="fa:map-marker" className="text-gray-400 mt-1" />
                                <span className="text-sm">
                                    Building A12, Haosi Industrial Park <br />
                                    Nanpu Road, Xinqiao Street, Bao'an District<br />
                                    Shenzhen, China, 518104
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Capabilities Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Capabilities</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CNC Machining</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Injection Molding</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sheet Metal Fabrication</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">3D Printing</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vacuum Casting</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Die Casting</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rapid Prototyping</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">On-Demand Manufacturing</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Materials</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Surface Finishes</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Study</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
                        </ul>
                    </div>

                    {/* About Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">About</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About RapidDirect</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Platform</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quality Assurance</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sponsorship</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Newsletter */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Social Media */}
                        <div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Icon icon="fa:facebook" className="text-xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Icon icon="fa:twitter" className="text-xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Icon icon="fa:youtube" className="text-xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Icon icon="fa:linkedin" className="text-xl" />
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="lg:col-span-2">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your business email"
                                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                />
                                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-800 border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        {/* Copyright */}
                        <div className="md:col-span-1">
                            <p className="text-sm text-gray-400">
                                Copyright © 2025 Shenzhen Rapid Direct Co., Ltd. All rights reserved
                            </p>
                        </div>

                        {/* Legal Links */}
                        <div className="md:col-span-2">
                            <div className="flex flex-wrap gap-6">
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Cookie Policy
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Terms and Conditions
                                </a>
                            </div>
                        </div>

                        {/* Back to Top */}
                        <div className="md:col-span-1 text-right">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Icon icon="fa:arrow-up" className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
