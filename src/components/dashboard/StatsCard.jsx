function StatsCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;