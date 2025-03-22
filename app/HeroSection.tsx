import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div>
            <div className="bg-theme-primary-900 border-b-theme-secondary-500 border-b-8">
                <div className="relative isolate overflow-hidden pt-14">
                    <img
                        src="/herobg.jpg"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-gradient-to-b from-transparent to-theme-primary-800 opacity-25 "
                    />
                    <div className="mx-auto text-center max-w-2xl py-16 px-6 px sm:py-24 lg:py-32 lg:px-8 lg:max-w-4xl">
                        <h1 className="text-4xl font-semibold tracking-tight text-white md:font-bold md:text-5xl pb-8">
                            Louez ou achetez du matériel médical pour enfant
                        </h1>
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-lg md:text-2xl text-white">
                                Youzoo est une association à but non lucratif spécialisée dans le réemploi de matériel médical pour les enfants en situation de handicap.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center w-full pt-8">
                            <Link href="/equipments">
                                <Button size="lg" variant="secondary" className="w-full">Je recherche du matériel</Button>
                            </Link>
                            <Link href="/contact?type=donate">
                                <Button variant="ghost" size="lg" className="w-full text-theme-secondary-500 border border-theme-secondary-500">Je donne ou revends du matériel</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}