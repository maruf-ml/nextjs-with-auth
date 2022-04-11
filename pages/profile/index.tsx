import { getSession, useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <div>
        <p>Username: {session.user?.name}</p>
        <p>Email: {session.user?.email}</p>
      </div>
    );
  }

  return <p>Access Denied</p>;
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default Profile;
