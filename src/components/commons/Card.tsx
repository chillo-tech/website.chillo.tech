import { title2 } from '@/assets/fonts';
import { CardItem } from '@/utils/types';
import { cn } from '@/lib/utils';
import RenderHtmlContent from './RenderHTMLContent';

interface CardProps extends React.HTMLAttributes<HTMLDListElement> {
  icon?: React.ReactNode;
  item: CardItem;
  titleClassName?: string | undefined;
}

const Card = ({
  className,
  icon,
  item,
  children,
  titleClassName,
}: CardProps) => {
  return (
    <div className={cn('space-y-3 p-4 text-black', className)}>
      {icon}
      <h3
        className={cn(
          title2.className,
          'font-bold text-2xl',
          'text-transparent bg-clip-text bg-gradient-to-r from-black to-black via-blue',
          titleClassName
        )}>
        {item.title}
      </h3>
      {item.subtitle && (
        <h4
          className={cn(
            title2.className,
            'font-semibold text-sm px-6 py-2 border rounded-md shadow-md w-fit'
          )}>
          {item.subtitle}
        </h4>
      )}
      <div className="py-4">
        <RenderHtmlContent content={item.description} />
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;
