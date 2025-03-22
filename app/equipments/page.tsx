import { prisma } from "@/lib/prisma";
import EquipmentsFilter from "./EquipmentsFilter";
import EquipmentsList from "./EquipmentsList";
import EquipmentHeader from "./EquimentsHeader";

export default async function EquipmentsPage({ searchParams }: {
    searchParams?: {
        query?: string;
        category?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const category = searchParams?.category || '0';
    const currentPage = Number(searchParams?.page) || 1;
    const categories = await prisma.category.findMany({
        orderBy: { name: 'asc' }
    });

    return (

        <main>
            <EquipmentHeader></EquipmentHeader>
            <div className="py-6 px-3 mx-auto lg:py-8 max-w-7xl">
                <EquipmentsFilter categories={categories}></EquipmentsFilter>
                <EquipmentsList query={query} category={category} currentPage={currentPage}></EquipmentsList>
            </div>
        </main>
    );
}