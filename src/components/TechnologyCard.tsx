import { Icon } from 'umi';

interface TechnologyCardProps {
    title: string;
    subtitle: string;
    icon: string;
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    dotColor: string;
    textColor: string;
    features: string[];
    image: string;
    imageAlt: string;
    width?: string;
}

export default function TechnologyCard({
    title,
    subtitle,
    icon,
    gradientFrom,
    gradientTo,
    borderColor,
    dotColor,
    textColor,
    features,
    image,
    imageAlt,
    width = "w-full"
}: TechnologyCardProps) {
    return (
        <div className={width}>
            <div className="group relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                <div className={`relative bg-white rounded-3xl p-8 border border-gray-100 hover:${borderColor} transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon icon={icon as any} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <h4 className={`text-lg font-semibold ${textColor} mb-4`}>{subtitle}</h4>
                    <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className={`w-2 h-2 ${dotColor} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="relative overflow-hidden rounded-xl mt-auto">
                        <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
