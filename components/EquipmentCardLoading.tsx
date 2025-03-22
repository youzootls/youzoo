export default function EquipmentCardLoading() {
    return (
        <div className="w-full mx-auto sm:w-auto sm:mx-0">
            <div className="rounded-md h-96 animate-pulse bg-gray-200">
                {/* <div className="relative w-48 h-10 top-6 left-0 ps-6 py-2 rounded-r-lg animate-pulse bg-gray-500">
                </div> */}
            </div>
            <div className="animate-pulse bg-gray-200 rounded-md h-6 w-56 mt-3"></div>
            <div className="animate-pulse bg-gray-200 rounded-md h-6 w-32 mt-3"></div>
        </div>
    );
}