import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = () => {
  const MySwal = withReactContent(Swal);
  useEffect(() => {}, []);
  // MySwal.fire({
  //   title: 'Hay un error en tu formulario',
  //   color: '#EF3061',
  //   html: '<div style="color:#333333">Revisa tu formulario</div>',
  //   icon: 'warning',
  //   iconColor: '#EF3061',
  //   timer: 4000,
  //   showConfirmButton: false,
  // showCloseButton: true,
  // });
  // MySwal.fire({
  //   title: 'Información guardada con éxito!',
  //   color: '#07469C',
  //   html: '<div style="color:#333333">Revisa tu formulario</div>',
  //   icon: 'success',
  //   iconColor: '#07469C',
  //   timer: 4000,
  //   showConfirmButton: false,
  // showCloseButton: true,
  // });
  // MySwal.fire({
  //   title: '¿Seguro que deseas continuar?',
  //   color: '#0099E1',
  //   html: '<div style="color:#333333">BLA BLA BLA</div>',
  //   icon: 'question',
  //   iconColor: '#0099E1',
  //   showCancelButton: true,
  //   confirmButtonText: 'CONTINUE',
  //   cancelButtonText: 'CANCEL',
  //   confirmButtonColor: '#0099E1',
  //   cancelButtonColor: '#757575',
  //   reverseButtons: true,
  //   showCloseButton: true,
  // });
  return <div></div>;
};

export default Alert;
