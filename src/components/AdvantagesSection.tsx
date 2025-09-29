const AdvantagesSection = () => {
    const advantages = [
        {
            number: "10+",
            text: "Year Experience",
            desc: "Over a decade of expertise in precision manufacturing and CNC machining solutions"
        },
        {
            number: "±0.0005\"",
            text: "Ultra-Precision Tolerances",
            desc: "Achieve tolerances as tight as ±0.0001 inch with our advanced CNC technology"
        },
        {
            number: "5-Axis",
            text: "Multi-Axis Machining",
            desc: "Up to 5-axis simultaneous machining for complex geometries and intricate parts"
        },
        {
            number: "0.5-32mm",
            text: "Small Part Specialization",
            desc: "Expert in manufacturing precision components from 0.5mm to 32mm diameter"
        },
        {
            number: "24/7",
            text: "Lights-Out Manufacturing",
            desc: "24/7 automated production with bar feeders for maximum efficiency"
        }
    ];

    return (
        <section className="py-16 -mt-32 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="border-[0.5px] border-black rounded-2xl px-6 py-6 text-center hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 hover:shadow-lg group bg-white"
                        >
                            <div className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                                {advantage.number}
                            </div>
                            <div className="text-sm text-black group-hover:text-white font-bold transition-colors duration-300 mb-3 whitespace-pre">
                                {advantage.text}
                            </div>
                            {advantage.desc && (
                                <>
                                    <div className="w-full h-px bg-gray-300 group-hover:bg-white mb-3 transition-colors duration-300"></div>
                                    <div className="text-xs text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
                                        {advantage.desc}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
