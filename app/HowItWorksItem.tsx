import React from 'react';

export default function HowItWorksItem({ title, text, children }: { title: string, text: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2 items-center rounded-2xl bg-white px-12 py-8 shadow-2xl shadow-theme-primary-500/50 sm:gap-4">
            <div className="flex h-16 w-16 items-center justify-center bg-theme-primary-500 rounded-full">
                {children}
            </div>
            <h3 className="text-xl font-semibold text-theme-primary-800 sm:text-2xl lg:text-3xl">
                {title}
            </h3>
            {/* <p className="text-sm text-center font-semibold text-theme-primary-800 block sm:text-md lg:text-lg">
                {text}
            </p> */}
            <p className="text-sm text-center font-semibold text-theme-primary-800 block sm:text-md lg:text-lg">
                {text}
            </p>
        </div>
    );
};
