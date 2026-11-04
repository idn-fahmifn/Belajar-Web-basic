let nama = "Fahmi"; //string
let umur = 23;
let asal = "kuningan";
nama = "Asep";

console.log(nama);

const api = "https://api.com/v1";

console.log(api);

let buah = ["pisang", "nanas", nama, 9];
console.log(buah);
console.log(buah[1]);

let isNikah = true;

let biodata = {
  nama: "Asep",
  asal: "Kabupaten Indramayu",
  umur: 24,
  aset: ["rumah", "mobil", "jet pribadi"],
  is_nikah: false,
  pendidikan: {
    instansi: "Universitas Jakarta",
    ipk: 3.6,
    prodi: "Teknik Informatika",
  },
};

console.log(biodata.nama);
console.log(biodata["asal"]);

console.log("nama saya " + biodata.nama + " saya berasal dari " + biodata.asal);
console.log(
  `Hallo nama saya adalah ${biodata.nama}. 
saya berasal dari ${biodata.asal}`,
);

let nilai = 78;
console.log(nilai);

if (nilai > 100) {
  console.log("Input yang kamu masukan jangan lebih dari 100");
} else if (nilai < 0) {
  console.log("Input yang kamu masukan jangan kurang dari 0");
} else {
  if (nilai >= 80) {
    console.log("Predikat kamu A+");
  } else if (nilai >= 78) {
    console.log("Predikat kamu B");
  } else if (nilai >= 70) {
    console.log("Nilai kamu cukup");
  } else if (nilai > 0) {
    console.log("kamu harus remedial");
  } else {
    console.log("Kamu salah input");
  }
}

let day = prompt("masukan hari..");

switch (day.toLowerCase()) {
  case "jumat":
    alert("Kamu WFH");
    break;

  case "sabtu":
  case "minggu":
    alert("Hari libur");
    break;

  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    alert("Hari Kerja");
    break;

  default:
    alert("Hari yang kamu masukan salah.")
    break;
}
