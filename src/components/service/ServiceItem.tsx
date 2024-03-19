import React from "react";
import {Service} from "@/utils/types";

interface ServiceItemProps extends React.HTMLAttributes<HTMLDivElement> {
    item: Service;
    icon: any
}

const ServiceItem = (props: ServiceItemProps) => {
    const {item, icon} = props;

    return (
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                {icon}
                <div className="space-y-2">
                    <h3 className="font-bold">{item.title}r</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
