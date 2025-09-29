import TechnologyCard from './TechnologyCard';
import slaImage from '../assets/Printing3DSection/1-SLA-Stereolithography.jpg';
import slsImage from '../assets/Printing3DSection/2-SLS-SelectiveLaserSintering.jpg';
import mjfImage from '../assets/Printing3DSection/3-MJF-MultiJetFusion.jpg';
import slmImage from '../assets/Printing3DSection/4-SLM-SelectiveLaserMelting.png';
import fdmImage from '../assets/Printing3DSection/5-FDM-FusedDepositionModeling.jpg';

export default function Printing3DSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-2">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
                        <span className="text-blue-700 text-sm font-medium">🔧 Professional Manufacturing Capabilities</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our 3D Printing Manufacturing Capabilities
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From prototyping to mass production, we provide comprehensive 3D printing solutions
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    {/* 第一行：3张卡片 */}
                    <div className="flex justify-around">
                        <TechnologyCard
                            title="SLA"
                            subtitle="Stereolithography"
                            icon="mdi:laser-pointer"
                            gradientFrom="from-purple-500/10 to-pink-500/10"
                            gradientTo="from-purple-400 to-purple-600"
                            borderColor="border-purple-200"
                            dotColor="bg-purple-400"
                            textColor="text-purple-600"
                            features={[
                                "Visual part prototyping. High resolution. Low cost.",
                                "Dimensional accuracy of ±0.2% with a lower limit of ±0.2mm.",
                                "Lead times from 3 business days",
                                "Standard Resin, High-Detail Resin, Translucent Resin, Transparent Resin, etc."
                            ]}
                            image={slaImage}
                            imageAlt="SLA Stereolithography"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="SLS"
                            subtitle="Selective Laser Sintering"
                            icon="mdi:fire"
                            gradientFrom="from-orange-500/10 to-red-500/10"
                            gradientTo="from-orange-400 to-orange-600"
                            borderColor="border-orange-200"
                            dotColor="bg-orange-400"
                            textColor="text-orange-600"
                            features={[
                                "Functional prototyping. Low-run production.",
                                "Dimensional accuracy of +0.3% with a lower limit of +0.3mm.",
                                "Lead times from 3 business days",
                                "Nylon PA11, Nylon PA12, Nylon PA12 Glass Fill, etc."
                            ]}
                            image={slsImage}
                            imageAlt="SLS Selective Laser Sintering"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="MJF"
                            subtitle="Multi Jet Fusion"
                            icon="mdi:printer-3d"
                            gradientFrom="from-blue-500/10 to-cyan-500/10"
                            gradientTo="from-blue-400 to-blue-600"
                            borderColor="border-blue-200"
                            dotColor="bg-blue-400"
                            textColor="text-blue-600"
                            features={[
                                "Functional prototyping. Low-run production.",
                                "Dimensional accuracy of +0.3% with a lower limit of +0.3mm.",
                                "Lead times from 3 business days",
                                "HP Nylon PA12"
                            ]}
                            image={mjfImage}
                            imageAlt="MJF Multi Jet Fusion"
                            width="w-[380px]"
                        />
                    </div>

                    {/* 第二行：2张卡片 */}
                    <div className="flex justify-around">
                        <TechnologyCard
                            title="SLM"
                            subtitle="Selective Laser Melting"
                            icon="mdi:gear"
                            gradientFrom="from-gray-500/10 to-slate-500/10"
                            gradientTo="from-gray-400 to-gray-600"
                            borderColor="border-gray-200"
                            dotColor="bg-gray-400"
                            textColor="text-gray-600"
                            features={[
                                "Metal parts rapid prototyping. Production grade.",
                                "Dimensional accuracy of +0.2% with a lower limit of +0.2mm.",
                                "Lead times from 5 business days",
                                "Aluminum, Stainless Steel, Titanium, Tool Steel, Inconel, etc."
                            ]}
                            image={slmImage}
                            imageAlt="SLM Selective Laser Melting"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="FDM"
                            subtitle="Fused Deposition Modeling"
                            icon="mdi:printer-3d"
                            gradientFrom="from-green-500/10 to-emerald-500/10"
                            gradientTo="from-green-400 to-green-600"
                            borderColor="border-green-200"
                            dotColor="bg-green-400"
                            textColor="text-green-600"
                            features={[
                                "Plastic parts rapid prototyping. Low cost.",
                                "Dimensional accuracy of +0.2% with a lower limit of +0.2mm.",
                                "Lead times from 3 business days",
                                "ABS, PETG, PLA, etc."
                            ]}
                            image={fdmImage}
                            imageAlt="FDM Fused Deposition Modeling"
                            width="w-[380px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
