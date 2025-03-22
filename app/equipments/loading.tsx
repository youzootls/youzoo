import EquipmentCardLoading from "@/components/EquipmentCardLoading";
import EquipmentHeader from "./EquimentsHeader";

export default function EquipmentLoading() {
    return (
        <main>
            <EquipmentHeader></EquipmentHeader>
            <div className="py-6 px-3 mx-auto lg:py-8 max-w-7xl">
                <div className="mt-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2">
                            <div className="animate-pulse bg-gray-400 rounded-full h-10 w-48"></div>
                            <div className="animate-pulse bg-gray-200 rounded-full h-10 w-24"></div>
                            <div className="animate-pulse bg-gray-200 rounded-full h-10 w-24"></div>
                            <div className="animate-pulse bg-gray-200 rounded-full h-10 w-24"></div>
                            <div className="animate-pulse bg-gray-200 rounded-full h-10 w-24"></div>
                        </div>
                        <div className="animate-pulse bg-gray-200 rounded-lg h-10 w-full"></div>
                    </div>
                    <div className="py-4 mx-auto lg:py-4">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:min-h-[550px] overflow-auto">
                            <EquipmentCardLoading></EquipmentCardLoading>
                            <EquipmentCardLoading></EquipmentCardLoading>
                            <EquipmentCardLoading></EquipmentCardLoading>
                            <EquipmentCardLoading></EquipmentCardLoading>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}