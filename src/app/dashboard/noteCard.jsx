import Link from 'next/link';
import { Edit, Eye } from 'lucide-react';
import Badeg from '@/components/ui/badeg';
import Button from '@/components/ui/button';
import DeleteNote from './notes/[id]/deleteNote';
import Card from '@/components/ui/card';
import clsx from 'clsx';

const NoteCard = ({ item }) => {
  const date = new Date(item?.createdAt).toDateString();

  return (
    <Card>
      <h4 className="mb-5"> {item?.title}</h4>
      <p>{date} </p>
      <p className="mt-1">{item?.content}</p>
      <hr className="my-5 text-neo-border" />
      <div className="flex gap-2 flex-wrap">
        {item?.tags?.map((tItem, tIndex) => (
          <Badeg
            className={clsx(` bg-${tItem?.bg} text-${tItem?.text}`)}
            key={tIndex}
          >
            {tItem?.name}
          </Badeg>
        ))}
      </div>
      <div className="mt-5 flex gap-2 flex-wrap">
        <Link href={`http://localhost:3000/dashboard/notes/${item.id}`}>
          <Button variant={'green'} size={'sm'}>
            <Eye size={12} /> View
          </Button>
        </Link>
        <Link
          href={`http://localhost:3000/dashboard/notes/add?edit=${item.id}`}
        >
          <Button variant={'blue'} size={'sm'}>
            <Edit size={12} /> Edit
          </Button>
        </Link>

        <DeleteNote id={item.id} />
      </div>
    </Card>
  );
};

export default NoteCard;
