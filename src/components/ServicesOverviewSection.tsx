import { Icon } from 'umi';
import cncImage from '../assets/ServicesOverviewSection/1-CNC.jpg';
import sheetMetalImage from '../assets/ServicesOverviewSection/2-Sheet-Metal.jpg';
import printing3dImage from '../assets/ServicesOverviewSection/3-3D-Printing.png';

const ServicesOverviewSection = () => {

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We provide comprehensive manufacturing solutions covering CNC machining, sheet metal fabrication, and 3D printing technologies to meet diverse production needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* CNC Service */}
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="fa:cog" className="text-white text-2xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">CNC</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                CNC (Computer Numerical Control) is an advanced technology that uses computer programs to control machine tools for automated machining. It enables the efficient and precise production of complex parts and is a core technology essential to modern manufacturing.
                            </p>

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl mt-6">
                                <img src={cncImage} alt="CNC Machining" className="w-full h-48 object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Sheet Metal Service */}
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="fa:th" className="text-white text-2xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sheet Metal</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                Sheet metal fabrication is a manufacturing process that involves cutting, punching, bending, welding, and other techniques to process metal sheets. It is known for its low cost, high strength, and strong flexibility in processing, making it an essential technique in modern industrial manufacturing.
                            </p>

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl mt-6">
                                <img src={sheetMetalImage} alt="Sheet Metal Fabrication" className="w-full h-48 object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* 3D Printing Service */}
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="fa:print" className="text-white text-2xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">3D Printing</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                3D printing is an advanced manufacturing technology that creates physical objects by layering materials based on digital models. It enables rapid production of complex structures and offers advantages such as high efficiency, flexibility, and material savings.
                            </p>

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl mt-6">
                                <img src={printing3dImage} alt="3D Printing" className="w-full h-48 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverviewSection;
