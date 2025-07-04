import { createPortal } from 'react-dom';
import classes from '@/src/app/[locale]/components/modal/modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  close: () => void;
};

export default function Modal({ children, close }: ModalProps) {
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
