import { createPortal } from 'react-dom';
import classes from './modal.module.css';

export default function Modal({ children, close }: { children: React.ReactNode, close: () => void }) {
  const modalRoot = document.getElementById('modal')!;
  return createPortal(
    <>
      <div className={classes.backdrop} onClick={close}/>
      <div className={classes.modal}>
        {children}
      </div>
    </>,
    modalRoot
  );
}
