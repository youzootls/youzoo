import Link from "next/link";

interface Props {
    props: {
        id: number,
        name: string,
        manufacturer: string,
        image: string,
        category: { id: number, name: string }
    };
}

export default function EquipmentCard({ props }: Props) {
    return (
        <Link href={"/equipments/" + props.id} className="w-[275px] mx-auto sm:w-auto sm:mx-0">
            <div className="rounded-md bg-theme-primary-50 hover:opacity-75">
                {/* <div className="relative w-48 top-6 left-0 ps-6 py-2 rounded-r-lg bg-theme-primary-500 text-white font-normal">
                    {props.category.name}
                </div> */}
                <div
                    aria-hidden="true"
                    className="overflow-hidden aspect-h-6 aspect-w-5">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <h3 className="text-theme-primary-800 mt-3 text-base font-bold tracking-tight">{props.name}</h3>
            <p className="text-theme-primary-800 mt-2 text-sm">{props.category.name}</p>
        </Link>
    );
}