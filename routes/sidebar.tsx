/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive (pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/example', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
    exact: true,
  },
  {
    path: '/example/calendar',
    icon: 'HomeIcon',
    name: 'Calendar',
    exact: true,
  },
  // master materi
  {
    icon: 'PagesIcon',
    name: 'Master Materi',
    routes: [
      // submenu
      {
        path: '/example/coba',
        name: 'Mata Pelajaran',
      },
      {
        path: '#',
        name: 'Kurikulum',
      },
      {
        path: '#',
        name: 'BAB',
      },
      {
        path: '#',
        name: 'Silabus',
      },
      {
        path: '#',
        name: 'Mata Ajar',
      },
    ],
  },
  // master region
  {
    icon: 'PagesIcon',
    name: 'Master Region',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Kota',
      },
      {
        path: '#',
        name: 'Kecamatan',
      },
      {
        path: '#',
        name: 'Gedung',
      },
      {
        path: '#',
        name: 'Ruangan',
      },
    ],
  },
  // perpindahan siswa
  {
    icon: 'PagesIcon',
    name: 'Perpindahan Siswa',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Gedung Siswa',
      },
      {
        path: '#',
        name: 'Produk Siswa',
      },
      {
        path: '#',
        name: 'Gedung',
      },
      {
        path: '#',
        name: 'Ruangan',
      },
    ],
  },
  // soal
  {
    icon: 'PagesIcon',
    name: 'Soal',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Sumber Soal',
      },
      {
        path: '#',
        name: 'Wacana',
      },
      {
        path: '#',
        name: 'Upload Video',
      },
      {
        path: '#',
        name: 'Mengisi Soal',
      },
      {
        path: '#',
        name: 'Verifikasi Soal',
      },
      {
        path: '#',
        name: 'Target Pengerjaan Soal',
      },
    ],
  },
  // paket dan bundle soal
  {
    icon: 'PagesIcon',
    name: 'Paket dan Bundle Soal',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Membuat Bundle',
      },
      {
        path: '#',
        name: 'Membuat Paket',
      },
    ],
  },
  // buku
  {
    icon: 'PagesIcon',
    name: 'Buku',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Mengisi Teori',
      },
      {
        path: '#',
        name: 'Membuat Buku',
      },
      {
        path: '#',
        name: 'Buku Teori Teaser',
      },
    ],
  },
  // bah
  {
    icon: 'PagesIcon',
    name: 'BAH',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Membuat BAH',
      },
      {
        path: '#',
        name: 'Menautkan BAH-Kelas',
      },
      {
        path: '#',
        name: 'Monitoring BAH-Kelas',
      },
    ],
  },
  // tob
  {
    icon: 'PagesIcon',
    name: 'TOB',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Membuat TOB',
      },
      {
        path: '#',
        name: 'Paket Soal Teaser',
      },
    ],
  },
  {
    path: '#',
    icon: 'PagesIcon',
    name: 'Produk Kelompok',
  },
  // jpmp
  {
    icon: 'PagesIcon',
    name: 'JPMP',
    routes: [
      // submenu
      {
        path: '#',
        name: 'JPMP',
      },
      {
        path: '#',
        name: 'JPMP Kelas',
      },
      {
        path: '#',
        name: 'Validasi JPMP Kelas',
      },
    ],
  },
  {
    path: '#',
    icon: 'PagesIcon',
    name: 'Kunci Jawaban',
  },
  // produk
  {
    icon: 'PagesIcon',
    name: 'Produk',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Jenis Diskon',
      },
      {
        path: '#',
        name: 'Jenis Diskon Kota',
      },
      {
        path: '#',
        name: 'Komponen Produk',
      },
      {
        path: '#',
        name: 'Produk Mix',
      },
      {
        path: '#',
        name: 'Pemberlakuan Produk',
      },
      {
        path: '#',
        name: 'Bundling',
      },
    ],
  },
  {
    path: '#',
    icon: 'PagesIcon',
    name: 'Rekening',
  },
  // transaksi paket bundle
  {
    icon: 'PagesIcon',
    name: 'Transaksi Paket Bundle',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Simulasi',
      },
      {
        path: '#',
        name: 'Pendaftaran',
      },
      {
        path: '#',
        name: 'Pembayaran Cicilan',
      },
      {
        path: '#',
        name: 'Produk Mix',
      },
      {
        path: '#',
        name: 'Pemberlakuan Produk',
      },
      {
        path: '#',
        name: 'Bundling',
      },
    ],
  },
  {
    path: '#',
    icon: 'PagesIcon',
    name: 'Register GO Bimbel Online',
  },
  // transaksi paket satuan
  {
    icon: 'PagesIcon',
    name: 'Transaksi Paket Satuan',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Simulasi',
      },
      {
        path: '#',
        name: 'Pembayaran',
      },
    ],
  },
  // master golconsv2
  {
    icon: 'PagesIcon',
    name: 'Master GolconsV2',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Kota GO',
      },
      {
        path: '#',
        name: 'Bidang',
      },
    ],
  },
  // gedung
  {
    icon: 'PagesIcon',
    name: 'Gedung',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Data Gedung',
      },
      {
        path: '#',
        name: 'Kepemilikan',
      },
    ],
  },
  // kelas
  {
    icon: 'PagesIcon',
    name: 'Kelas',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Buat Kelas Baru',
      },
      {
        path: '#',
        name: 'Daftar Data Kelas',
      },
      {
        path: '#',
        name: 'Peluncuran Kelas',
      },
      {
        path: '#',
        name: 'Menjalankan Kelas',
      },
      {
        path: '#',
        name: 'Persetujuan RE',
      },
      {
        path: '#',
        name: 'Perpanjang RE',
      },
      {
        path: '#',
        name: 'Akhiri Kelas',
      },
      {
        path: '#',
        name: 'Kelas Fasilitas',
      },
    ],
  },
  // ruangan
  {
    icon: 'PagesIcon',
    name: 'Ruangan',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Jenis Ruangan',
      },
      {
        path: '#',
        name: 'Peruntukan Ruangan',
      },
      {
        path: '#',
        name: 'Data Ruangan Baru',
      },
      {
        path: '#',
        name: 'Daftar Ruangan',
      },
    ],
  },
  // siswa
  {
    icon: 'PagesIcon',
    name: 'Siswa',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Edit Data Siswa',
      },
      {
        path: '#',
        name: 'Edit Data Siswa(Keuangan)',
      },
      {
        path: '#',
        name: 'Produk GO Siswa',
      },
    ],
  },
  // data kelulusan
  {
    icon: 'PagesIcon',
    name: 'Data Kelulusan',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Input No SNBP-SNBT',
      },
      {
        path: '#',
        name: 'Laporan No SNBP-SNBT',
      },
      {
        path: '#',
        name: 'Input Kelulusan',
      },
      {
        path: '#',
        name: 'Reset Kelulusan',
      },
      {
        path: '#',
        name: 'Laporan Kelulusan',
      },
    ],
  },
  // go kreasi
  {
    icon: 'PagesIcon',
    name: 'Go Kreasi',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Registrasi GOKreasi',
      },
      {
        path: '#',
        name: 'Log Aktivitas',
      },
      {
        path: '#',
        name: 'Unduh EPB',
      },
      {
        path: '#',
        name: 'Reset Device',
      },
      {
        path: '#',
        name: 'Open Tiket',
      },
      {
        path: '#',
        name: 'Reset Pengerjaan Soal',
      },
      {
        path: '#',
        name: 'Unduh Nilai TO',
      },
      {
        path: '#',
        name: 'Unduh Rekap Hasil TO',
      },
    ],
  },
  // simulasi snbp
  {
    icon: 'PagesIcon',
    name: 'Simulasi SNBP',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Input Pilihan Jurusan',
      },
      {
        path: '#',
        name: 'Input Nilai Rapor',
      },
      {
        path: '#',
        name: 'Simulasi SNBP',
      },
    ],
  },
  {
    path: '#',
    icon: 'PagesIcon',
    name: 'Simulasi SNBT',
  },
  // 3b belajar
  {
    icon: 'PagesIcon',
    name: '3B Belajar',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Laporan Tes VAK Siswa',
      },
      {
        path: '#',
        name: 'Laporan Tes GOA Siswa',
      },
      {
        path: '#',
        name: 'Laporan Presensi Siswa',
      },
    ],
  },
  {
    path: '#',
    icon: 'PagesIcon',
    name: 'Laporan',
  },
  // penagihan cicilan
  {
    icon: 'PagesIcon',
    name: 'Penagihan (Cicilan)',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Pusat',
      },
      {
        path: '#',
        name: 'Cabang',
      },
    ],
  },
  {
    path: 'Master',
    icon: 'PagesIcon',
    name: 'Kesedian Pengajar',
  },
  // proses
  {
    icon: 'PagesIcon',
    name: 'Proses',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Permintaan TST',
      },
      {
        path: '#',
        name: 'Jadwal TST',
      },
      {
        path: '#',
        name: 'Realiasi TST',
      },
      {
        path: '#',
        name: 'Rencana Kerja',
      },
      {
        path: '#',
        name: 'Kesedian Pengajar',
      },
      {
        path: '#',
        name: 'Silabus Kelas',
      },
    ],
  },
  // {
  //   path: '/example/forms',
  //   icon: 'FormsIcon',
  //   name: 'Forms',
  // },
  // {
  //   path: '/example/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/example/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/example/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/example/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/example/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/example/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/example/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/example/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/example/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/example/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export type {IRoute}
export default routes
