import Swal from 'sweetalert2';

export const handleActionAlert = (success, message) => {
  Swal.fire({
    icon: success ? 'success' : 'error',
    title: success ? 'Success' : 'Error',
    text: message,
    confirmButtonText: success ? 'Ok' : 'Try Again',
    confirmButtonColor: success ? '#00A645' : '#ef4444',
  });
};

export const showConfirmDialog = async (
  title = 'Delete this note?',
  message = 'This note will be permanently deleted and cannot be recovered.',
) => {
  const result = await Swal.fire({
    icon: 'warning',
    title: title,
    text: message,
    showCancelButton: true,
    confirmButtonText: 'Yes, Confirm',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#00A645',
    cancelButtonColor: '#6b7280',
  });

  return result;
};
