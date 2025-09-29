import TechnologyCard from './TechnologyCard';
import cncMillingImage from '../assets/CNCMachiningSection/1-CNC-Milling.jpg';
import cncTurningImage from '../assets/CNCMachiningSection/2-CNC-Turning.jpg';
import cncDrillingImage from '../assets/CNCMachiningSection/3-CNC-Drilling.png';
import cncShapingImage from '../assets/CNCMachiningSection/4-CNC-Shaping.jpg';
import wireEdmImage from '../assets/CNCMachiningSection/5-Wire-EDM.jpg';
import edmImage from '../assets/CNCMachiningSection/6-EDM.png';
import advancedCuttingImage from '../assets/CNCMachiningSection/7-Advanced-Cutting.jpg';

export default function CNCMachiningSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full px-2">
                <div className="text-center mb-16 max-w-7xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
                        <span className="text-green-700 text-sm font-medium">⚙️ CNC Machining Technologies</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our CNC Machining Technologies
                    </h2>
                    <p className="text-gray-600 text-base max-w-3xl mx-auto">
                        CNC (Computer Numerical Control) is a technology that uses computer programs to automatically control machine tools for precision machining. It is widely used in processes such as cutting, drilling, milling, and turning of materials like metal and plastic. CNC machining offers high precision, high efficiency, and a high degree of automation. It is suitable for a wide range of manufacturing needs, from single-piece prototyping to mass production, and serves as a key technology in modern manufacturing.
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    {/* 第一行：3张卡片 */}
                    <div className="flex justify-around max-w-7xl mx-auto w-full">
                        <TechnologyCard
                            title="CNC Milling"
                            subtitle="Precision Milling"
                            icon="mdi:cog"
                            gradientFrom="from-blue-500/10 to-cyan-500/10"
                            gradientTo="from-blue-400 to-blue-600"
                            borderColor="border-blue-200"
                            dotColor="bg-blue-400"
                            textColor="text-blue-600"
                            features={[
                                "Cutting with rotating tools for precise material removal",
                                "Used for planes, slots, complex 3D surfaces, precision parts",
                                "3-axis, 4-axis, 5-axis CNC milling machines",
                                "High precision and surface finish quality"
                            ]}
                            image={cncMillingImage}
                            imageAlt="CNC Milling"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="CNC Turning"
                            subtitle="Rotational Machining"
                            icon="mdi:rotate-left"
                            gradientFrom="from-green-500/10 to-emerald-500/10"
                            gradientTo="from-green-400 to-green-600"
                            borderColor="border-green-200"
                            dotColor="bg-green-400"
                            textColor="text-green-600"
                            features={[
                                "Workpiece rotates while tool remains fixed for cutting",
                                "Ideal for cylindrical and shaft-type parts",
                                "CNC lathes and turning-milling compound machines",
                                "Excellent for high-volume production"
                            ]}
                            image={cncTurningImage}
                            imageAlt="CNC Turning"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="CNC Drilling"
                            subtitle="Precision Drilling"
                            icon="mdi:circle-outline"
                            gradientFrom="from-orange-500/10 to-red-500/10"
                            gradientTo="from-orange-400 to-orange-600"
                            borderColor="border-orange-200"
                            dotColor="bg-orange-400"
                            textColor="text-orange-600"
                            features={[
                                "Tool enters material vertically to create holes",
                                "Used for holes, threaded holes, counterbores",
                                "High precision hole positioning and sizing",
                                "Automated multi-hole drilling operations"
                            ]}
                            image={cncDrillingImage}
                            imageAlt="CNC Drilling"
                            width="w-[380px]"
                        />
                    </div>

                    {/* 第二行：4张卡片 */}
                    <div className="flex justify-center space-x-6">
                        <TechnologyCard
                            title="CNC Shaping/Slotting"
                            subtitle="Linear Cutting"
                            icon="mdi:vector-square"
                            gradientFrom="from-purple-500/10 to-indigo-500/10"
                            gradientTo="from-purple-400 to-purple-600"
                            borderColor="border-purple-200"
                            dotColor="bg-purple-400"
                            textColor="text-purple-600"
                            features={[
                                "Cutting through linear reciprocating motion",
                                "Used for slots, keyways, and linear features",
                                "Precise linear dimension control",
                                "Ideal for specialized slotting operations"
                            ]}
                            image={cncShapingImage}
                            imageAlt="CNC Shaping/Slotting"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Wire EDM"
                            subtitle="Electrical Discharge"
                            icon="mdi:lightning-bolt"
                            gradientFrom="from-teal-500/10 to-cyan-500/10"
                            gradientTo="from-teal-400 to-teal-600"
                            borderColor="border-teal-200"
                            dotColor="bg-teal-400"
                            textColor="text-teal-600"
                            features={[
                                "Uses thin metal wire for electrical discharge cutting",
                                "High precision, complex contour molds and parts",
                                "Works with conductive materials only",
                                "Exceptional surface finish and accuracy"
                            ]}
                            image={wireEdmImage}
                            imageAlt="Wire EDM"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="EDM"
                            subtitle="Electrical Discharge Machining"
                            icon="mdi:flash"
                            gradientFrom="from-pink-500/10 to-rose-500/10"
                            gradientTo="from-pink-400 to-pink-600"
                            borderColor="border-pink-200"
                            dotColor="bg-pink-400"
                            textColor="text-pink-600"
                            features={[
                                "Uses electrical spark erosion on conductive materials",
                                "Ideal for hard materials, molds, fine holes",
                                "No mechanical force required",
                                "Excellent for intricate internal features"
                            ]}
                            image={edmImage}
                            imageAlt="EDM"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Advanced Cutting"
                            subtitle="Laser/Plasma/Waterjet"
                            icon="mdi:water"
                            gradientFrom="from-yellow-500/10 to-amber-500/10"
                            gradientTo="from-yellow-400 to-yellow-600"
                            borderColor="border-yellow-200"
                            dotColor="bg-yellow-400"
                            textColor="text-yellow-600"
                            features={[
                                "Laser cutting, plasma cutting, waterjet cutting",
                                "Mainly for rapid sheet forming and cutting",
                                "Often combined with CNC control systems",
                                "High-speed, non-contact cutting processes"
                            ]}
                            image={advancedCuttingImage}
                            imageAlt="Advanced Cutting"
                            width="w-[380px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
