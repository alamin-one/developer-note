'use client';

import { SearchIcon } from 'lucide-react';
import Input from './input';
import { use, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = ({ className, search }) => {
  const pathname = usePathname();
  const route = useRouter();
  const searchParams = useSearchParams();
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchItem(search);
  }, [search]);

  useEffect(() => {
    const delayDeBounce = setTimeout(() => {
      if (search === searchItem) return;
      const params = new URLSearchParams(searchParams.toString());

      if (searchItem) {
        params.set('search', searchItem);
        route.push(`${pathname}?${params}`);
      } else {
        params.delete('search');
        route.push(`${pathname}?${params}`);
      }
    }, 300);

    return () => clearTimeout(delayDeBounce);
  }, [pathname, route, search, searchItem, searchParams]);

  return (
    <>
      <div className={`relative ${className}`}>
        <Input
          type="search"
          placeholder="Search..."
          className={'pr-10'}
          onChange={e => setSearchItem(e.target.value)}
        />

        {!search ? (
          <SearchIcon
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        ) : (
          <div className="w-4 h-4 border border-t-2 border-neo-coudy/20 border-t-neo-coudy rounded-full animate-spin absolute right-3 top-1/2 transform -translate-y-1/2"></div>
        )}
      </div>
    </>
  );
};

export default Search;
