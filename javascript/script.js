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

let day = "senin";

switch (day.toLowerCase()) {
  case "jumat":
    console.log("Kamu WFH");
    break;

  case "sabtu":
  case "minggu":
    console.log("Hari libur");
    break;

  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    console.log("Hari Kerja");
    break;

  default:
    console.log("Hari yang kamu masukan salah.");
    break;
}

let nilai1 = 10;
let nilai2 = 30;
let nilai3 = "10";
let bebas = "terserah";

console.log(nilai1 + nilai3);
console.log(nilai1 * nilai3);
console.log(nilai1 * bebas);

console.log(NaN === NaN);

console.log(nilai1 == nilai2); //false
console.log(nilai1 != nilai3); //true karena sesama 10 (nilainya)
console.log(nilai1 !== nilai3); //false

let kerja = true;
let libur = false;
let cuti = false;
let hiling = true;

console.log(kerja || cuti); //true
console.log(kerja && hiling); //true
console.log(libur && cuti); //false

for (let i = 0; i < 20; i++) {
  if (i === 9) {
    continue;
  }

  if (i === 15) {
    break;
  }

  console.log("Saya sedang mengulang..." + i);
}

// silakan looping angka 1 - 30.

for (let i = 20; i > 5; i--) {
  console.log("Saya sedang mundur..." + i);
}

let cars = ["byd", "xenia", "pajero", "wulling", "jaeco", "xpander", "beat"];
cars.forEach((car) => console.log("Mobil saya adalah : ", car));

for (let i = 0; i < cars.length; i++) {
  console.log("Mobil di garasi : ", cars[i]);
}

function auth() {
  let currentPassword = "belajarjs";
  let inputPassword = prompt("masukan password anda..");

  while (currentPassword !== inputPassword) {
    alert("Password salah");
    inputPassword = prompt("masukan password anda..");
  }

  alert("password anda sesuai");
}

// fungsi clasic

function namaFungsi1() {
  // masukan kodenya disini
}

let fungsi = function () {};

let nama_fungsi = () => {};

function penjumlahan(a, b) {
  console.log(a + b);
}

penjumlahan(10, 30);

// membuat fungsi diskon

let diskon = (harga, disc) => {
  potongan = harga - harga * (disc / 100);
  return potongan;
};

function showDisc() {
  let harga = Number(prompt("Masukan Harga : "));
  let potongan = Number(prompt("Masukan Potongan : "));

  let hasil = diskon(harga, potongan);

  alert(`discount ${potongan}% dari ${harga} adalah ${hasil}`);
}

//  mas Bagus = menghitung luas persegi panjang
// mas Deny = ada pilihan : luas / keliling Lingkaran
// Mas imam = luas trapesium
// bu diah = luas jajargenjang
// pak thom = luas segitiga

let luas = (sisi) => {
  let lu = sisi * sisi;
  return lu;
};

let keliling = (sisi) => {
  let kel = 4 * sisi;
  return kel;
};

function persegi() {
  let inputSisi = prompt("masukan sisi : ");
  let rumus = prompt("masukan rumus 1 = luas, 2 = keliling ");
  let hasil; //undifined

  switch (rumus) {
    case "1":
      hasil = luas(Number(inputSisi));
      alert(`Luas persegi dengan sisi = ${inputSisi} adalah ${hasil}`);
      break;

    case "2":
      hasil = keliling(Number(inputSisi));
      alert(`keliling persegi dengan sisi = ${inputSisi} adalah ${hasil}`);
      break;

    default:
      alert("Rumus tidak ditemukan.");
      break;
  }
}

const judul = document.getElementById("judulHalaman");
const subTitle = document.querySelector(".sub-title");

judul.innerHTML = `<span>belajar js</span>`;
judul.textContent = "Ini adalah content yang diubah";

subTitle.style.color = "#ffff";
subTitle.classList.add("bg-primary", "second-class");
subTitle.classList.remove("sub-title");
subTitle.textContent = "berubah ga?";

console.log(judul);
console.log(subTitle);

const score = document.getElementById("counter");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
let count = 0;

if (count === 0) {
  kurang.disabled = true;
}

tambah.addEventListener("click", () => {
  count += 1;
  score.textContent = count;
  kurang.disabled = false;
});

kurang.addEventListener("click", () => {
  count -= 1;
  score.textContent = count;

  if (count === 0) {
    kurang.disabled = true;
  }
});

async function getData() {
  try {
    // mencoba menjalankan

    const api = "https://6aec1ec8ee39618d7bf8ee28.mockapi.io/api/v1/products"
    const res = await fetch(api)
    const data = await res.json()

    console.log(data)

  } catch (error) {
    // memberitahu kalau gagal memuat sebuah data.
    console.log("Error", error)
  }
}


