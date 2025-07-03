import classes from '@/src/app/components/content-wrapper/content-wrapper.module.css';

export default function ContentWrapper({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={classes.contentWrapper}>
      <main className={classes.mainContent}>
        {children}
      </main>
    </div>
  );
};