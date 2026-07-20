import { getNoteById, getTags } from '@/actions/noteAction';
import NoteForm from '@/components/note-form';
import Button from '@/components/ui/button';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';

const AddNotePage = async props => {
  const tags = await getTags();
  const search = props;
  const searchParams = await search.searchParams;
  const id = searchParams.edit;
  let note;
  if (id) {
    note = await getNoteById(id);
  }

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center p-5">
        <div className="max-w-xl w-full mx-autow-full mb-5">
          <Link href={'/dashboard'}>
            <Button size={'sm'} variant={'green'}>
              <Undo2 size={16} /> Back
            </Button>
          </Link>
        </div>
        <div className="max-w-xl w-full mx-auto border border-neo-border rounded-xl p-7 flex flex-col justify-center items-start ">
          <h4>CREATE A NOTE</h4>
          <p>Add a new note to your personal developer dashboard</p>
          <NoteForm
            initialNote={note}
            isEdit={searchParams.edit}
            tags={tags}
            className={'mt-5'}
          />
        </div>
      </section>
    </>
  );
};

export default AddNotePage;
