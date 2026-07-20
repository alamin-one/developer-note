import { getAllNotes, getTags } from '@/actions/noteAction';
import DashboardLayout from './DashboardLayout';
import { getCurrentUser } from '@/actions/auth';
import { logOutUser } from '@/actions/auth';

// this is e
const DashboardPage = async ({ searchParams }) => {
  const params = await searchParams;

  const filtredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) =>
        value !== undefined && value !== '' && value !== ' ' && value !== "''",
    ),
  );

  const tags = await getTags();
  const notes = await getAllNotes(filtredParams);
  const currentUser = await getCurrentUser();

  return (
    <>
      <section className="w-full mx-auto  flex flex-col lg:flex-row gap-5  ">
        <DashboardLayout
          tags={tags}
          notes={notes}
          currentUser={currentUser}
          logOutUser={logOutUser}
          search={filtredParams.search}
        />
      </section>
    </>
  );
};

export default DashboardPage;
