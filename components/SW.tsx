import Swal from 'sweetalert2';

type Infor = {
  text: string;
  time: number;
};
const SWAlert = ({ text, time }: Infor) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'success',
    title: text,
  });
};
export default SWAlert;
