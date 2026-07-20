'use client';
import clsx from 'clsx';
import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from 'react';
import Input from './ui/input';
import { useForm } from 'react-hook-form';
import Textarea from './ui/textrea';
import Button from './ui/button';
import { createNote, updateNote } from '@/actions/noteAction';
import { useRouter } from 'next/navigation';
import { handleActionAlert } from '@/lib/handleAlart';

const NoteForm = ({ initialNote, isEdit, className, tags }) => {
  const route = useRouter();
  const [selectedTagIds, setSelectedTagIds] = useState(
    initialNote ? initialNote.tagIds.map(i => i) : [],
  );

  const actionToRul = isEdit
    ? updateNote.bind(null, initialNote?.id)
    : createNote;
  const [state, formAction, pending] = useActionState(actionToRul, null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleTagToggle = id => {
    const selectedId = selectedTagIds.includes(id);

    setSelectedTagIds(prev =>
      selectedId ? prev.filter(item => item !== id) : [...prev, id],
    );
  };
  const onSubmit = data => {
    const formData = new FormData();

    selectedTagIds.forEach(t => formData.append('tag', t));
    formData.append('title', data.title);
    formData.append('content', data.content);

    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (!state) return;
    handleActionAlert(state.success, state.message);

    if (!isEdit) {
      if (state.success) {
        reset();
        route.refresh();
        route.push('/dashboard');
      }
    }
  }, [isEdit, reset, route, state]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        'w-full space-y-3 mt-10',

        className,
      )}
    >
      <Input
        label={'Note Title'}
        error={errors.title}
        placeholder={'Enter note title'}
        defaultValue={initialNote?.title || ''}
        {...register('title', { required: 'Note title is required' })}
      />
      <Textarea
        label={'Note Content'}
        error={errors.content}
        placeholder={'Enter note content'}
        defaultValue={initialNote?.content || ''}
        {...register('content', { required: 'Note content is required' })}
      />

      <label className="text-base uppercase">Assign tags</label>
      <div className="flex flex-wrap gap-3 mt-5">
        {tags.map((item, index) => {
          const isChecked = selectedTagIds.includes(item.id);
          const checkedColor = selectedTagIds.includes(item.id)
            ? `bg-${item.bg} text-${item.text} border border-${item.bg}`
            : `bg-neo-dark text-neo-grey border border-neo-border`;

          return (
            <label
              key={index}
              className={clsx(
                'px-3 py-1 rounded-md cursor-pointer',
                checkedColor,
              )}
            >
              <input
                type="checkbox"
                name="tag"
                value={item.id}
                checked={isChecked}
                onChange={() => handleTagToggle(item.id)}
                className="sr-only peer"
              />
              <span> {item.name}</span>
            </label>
          );
        })}
      </div>
      <Button
        disabled={pending}
        loading={pending}
        type="submit"
        className={'mt-5 w-full'}
      >
        Save
      </Button>
    </form>
  );
};

export default NoteForm;
