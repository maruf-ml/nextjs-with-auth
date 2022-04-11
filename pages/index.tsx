import type { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>NextAuth Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header session={session} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);

  return {
    props: {
      session, // we supply session in props which prevents client from having a loading state
    },
  };
};

export default Home;
