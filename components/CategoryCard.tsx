interface Props {
    name: string;
    bgImage: string;
}

export default function CategoryCard({ name, bgImage }: Props) {
    const imgClass = 'rounded-xl h-full w-full bg-[url(\'' + bgImage + '\')] bg-cover bg-center group-hover:opacity-75';
    return (
        <div className={imgClass}>
            <div className="rounded-xl h-full w-full flex justify-center items-center backdrop-brightness-50">
                <span className="text-white text-4xl w-1/2 text-center">{name}</span>
            </div>
        </div>
    );
}