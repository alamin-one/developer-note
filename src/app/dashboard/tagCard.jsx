'use client';

import Button from '@/components/ui/button';
import { X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const TagCard = ({ tags }) => {
  const pathname = usePathname();
  const route = useRouter();
  const p = useSearchParams();
  const params = new URLSearchParams(p.toString());
  const handleTagFilter = name => {
    params.set('tag', name);
    route.push(`${pathname}?${params.toString()}`);
  };

  const tag = params.get('tag');

  const handleTagRemove = () => {
    params.delete('tag');
    route.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <ul className="space-y-5">
        {tags.map(tag => (
          <li
            onClick={() => handleTagFilter(tag.name)}
            key={tag.id}
            className={`bg-${tag.bg} text-${tag.text} font-semibold px-5 py-2 rounded-md cursor-pointer`}
          >
            {tag.name}
          </li>
        ))}
      </ul>
      {tag && (
        <Button
          onClick={() => handleTagRemove()}
          className={'mt-5 w-full bg-red-400'}
        >
          <X size={16} /> Remove Filter
        </Button>
      )}
    </>
  );
};
export default TagCard;
