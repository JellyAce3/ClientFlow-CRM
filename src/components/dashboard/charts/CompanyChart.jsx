import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CompanyChart({ contacts }) {
  const companyCounts = contacts.reduce(
    (counts, contact) => {
      const company =
        contact.company?.trim() || "Unknown";

      counts[company] = (counts[company] || 0) + 1;

      return counts;
    },
    {},
  );

  const chartData = Object.entries(companyCounts)
    .map(([company, total]) => ({
      company,
      total,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Top Companies
        </h2>

        <p className="text-sm text-gray-500 dark:text-slate-400">
          Companies with the most contacts.
        </p>
      </div>

      {chartData.length === 0 ? (
        <div className="flex h-72 items-center justify-center text-gray-500 dark:text-slate-400">
          No company data available.
        </div>
      ) : (
        <div className="h-72">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 20,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#64748b"
                opacity={0.25}
              />

              <XAxis
                dataKey="company"
                angle={-20}
                textAnchor="end"
                interval={0}
                height={60}
                tick={{
                  fill: "currentColor",
                  fontSize: 12,
                }}
              />

              <YAxis
                allowDecimals={false}
                tick={{
                  fill: "currentColor",
                  fontSize: 12,
                }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderColor: "#334155",
                  color: "#ffffff",
                  borderRadius: "8px",
                }}
                labelStyle={{
                  color: "#ffffff",
                }}
              />

              <Bar
                dataKey="total"
                name="Contacts"
                fill="#4f46e5"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default CompanyChart;