'use client';

import { deleteNote } from '@/actions/noteAction';
import Button from '@/components/ui/button';
import { handleActionAlert, showConfirmDialog } from '@/lib/handleAlart';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DeleteNote = ({ id }) => {
  const router = useRouter();
  const handleDeleteNote = async () => {
    const confrim = await showConfirmDialog();
    if (confrim.isConfirmed) {
      const res = await deleteNote(id);
      if (res.success) {
        router.push('/dashboard');
        router.refresh();
        handleActionAlert(res.success, res.message);
      }
    }
  };

  return (
    <Button onClick={() => handleDeleteNote(id)} variant={'pink'} size={'sm'}>
      <Trash2 size={12} />
      Delete
    </Button>
  );
};

export default DeleteNote;
