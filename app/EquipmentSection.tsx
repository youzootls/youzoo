import EquipmentCard from "@/components/EquipmentCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function EquipmentSection() {
    const trendingEquipments = await prisma.equipment.findMany({
        take: 4,
        include: {
            category: true
        },
        where: {
            trending: true
        },
        orderBy: { id: 'desc' }
    });
    return (
        <div className="py-8 px-6 mx-auto lg:py-8 lg:px-6 max-w-7xl">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-theme-primary-800 md:text-4xl">Nouveautés disponibles</h2>
                <Link href="/equipments">
                    <Button className="text-theme-primary-500 text-md md:text-lg" variant="ghost">
                        Voir plus
                        <ArrowRightIcon strokeWidth={1.5} className="ml-2 h-4 w-4"></ArrowRightIcon>
                    </Button>
                </Link>
            </div>
            <div className="py-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16">
                {trendingEquipments.map((equipment: any) => (
                    <EquipmentCard key={equipment.id} props={equipment}></EquipmentCard>
                ))}
            </div>
        </div>
    );
}