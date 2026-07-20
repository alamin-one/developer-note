import { getTags } from '@/actions/noteAction';
import DashboardLayout from './DashboardLayout';
import { getCurrentUser } from '@/actions/auth';
import { logOutUser } from '@/actions/auth';

// this is e
const DashboardPage = async () => {
  const tags = await getTags();
  const currentUser = await getCurrentUser();

  return (
    <>
      <section className="w-full mx-auto  flex flex-col lg:flex-row gap-5  ">
        <DashboardLayout
          tags={tags}
          currentUser={currentUser}
          logOutUser={logOutUser}
        />
      </section>
    </>
  );
};

export default DashboardPage;
