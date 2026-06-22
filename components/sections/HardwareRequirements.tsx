const hardware = [
  { hardware: "Processor", spec: "Intel Core i5 (10th generation) or equivalent AMD Ryzen" },
  { hardware: "RAM", spec: "16 GB DDR4 minimum" },
  { hardware: "Storage", spec: "256 GB SSD minimum" },
  { hardware: "Display", spec: "14-inch screen with 1920x1080 resolution or higher" },
  { hardware: "Internet", spec: "Stable connection of at least 100 Mbps" },
];

export default function HardwareRequirements() {
  return (
    <section id="hardware-requirements">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Hardware Requirements</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          The development machine must comfortably run the code editor, local development server,
          database, and browser simultaneously.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hardware.map((h) => (
            <div
              key={h.hardware}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {h.hardware}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{h.spec}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}