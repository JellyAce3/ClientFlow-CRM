import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#eab308", "#22c55e"];

function ContactStatusChart({ contacts }) {
  const leadCount = contacts.filter(
    (contact) => contact.status === "Lead",
  ).length;

  const clientCount = contacts.filter(
    (contact) => contact.status === "Client",
  ).length;

  const chartData = [
    {
      name: "Leads",
      value: leadCount,
    },
    {
      name: "Clients",
      value: clientCount,
    },
  ];

  const hasContacts = contacts.length > 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Contacts by Status
        </h2>

        <p className="text-sm text-gray-500 dark:text-slate-400">
          Distribution of leads and clients.
        </p>
      </div>

      {!hasContacts ? (
        <div className="flex h-72 items-center justify-center text-gray-500 dark:text-slate-400">
          No contact data available.
        </div>
      ) : (
        <div className="h-72">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={4}
                label={({ name, value }) =>
                  `${name}: ${value}`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderColor: "#334155",
                  color: "#ffffff",
                  borderRadius: "8px",
                }}
              />

              <Legend
                wrapperStyle={{
                  color: "inherit",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default ContactStatusChart;