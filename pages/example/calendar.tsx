import { Scheduler } from "@aldabil/react-scheduler";
import { useState } from "react";
import { id } from "date-fns/locale";
import Layout from "@/example/containers/Layout";
import PageTitle from "@/example/components/Typography/PageTitle";

export default function Calendar() {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [defaultColor, setDefaultColor] = useState("#0000ff");

  return (
    <Layout>
      <PageTitle>Kalender Kegiatan</PageTitle>
      <Scheduler
        locale={id}
        hourFormat="24"
        deletable={true}
        editable={true}
        translations={{
          navigation: {
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            today: "Hari Ini",
          },
          form: {
            addTitle: "Tambah Acara",
            editTitle: "Ubah Acara",
            confirm: "Submit",
            delete: "Hapus",
            cancel: "Batal",
          },
          event: {
            title: "Judul",
            start: "Mulai",
            end: "Selesai",
            allDay: "Semua Hari",
          },
          moreEvents: "More...",
          loading: "Memproses..."
        }}
        fields={[
          {
            name: "user_id",
            type: "select",
            options: [
              { id: 1, text: "John", value: 1 },
              { id: 2, text: "Mark", value: 2 },
            ],
            config: {
              label: "User",
              required: true,
              errMsg: "Pilih User",
              
            },
          },
          {
            name: "Description",
            type: "input",
            default: "Kegiatan",
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
            config: { label: "Warna", required: true },
          },
        ]}
        onEventClick={(event: any) => {
          setSelectedColor(event.color);
        }}
        week={{
          weekDays: [1, 2, 3, 4, 5, 6],
          weekStartOn: 0,
          startHour: 7,
          endHour: 23,
          step: 60,
        }}
        day={{
          startHour: 7,
          endHour: 23,
          step: 30,
        }}
      />
    </Layout>
  );
}
