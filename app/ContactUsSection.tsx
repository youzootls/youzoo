import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactUsSection() {
    return (
        <div className="py-8 px-6 mx-auto xl:py-16 lg:px-8 xl:w-[1280px]">
            <div className="rounded-3xl px-8 py-8 md:py-16 bg-theme-primary-50 flex flex-col gap-12">
                <h1 className="text-2xl text-center font-bold tracking-tight text-theme-primary-800 md:text-4xl">Une question ?</h1>
                <p className="text-md text-theme-primary-800 font-normal text-center md:text-lg">
                    Pour toute demande d&apos;essai ou de collecte de matériel médical,<br />vous pouvez nous contacter par téléphone au
                    <span className="text-xl font-extrabold text-theme-primary-800"> 07 82 12 28 83 </span>ou via notre formulaire de contact
                </p>
                <div className="flex items-center justify-center gap-8">
                    <Link href="/contact">
                        <Button className="text-white md:text-lg" variant="secondary">Nous contacter</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}