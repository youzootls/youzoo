import EquipmentCard from "@/components/EquipmentCard";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import { prisma } from "@/lib/prisma";

export default async function EquipmentsList({
    query,
    category,
    currentPage,
}: {
    query: string;
    category: string;
    currentPage: number;
}) {
    const equipments = await prisma.equipment.findMany({
        include: {
            category: true
        },
        where: {
            name: {
                contains: query.toLowerCase(),
                mode: 'insensitive'
            },
            ...(category !== "0" && {
                categoryId: {
                    equals: category
                }
            })
        }
    });

    return (
        <div className="py-4 mx-auto lg:py-6">
            {equipments.length > 0 ?
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:min-h-[550px] overflow-auto">
                    {equipments.map((equipment: any) => (
                        <EquipmentCard key={equipment.id} props={equipment}></EquipmentCard>
                    ))}
                </div>
                :
                <div className="m-auto text-center h-[550px] w-full p-32">
                    <ExclamationTriangleIcon strokeWidth={1} className="h-48 w-48 m-auto text-theme-primary-800"></ExclamationTriangleIcon>
                    <h1 className="text-4xl font-semibold tracking-tight text-theme-primary-800 md:font-bold md:text-5xl pb-8">
                        OUPS !!!
                    </h1>
                    <p className="text-lg text-theme-primary-800">
                        Il n&apos;y a rien a afficher ici !
                    </p>
                </div>
            }
        </div>
    );
}