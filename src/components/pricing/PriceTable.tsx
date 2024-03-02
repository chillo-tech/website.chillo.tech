import React from "react";
import {cn} from "@/lib/utils";
import Icons from "@/components/commons/Icons";
import {title2} from "@/assets/fonts";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {cva, VariantProps} from "class-variance-authority";

const priceTableVariants = cva(
    'container border-2 border-gold relative p-5 rounded-md min-w-48 md:min-w-80',
    {
        variants: {
            variant: {
                standard: 'bg-white text-black',
                pro: 'bg-blue text-white',
            },
            size: {
                default: 'min-h-80',
                large: 'min-h-96',
            },
        },
        defaultVariants: {
            variant: 'standard',
            size: 'default',
        },
    }
);

interface PriceTableProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof priceTableVariants> {
    title: string;
    subtitle?: string;
    description?: string;
    price: number;
    pricePrefix?: string;
    priceSuffix?: string;
    services: string[];
}

const PriceTable = React.forwardRef<HTMLDivElement, PriceTableProps>(
    (
        {
            className,
            variant,
            title,
            subtitle,
            description,
            price,
            pricePrefix,
            priceSuffix,
            services,
            size,
            ...props
        },
        ref
    ) => {
        return (
            <div
                className={cn(priceTableVariants({ variant, size, className }))}
                ref={ref}
                {...props}>
                <Icons.crown
                    color={variant == 'standard' ? 'blue' : 'gold'}
                    className={cn(
                        'absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12'
                    )}
                />
                <div className="text-center w-full py-6 space-y-1">
                    <h2
                        className={cn(title2.className, 'text-2xl md:text-4xl font-bold')}>
                        {title}
                    </h2>
                    <h3>{subtitle}</h3>
                    {description && <p>{description}</p>}
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <Button className="inline-block" variant={'primary'}>
                        Souscrire
                    </Button>
                    <Button className="inline-block" variant={'secondary'}>
                        Nous-Contactez
                    </Button>
                </div>
                <Separator className="bg-dark-gray mt-6" />
                <ul className="p-4 w-fit space-y-4">
                    {services.map((service, index) => (
                        <li
                            className="relative flex items-center pl-6"
                            key={`service-${index}`}>
                            <Icons.check
                                color={variant == 'standard' ? 'blue' : 'white'}
                                className="absolute w-4 h-4 left-0 inline-block"
                            />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
);

export default PriceTable;