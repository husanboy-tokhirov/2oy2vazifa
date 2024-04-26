let money = prompt("Alisher mablag'ni kiriting;");

let biletNarxiDollorda = 500
let mexmonxonaTuloviDollorda = 250
let muzeyTuloviYevroda = 120

let biletMehmonhonasum = ( biletNarxiDollorda +  mexmonxonaTuloviDollorda) * 11000.34;

let muzeyTulovi = muzeyTuloviYevroda * 12354.03; 

let umumiyHarajatlar = (biletMehmonhonasum + muzeyTulovi);

if(umumiyHarajatlar < money) {
    document.write("Oq Yo'l Alisher")
}
else {
    document.write("Alisher, ozgina sabr qilish kerak bo'lar ekan")
}