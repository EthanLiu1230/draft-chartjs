import { BarChart } from "./BarChart.tsx";
import { DoughnutChart } from "./DoughnutChart.tsx";

export function TwoColumnGrid() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 justify-items-center items-end gap-x-4 gap-y-16 lg:grid-cols-2">
        {[1, 2, 3, 4, 5].map(() => (
          <>
            <div className="justify-self-stretch h-72">
              <BarChart />
            </div>
            <div className="h-60">
              <DoughnutChart />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
