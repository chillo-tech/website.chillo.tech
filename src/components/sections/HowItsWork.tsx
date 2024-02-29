import RenderHtmlContent from "@/components/RenderHTMLContent";
import React from "react";
import {cn} from "@/lib/utils";
import {lang} from "@/lang";
import {SectionLayout, SectionTitle} from "@/components/sections/layout/SectionLayout";
import {HowItWork} from "@/lang/fr/content";
import {paragraph, title2} from "@/assets/fonts";

interface HowItWorkItemProps {
    item: HowItWork
    reverse: boolean
}

const HowItWorkItem = (props: HowItWorkItemProps) => {
    const {
        item,
        reverse
    } = props

    return (
        <div className={`mb-8 flex justify-between items-center w-full ${reverse ? 'md:flex-row-reverse' : ''} `}>
            <div className="order-1 md:w-5/12 sm:w-0 sm:hidden md:block"></div>
            <div className="z-20 flex items-center order-1 bg-blue shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{item.id}</h1>
            </div>
            <div
                className="order-1 border-2 border-dark-gray rounded-md shadow-xl md:w-5/12 px-6 py-4 sm:w-10/12">
                <h3 className={cn('mb-3 font-bold text-blue text-xl md:text-3xl')}>{item.title}</h3>
                <h6 className={cn(title2.className, 'mb-3 text-blue font-medium')}>{item.subtitle}</h6>
                <p className={cn(paragraph.className, 'text-black leading-tight')}>{item.description}</p>
            </div>
        </div>
    )
}

export default function HowItsWork({className}) {

    return (
        <SectionLayout className={cn(className)}>
            <SectionTitle className="p-0 mb-4 md:mb-0" subtitle={lang.how_its_work.subtitle}>
                <RenderHtmlContent content={lang.how_its_work.title}/>
            </SectionTitle>
            <div className="relative wrap overflow-hidden">
                <div className="absolute border-blue h-full border md:left-1/2 sm:left-[4%]"></div>
                {lang.how_its_work.howItWorks.map((howItWork, index) => (
                    <HowItWorkItem item={howItWork} reverse={(index % 2) === 0}/>
                ))}
            </div>
        </SectionLayout>
    )
}