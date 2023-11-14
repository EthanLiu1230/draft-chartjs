import { BarChart } from "./BarChart.tsx";
import { DoughnutChart } from "./DoughnutChart.tsx";

export function TwoColumnGrid() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-end justify-items-center gap-x-4 gap-y-16 md:grid-cols-3">
        {[1, 2, 3, 4, 5].map(() => (
          <>
            <div className="h-80 justify-self-stretch md:col-span-2">
              <BarChart />
            </div>
            <div className="h-72">
              <DoughnutChart />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
