import { Scheduler } from "@aldabil/react-scheduler";
import { id } from "date-fns/locale";
import Layout from "@/example/containers/Layout";
import PageTitle from "@/example/components/Typography/PageTitle";

export default function Calendar() {
  return (
    <Layout>
      <PageTitle>Kalender Kegiatan</PageTitle>
      <div className="mb-8">
      <Scheduler
        locale={id}
        draggable={false}
        hourFormat="24"
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
              label: "Pengguna",
              required: true,
              errMsg: "Pilih User",
            },
          },
          {
            name: "Description",
            type: "input",
            config: { label: "Detail Acara", placeholder: "Detail Acara...", multiline: true, rows: 4 },
          },
          {
            name: "color",
            type: "select",
            options: [
              { id: 1, text: "Biru Muda", value: "#22D3EE" },
              { id: 2, text: "Merah", value: "#C7172C" },
              { id: 3, text: "Kuning", value: "#FDD100" },
              { id: 4, text: "Hitam", value: "#111827" },
            ],
            config: { label: "Warna", required: true, errMsg: "Pilih Warna" },
          },
        ]}
        month={{
          weekDays: [1, 2, 3, 4, 5, 6],
          weekStartOn: 0,
          startHour: 7,
          endHour: 23,
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
      </div>
    </Layout>
  );
}
