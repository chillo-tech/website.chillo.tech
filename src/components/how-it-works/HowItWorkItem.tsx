import { HowItWork } from '@/lang/fr/content';
import { paragraph, title2 } from '@/assets/fonts';
import { cn } from '@/lib/utils';

interface HowItWorkItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: HowItWork;
  reverse: boolean;
}

const HowItWorkItem = (props: HowItWorkItemProps) => {
  const { item, reverse } = props;

  return (
    <section
      className={`mb-8 flex justify-between items-center w-full ${
        reverse ? 'md:flex-row-reverse' : ''
      } `}>
      <div className="order-1 md:w-5/12 sm:w-0 sm:hidden md:block"></div>
      <div className="z-20 flex items-center order-1 bg-blue shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{item.id}</h1>
      </div>
      <article className="order-1 border-2 border-dark-gray rounded-md shadow-xl md:w-5/12 px-6 py-4 sm:w-10/12">
        <h3 className={cn('mb-3 font-bold text-blue text-xl md:text-3xl')}>
          {item.title}
        </h3>
        <h6 className={cn(title2.className, 'mb-3 text-blue font-medium')}>
          {item.subtitle}
        </h6>
        <p className={cn(paragraph.className, 'text-black leading-tight')}>
          {item.description}
        </p>
      </article>
    </section>
  );
};

export { HowItWorkItem };
