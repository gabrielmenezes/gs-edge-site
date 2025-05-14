type ServiceCardProps = {
    title: string
    description: string
    price: string
    link: string
    buttonLabel?: string
}

export default function ServiceCard({
    title,
    description,
    price,
    link,
    buttonLabel = "Solicitar"
}: ServiceCardProps) {
    return (
        <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <p className="text-indigo-600 font-semibold mb-4">{price}</p>
            <a
                href={link}
                target="_blank"
                className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm rounded"
            >
                {buttonLabel}
            </a>
        </div>
    )
}