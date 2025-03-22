import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function CategorySection() {
    const categories = await prisma.category.findMany();
    return (
        <div className="py-8 px-6 mx-auto lg:px-8 xl:py-16 max-w-7xl">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-theme-primary-800 md:text-4xl">Le matériel selon vos besoins</h2>
            </div>
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
                {categories.map((category: any) => (
                    <Link key={category.name} href={'/equipments?category=' + category.id.toString()} className="group block">
                        <div
                            aria-hidden="true"
                            className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 className="mt-4 text-base font-bold text-theme-primary-800">{category.name}</h3>
                        <p className="mt-2 text-sm text-theme-primary-800">{category.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}