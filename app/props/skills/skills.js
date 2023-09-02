export default function Skills() {
  return (
    <div className="p-5 mt-6 bg-slate-900 w-full rounded-lg flex flex-col py-5">
      <h1 className="text-white font-bold text-lg mb-1">My Skills?</h1>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          HTML
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          40%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-red-400 h-2.5 rounded-full"
          style={{ width: "40%" }}
        ></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          CSS
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          30%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-blue-400 h-2.5 rounded-full"
          style={{ width: "30%" }}
        ></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Javascript
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          5%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-amber-300 h-2.5 rounded-full"
          style={{ width: "5%" }}
        ></div>
      </div>
    </div>
  );
}
