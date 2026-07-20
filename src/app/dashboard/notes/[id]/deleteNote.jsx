'use client';

import { deleteNote } from '@/actions/noteAction';
import Button from '@/components/ui/button';
import { handleActionAlert, showConfirmDialog } from '@/lib/handleAlart';
import { Trash2 } from 'lucide-react';

const DeleteNote = ({ id }) => {
  const handleDeleteNote = async () => {
    const confrim = await showConfirmDialog();
    if (confrim.isConfirmed) {
      const res = await deleteNote(id);
      if (res.success) {
        handleActionAlert(res.success, res.message);
      }
    }
  };

  return (
    <Button onClick={() => handleDeleteNote()} variant={'pink'} size={'sm'}>
      <Trash2 size={12} />
      Delete
    </Button>
  );
};

export default DeleteNote;
