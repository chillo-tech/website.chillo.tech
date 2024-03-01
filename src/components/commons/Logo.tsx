import { ROUTE_HOME } from '@/config/routes';
import Link from 'next/link';
import { Icons } from './Icons';

const Logo = () => {
  return (
    <div className="w-130">
      <Link href={ROUTE_HOME} className="">
        <Icons.logo />
      </Link>
    </div>
  );
};

export default Logo;
