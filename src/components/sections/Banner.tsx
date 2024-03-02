import Image from 'next/image'
import {cn} from "@/lib/utils";
import {title1, title2} from "@/assets/fonts";
import {lang} from "@/lang";
import {Button} from "@/components/ui/button";
import RenderHtmlContent from "@/components/RenderHTMLContent";
import React from "react";
import {SectionLayout} from "@/components/sections/layout/SectionLayout";

export default function Banner({className}) {

    return (
        <SectionLayout
            className={cn(className, 'flex flex-col md:flex-row items-strech justify-betweenpy-6 px-6 md:py-12 lg:pt-12')}>
            <div className="flex flex-col justify-center md:w-1/2 sm:w-full">
                <h1 className={cn(
                    title1.className,
                    'text-blue text-5xl lg:text-6xl font-semibold'
                )}>
                    {lang.banner.title}
                </h1>
                <h2 className={cn(
                    title1.className,
                    'text-black font-semibold leading-10 text-3xl md:text-4xl mt-8'
                )}>
                    {lang.banner.subtitle}
                </h2>
                <div className="text-base lg:text-xl my-5">
                    <RenderHtmlContent content={lang.banner.contentTitle}/>
                </div>
                <Button
                    variant={'outline'}
                    className={cn(
                        'bg-green border-none font-semibold text-white hover:bg-green/80 rounded-full w-max',
                        title2.className
                    )}>
                    {lang.contact_btn}
                </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end sm:w-full">
                <Image
                    src={"/images/code.png"}
                    width={500}
                    height={500}
                    priority={true}
                    alt="Code Chillo Tech"
                />
            </div>
        </SectionLayout>
    )
}