export default function EquipmentHeader() {
    return (
        <div className="relative bg-theme-primary-800">
            <img
                alt=""
                src="equipment.jpeg"
                className="aspect-[6/2] sm:aspect-[8/2] lg:aspect-[10/2] w-full object-cover bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <h2 className="absolute left-6 xl:bottom-8 bottom-4 block text-2xl font-bold tracking-tight text-white md:text-3xl xl:text-4xl">
                Matériel médical
            </h2>
        </div>
    );
}