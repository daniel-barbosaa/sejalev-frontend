import { usePlanner } from "./usePlanner";
import { WeekCanvas } from "./week-canvas";
import { WeekNavigation } from "./week-navigation";

export function Planner() {
  const {
    weekDays,
    getBlocksForDay,
    formatTime,
    setActiveDay,
    activeDay,
    currentDate,
    setCurrentDate,
    dateRange,
  } = usePlanner();

  return (
    <>
      <WeekNavigation
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        dateRange={dateRange}
      />

      <div className="p-4 lg:p-8">
        <WeekCanvas
          weekDays={weekDays}
          getBlocksForDay={getBlocksForDay}
          formatTime={formatTime}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
      </div>
    </>
  );
}
