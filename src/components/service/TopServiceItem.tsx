import React from 'react';
import { Service } from '@/utils/types';

interface TopServiceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: Service;
}

const TopServiceItem = (props: TopServiceItemProps) => {
  const { item } = props;

  return (
    <div className="relative overflow-hidden rounded-lg p-2 border-2 bg-white border-black md:w-4/5 sm:w-full shadow-xl">
      <div className="flex min-h-[180px] flex-col justify-between rounded-md p-6">
        <span className="bg-black d-block border text-white rounded-xl text-bold p-2 text-center min-w-48 w-max">
          {item.subject}
        </span>
        <div className="space-y-2 mt-5">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default TopServiceItem;
