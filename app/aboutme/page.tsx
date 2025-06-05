import classes from '@/app/aboutme/page.module.css';

type SearchParams = {
  test?: string;
};

export default async function AboutMe(props: {
	searchParams?: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  return (
    <>
      <h1>About me</h1>
      <p>This is the About me page.</p>
    </>
  );
}