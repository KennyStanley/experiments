import Banner from '../../ui/banner/banner';
import LogoutBtn from '../../ui/logout-btn/logout-btn';

/* eslint-disable-next-line */
export interface DashboardProps {
  username: string;
  logout: () => void;
}

export function Dashboard(props: DashboardProps) {
  return (
    <>
      <Banner username={props.username} />
      <LogoutBtn logout={props.logout} />
    </>
  );
}

export default Dashboard;
