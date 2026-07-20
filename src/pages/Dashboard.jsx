import QuickActions from "../components/dashboard/QuickActions";
import RecentContacts from "../components/dashboard/RecentContacts";
import StatsCard from "../components/dashboard/StatsCard";
import { useContacts } from "../components/context/ContactContext";
import ContactStatusChart from "../components/dashboard/charts/ContactStatusChart";
import CompanyChart from "../components/dashboard/charts/CompanyChart";
import {
  FaUsers,
  FaUserPlus,
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";

function Dashboard() {
  const { contacts } = useContacts();

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
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here's an overview of your CRM.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
       <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ContactStatusChart contacts={contacts} />
        <CompanyChart contacts={contacts} />
      </div>
      <QuickActions />

      <RecentContacts contacts={contacts} />
    </>
  );
}

export default Dashboard;