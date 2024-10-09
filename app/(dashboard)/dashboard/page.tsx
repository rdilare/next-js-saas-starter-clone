import { redirect } from 'next/navigation';
import { Settings } from './settings';
import { Workroom } from './workroom/page';
import { getTeamForUser, getUser } from '@/lib/db/queries';

export default async function SettingsPage() {
  redirect('/dashboard/workroom');

  // const user = await getUser();

  // if (!user) {
  //   redirect('/login');
  // }

  // const teamData = await getTeamForUser(user.id);

  // if (!teamData) {
  //   throw new Error('Team not found');
  // }

  // return <Settings teamData={teamData} />;
  return <Workroom />;
}
