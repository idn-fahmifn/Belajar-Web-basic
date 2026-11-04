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

let nilai = Number(prompt("Masukan nilai"));
console.log(nilai)


if (nilai > 100) {
  alert("Input yang kamu masukan jangan lebih dari 100");
} else if (nilai < 0) {
  alert("Input yang kamu masukan jangan kurang dari 0");
} else {
  if (nilai >= 80) {
    alert("Predikat kamu A+");
  } else if (nilai >= 78) {
    alert("Predikat kamu B");
  } else if (nilai >= 70) {
    alert("Nilai kamu cukup");
  } else if(nilai > 0){
    alert("kamu harus remedial");
  } else {
    alert("Kamu salah input")
  }
}
