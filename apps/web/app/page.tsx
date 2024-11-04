export default function Home() {
  return (
    <>
      <h1>Just checking : {process.env.NEXT_PUBLIC_AUTH_SECRET}</h1>
    </>
  );
}
