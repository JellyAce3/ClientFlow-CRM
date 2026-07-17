import QuickActions from "../components/dashboard/QuickActions";
import RecentContacts from "../components/dashboard/RecentContacts";
import {
  FaUsers,
  FaUserPlus,
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";

import StatsCard from "../components/dashboard/StatsCard";
import contacts from "../data/contacts";

function Dashboard() {
  const totalContacts = contacts.length;

  const totalLeads = contacts.filter(
    (contact) => contact.status === "Lead",
  ).length;

  const totalClients = contacts.filter(
    (contact) => contact.status === "Client",
  ).length;

  const followUps = 3;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

        <p className="text-gray-500 mt-2">Here's an overview of your CRM.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Contacts"
          value={totalContacts}
          icon={<FaUsers />}
          color="bg-blue-500"
        />

        <StatsCard
          title="Leads"
          value={totalLeads}
          icon={<FaUserPlus />}
          color="bg-yellow-500"
        />

        <StatsCard
          title="Clients"
          value={totalClients}
          icon={<FaBuilding />}
          color="bg-green-500"
        />

        <StatsCard
          title="Follow Ups"
          value={followUps}
          icon={<FaClipboardCheck />}
          color="bg-purple-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Stats Cards */}
      </div>

      <QuickActions />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Stats Cards */}
      </div>

      <RecentContacts />
    </>
  );
}

export default Dashboard;
