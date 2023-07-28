import { Scheduler } from "@aldabil/react-scheduler";
import { useState } from "react";

export default function Calendar() {
      // State untuk menyimpan nilai warna yang dipilih
  const [selectedColor, setSelectedColor] = useState("#ff0000"); // Warna default

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
  };
  return (
    <Scheduler
      deletable={true}
      fields={[
        {
          name: "user_id",
          type: "select",
          // Should provide options with type:"select"
          options: [
            { id: 1, text: "John", value: 1 },
            { id: 2, text: "Mark", value: 2 },
          ],
          config: { label: "User", required: true, errMsg: "Plz Select User" },
        },
        {
          name: "Description",
          type: "input",
          default: "Default Value...",
          config: { label: "Details", multiline: true, rows: 4 },
        },
        {
            name: "color",
            type: "select",
            options: [
              { id: 1, text: "Red", value: "#ff0000" },
              { id: 2, text: "Green", value: "#00ff00" },
              { id: 3, text: "Blue", value: "#0000ff" },
              { id: 4, text: "Yellow", value: "#ffff00" },
              { id: 5, text: "Purple", value: "#800080" },
              { id: 6, text: "Orange", value: "#ffa500" },
            ],
            config: { label: "Color", required: true },
          },
      ]}
      onEventClick={handleColorChange}
      week={{
        weekDays: [1, 2, 3, 4, 5, 6],
        weekStartOn: 1,
        startHour: 7,
        endHour: 23,
        step: 60
      }}
      day={{
        startHour: 7,
        endHour: 23,
        step: 30
      }}
    />
  );
}
