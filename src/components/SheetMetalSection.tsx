import TechnologyCard from './TechnologyCard';
import laserCuttingImage from '../assets/SheetMetalSection/3-LaserCutting.jpg';
import stampingImage from '../assets/SheetMetalSection/9-Stamping.jpg';
import bendingImage from '../assets/SheetMetalSection/7-Bending.jpg';
import shearingImage from '../assets/SheetMetalSection/4-Shearing.jpg';
import weldingImage from '../assets/SheetMetalSection/2-Welding.jpg';
import rivetingImage from '../assets/SheetMetalSection/6-Riveting.jpg';
import rollFormingImage from '../assets/SheetMetalSection/1-RollForming.jpg';
import deepDrawingImage from '../assets/SheetMetalSection/5-DeepDrawing.jpg';
import spotWeldingImage from '../assets/SheetMetalSection/10-SpotWelding.jpg';
import surfaceTreatmentImage from '../assets/SheetMetalSection/8-SurfaceTreatment.png';

export default function SheetMetalSection() {
    return (
        <section className="py-20 bg-white">
            <div className="w-full px-2">
                <div className="text-center mb-16 max-w-7xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full border border-indigo-200 mb-6">
                        <span className="text-indigo-700 text-sm font-medium">🔧 Sheet Metal Fabrication Technologies</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Sheet Metal Fabrication Technologies
                    </h2>
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-4">
                        Sheet metal fabrication is the process of transforming metal sheets into the desired shapes and sizes through a series of physical machining methods. Common sheet metal processes include cutting, bending, stamping, welding, riveting, and more. These processes are widely used in various industries, such as automotive, aerospace, home appliances, electronics, and construction.
                    </p>
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                        The core advantages of sheet metal fabrication lie in its flexibility and efficiency, enabling the rapid production of high-precision, complex parts. With advanced equipment and technology, sheet metal fabrication can provide tailor-made solutions for industries with diverse needs.
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    {/* 第一行：3张卡片 */}
                    <div className="flex justify-around max-w-7xl mx-auto w-full">
                        <TechnologyCard
                            title="Laser Cutting"
                            subtitle="Precision Cutting"
                            icon="mdi:laser-pointer"
                            gradientFrom="from-red-500/10 to-pink-500/10"
                            gradientTo="from-red-400 to-red-600"
                            borderColor="border-red-200"
                            dotColor="bg-red-400"
                            textColor="text-red-600"
                            features={[
                                "Uses high-power laser beams for precise metal sheet cutting",
                                "Suitable for complex patterns and high-precision cutting",
                                "High precision, no tool wear, fast cutting speed",
                                "Ideal for intricate designs and tight tolerances"
                            ]}
                            image={laserCuttingImage}
                            imageAlt="Laser Cutting"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Stamping"
                            subtitle="Press Forming"
                            icon="mdi:hammer"
                            gradientFrom="from-blue-500/10 to-cyan-500/10"
                            gradientTo="from-blue-400 to-blue-600"
                            borderColor="border-blue-200"
                            dotColor="bg-blue-400"
                            textColor="text-blue-600"
                            features={[
                                "Uses stamping dies to press metal sheets into desired shapes",
                                "Suitable for mass production applications",
                                "High efficiency, suitable for large batch production",
                                "Can process complex parts with consistent quality"
                            ]}
                            image={stampingImage}
                            imageAlt="Stamping"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Bending"
                            subtitle="Angle Forming"
                            icon="mdi:angle-acute"
                            gradientFrom="from-green-500/10 to-emerald-500/10"
                            gradientTo="from-green-400 to-green-600"
                            borderColor="border-green-200"
                            dotColor="bg-green-400"
                            textColor="text-green-600"
                            features={[
                                "Uses bending machines to form metal sheets at desired angles",
                                "Can produce parts with different angles and shapes",
                                "Suitable for complex structural components",
                                "Precise angle control and repeatability"
                            ]}
                            image={bendingImage}
                            imageAlt="Bending"
                            width="w-[380px]"
                        />
                    </div>

                    {/* 第二行：4张卡片 */}
                    <div className="flex justify-center space-x-6">
                        <TechnologyCard
                            title="Shearing"
                            subtitle="Straight Cutting"
                            icon="mdi:scissors-cutting"
                            gradientFrom="from-purple-500/10 to-indigo-500/10"
                            gradientTo="from-purple-400 to-purple-600"
                            borderColor="border-purple-200"
                            dotColor="bg-purple-400"
                            textColor="text-purple-600"
                            features={[
                                "Uses shearing machines to cut metal sheets into straight lines",
                                "Usually used for thinner metal sheets",
                                "Simple operation, fast speed",
                                "Suitable for cutting straight edges"
                            ]}
                            image={shearingImage}
                            imageAlt="Shearing"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Welding"
                            subtitle="Heat Joining"
                            icon="mdi:fire"
                            gradientFrom="from-orange-500/10 to-red-500/10"
                            gradientTo="from-orange-400 to-orange-600"
                            borderColor="border-orange-200"
                            dotColor="bg-orange-400"
                            textColor="text-orange-600"
                            features={[
                                "Uses heat energy to join two metal sheets together",
                                "Common methods: MIG, TIG, spot welding",
                                "Suitable for connections requiring strength and durability",
                                "Compatible with various materials"
                            ]}
                            image={weldingImage}
                            imageAlt="Welding"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Riveting"
                            subtitle="Mechanical Fastening"
                            icon="mdi:hammer-screwdriver"
                            gradientFrom="from-teal-500/10 to-cyan-500/10"
                            gradientTo="from-teal-400 to-teal-600"
                            borderColor="border-teal-200"
                            dotColor="bg-teal-400"
                            textColor="text-teal-600"
                            features={[
                                "Uses rivets to fasten metal sheets together",
                                "Suitable for applications requiring high-strength connections",
                                "Firm connection, suitable for thin sheet metal",
                                "Ideal for situations where welding is not suitable"
                            ]}
                            image={rivetingImage}
                            imageAlt="Riveting"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Roll Forming"
                            subtitle="Continuous Forming"
                            icon="mdi:rotate-3d"
                            gradientFrom="from-pink-500/10 to-rose-500/10"
                            gradientTo="from-pink-400 to-pink-600"
                            borderColor="border-pink-200"
                            dotColor="bg-pink-400"
                            textColor="text-pink-600"
                            features={[
                                "Uses a series of rollers for continuous metal sheet forming",
                                "Commonly used for producing long, standardized metal profiles",
                                "High efficiency, suitable for long-term mass production",
                                "Consistent quality and dimensional accuracy"
                            ]}
                            image={rollFormingImage}
                            imageAlt="Roll Forming"
                            width="w-[380px]"
                        />
                    </div>

                    {/* 第三行：3张卡片 */}
                    <div className="flex justify-center space-x-8">
                        <TechnologyCard
                            title="Deep Drawing"
                            subtitle="3D Forming"
                            icon="mdi:cube-outline"
                            gradientFrom="from-yellow-500/10 to-amber-500/10"
                            gradientTo="from-yellow-400 to-yellow-600"
                            borderColor="border-yellow-200"
                            dotColor="bg-yellow-400"
                            textColor="text-yellow-600"
                            features={[
                                "Places metal sheet in mold and stretches it into deep shapes",
                                "Can process deep holes or complex 3D shapes",
                                "Suitable for manufacturing containers or housings",
                                "Creates seamless, one-piece components"
                            ]}
                            image={deepDrawingImage}
                            imageAlt="Deep Drawing"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Spot Welding"
                            subtitle="Point Joining"
                            icon="mdi:flash"
                            gradientFrom="from-indigo-500/10 to-purple-500/10"
                            gradientTo="from-indigo-400 to-indigo-600"
                            borderColor="border-indigo-200"
                            dotColor="bg-indigo-400"
                            textColor="text-indigo-600"
                            features={[
                                "Uses current and pressure to create localized fusion points",
                                "Commonly used for thin sheet metal connections",
                                "Suitable for thin sheet connections, high efficiency",
                                "Commonly used in automotive and electronics assembly"
                            ]}
                            image={spotWeldingImage}
                            imageAlt="Spot Welding"
                            width="w-[380px]"
                        />
                        <TechnologyCard
                            title="Surface Treatment"
                            subtitle="Finishing Process"
                            icon="mdi:spray"
                            gradientFrom="from-gray-500/10 to-slate-500/10"
                            gradientTo="from-gray-400 to-gray-600"
                            borderColor="border-gray-200"
                            dotColor="bg-gray-400"
                            textColor="text-gray-600"
                            features={[
                                "Treats sheet metal surfaces to improve corrosion resistance",
                                "Common treatments: painting, anodizing, electroplating",
                                "Improves surface performance and extends service life",
                                "Enhances aesthetics and durability"
                            ]}
                            image={surfaceTreatmentImage}
                            imageAlt="Surface Treatment"
                            width="w-[380px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
