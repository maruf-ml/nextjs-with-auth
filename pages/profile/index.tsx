import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

const Profile = () => {
  const { user, error, isLoading } = useUser();
  return (
    !isLoading && (
      <div>
        <p>Username: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Id: {user?.sub}</p>
      </div>
    )
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Profile;
