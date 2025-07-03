import { createPortal } from 'react-dom';
import classes from '@/src/app/[locale]/components/modal/modal.module.css';

export default function Modal({ children, close }: { children: React.ReactNode, close: () => void }) {
  const modalRoot = document.body;
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
