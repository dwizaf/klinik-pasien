// Demo
if (window.parent && window !== window.parent) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '0px');
    html.style.setProperty('--f7-safe-area-bottom', '0px');
  }
}

// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

let api = "https://batch3.crazycoding.my.id/api/public/api/";
// let api = "http://192.168.1.146:8000/api/";
// let api = "https://batch3.crazycoding.my.id/api2/Api/";
let regis = api + "registrasi";
let login = api + "login";
let ceklogin = api + "ceklogin";
let getprov = api + "propinsi";
let getkab = api + "kabupaten";
let getkec = api + "kecamatan";
let getdesa = api + "desa";
let getkerja = api + "pekerjaan";
let getagama = api + "agama";
let getgoldar = api + "goldar";
let updatebio = api + "biodata";
let getpoli = api + "poli";
let getdaftarpoli = api + "jadwal";
let getjampoli1 = api + "getjam";
let daftarpoli = api + "pendaftaran";
