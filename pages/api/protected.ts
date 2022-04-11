import { getSession } from 'next-auth/react';

export default async function myApiRoute(req: any, res: any) {
  const session = await getSession({ req });

  if (session) {
    res.json({ protected: 'My Secret', id: session?.user?.name });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
