 
import Link from 'next/link';
import { getAllNotes, getNoteById } from '@/actions/noteAction';
import Button from '@/components/ui/button';
import { Edit, Undo2 } from 'lucide-react';
import DeleteNote from './deleteNote';
import Badeg from '@/components/ui/badeg';
import clsx from 'clsx';

export const dynamicParams = true;
export async function generateStaticParams() {
  const note = await getAllNotes();
  if (!note || !Array.isArray(note)) {
    return [];
  }
  return note.map(item => ({ id: item.id }));
}

const SingleNotepage = async ({ params }) => {
  const { id } = await params;
  const note = await getNoteById(id);
  const date = new Date(note.createdAt).toDateString();

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center p-5">
        <div className="max-w-xl w-full mx-autow-full mb-5">
          <Link href={'/dashboard'} className="w-fit">
            <Button size={'sm'} variant={'green'}>
              <Undo2 size={16} /> Back
            </Button>
          </Link>
        </div>
        <div className="max-w-xl w-full mx-auto border border-neo-border rounded-xl p-7 flex flex-col justify-center items-start ">
          <p> {date}</p>
          <h4 className="mt-5 mb-2"> {note.title}</h4>
          <p>{note.content}</p>

          <div className="space-x-2 mt-5">
            {note.tags.map((item, index) => {
              const color = `bg-${item.bg} text-${item.text}`;

              return (
                <Badeg className={clsx(color)} key={index}>
                  {item.name}
                </Badeg>
              );
            })}
          </div>
          <hr className="text-neo-border w-full mt-5" />
          <div className="mt-5 flex gap-2 flex-wrap">
            <Link href={`/dashboard/notes/add?edit=${note.id}`}>
              <Button variant={'blue'} size={'sm'}>
                <Edit size={12} /> Edit
              </Button>
            </Link>

            <DeleteNote id={note.id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNotepage;
