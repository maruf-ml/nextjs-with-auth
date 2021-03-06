import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function myApiRoute(req, res) {
  const { user }: any = getSession(req, res);
  res.json({ protected: 'My Secret', id: user.sub });
});
