import {cn} from '@/lib/utils';
import {lang} from '@/lang';
import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import React from 'react';
import Section from '@/components/commons/section/Section';
import {SECTIONS_IDS} from '@/config/links';
import SectionTitle from "@/components/commons/section/SectionTitle";
import Icons from "@/components/commons/Icons";
import {SERVICES_ICONS} from "@/lang/fr/services";
import TopServiceItem from "@/components/service/TopServiceItem";
import ServiceItem from "@/components/service/ServiceItem";

interface ServiceProps extends React.HTMLAttributes<HTMLDivElement> {
}

const icon = (label: string) => {
    switch (label) {
        case SERVICES_ICONS.DEV:
            return <Icons.dev className="lucide lucide-grid h-10 w-10"/>;
        case SERVICES_ICONS.ART:
            return <Icons.art className="lucide lucide-grid h-10 w-10"/>;
        case SERVICES_ICONS.CHROME:
            return <Icons.chrome className="lucide lucide-grid h-10 w-10"/>;
        case SERVICES_ICONS.CODE:
            return <Icons.code className="lucide lucide-grid h-10 w-10"/>;
        case SERVICES_ICONS.BUSINESS:
            return <Icons.business className="lucide lucide-grid h-10 w-10"/>;
    }
};

function Service({className}: ServiceProps) {
    return (
        <Section
            id={SECTIONS_IDS.SERVICE}
            className={cn(className)}
        >

            <section className="w-full flex flex-col justify-between gap-5 md:flex-row mb-16">
                <aside className="md:w-1/2 lg:w-1/3 w-full">
                    <div className="sticky top-24 flex flex-col gap-2">
                        <SectionTitle
                            className="p-0 mb-4 md:mb-0 min-h-min md:h-min"
                            contentClassName="text-start"
                            subClassName="text-start md:px-0 lg:px-0"
                            subtitle={lang.service.subtitle}>
                            <RenderHtmlContent content={lang.service.title}/>
                        </SectionTitle>
                    </div>
                </aside>

                <div className="md:w-1/2 lg:w-2/3 w-full flex flex-col items-end space-y-8">
                    {lang.service.topServices.map((item, index) => (
                        <TopServiceItem key={index} item={item}/>
                    ))}
                </div>
            </section>

            <section className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {lang.service.services.map((item, index) => (
                    <ServiceItem key={index} item={item} icon={icon(item.icon)}/>
                ))}
            </section>

        </Section>
    );
}

export default Service;
