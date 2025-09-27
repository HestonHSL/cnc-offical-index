const AdvantagesSection = () => {
    const advantages = [
        {
            number: "15+",
            text: "Year Experience"
        },
        {
            number: "100,000+",
            text: "Parts Manufactured"
        },
        {
            number: "700+",
            text: "Manufacturing Centers"
        },
        {
            number: "98%",
            text: "On-time Delivery"
        },
        {
            number: "ISO",
            text: "9001:2015 certified"
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
                            <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                                {advantage.number}
                            </div>
                            <div className="text-sm text-black group-hover:text-white font-bold transition-colors duration-300">
                                {advantage.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
