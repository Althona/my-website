import classes from '@/src/app/[locale]/components/content-wrapper/content-wrapper.module.css';

type ContentWrapperProps = {
  children: React.ReactNode;
};

export default function ContentWrapper({children}: ContentWrapperProps) {
  return (
    <div className={classes.contentWrapper}>
      <main className={classes.mainContent}>
        {children}
      </main>
    </div>
  );
};