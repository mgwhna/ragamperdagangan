document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "ROK PRAMUKA AKILA - BIKU KELILING - PENDEK NO.5", img: "PS005 - ROK PRAMUKA AKILA - BIKU KELILING - PENDEK NO.5.png", price: 50000 },
      { id: 2, name: "ROK PRAMUKA AKILA - BIKU KELILING - PENDEK NO.6", img: "PS006 - ROK PRAMUKA AKILA - BIKU KELILING - PENDEK NO.6.png", price: 50000 },
      { id: 3, name: "ROK PRAMUKA AKILA - BIKU KELILING - PENDEK NO.2", img: "PS007 - ROK PRAMUKA AKILA - BIKU KELILING - PENDEK NO.2.png", price: 50000 },
      { id: 4, name: "ROK PRAMUKA MR.BEN - BIKU KELILING - PENDEK NO.4", img: "PS008 - ROK PRAMUKA MR.BEN - BIKU KELILING - PENDEK NO.4.png", price: 55000 },
      { id: 5, name: "ROK PRAMUKA TIOTI - BIKU DUA - PENDEK NO.13", img: "PS010 - ROK PRAMUKA TIOTI - BIKU DUA - PENDEK NO.13.png", price: 60000 },
      { id: 6, name: "ROK PRAMUKA YUNAL - BIKU SATU - PENDEK NO.32", img: "PS012 - ROK PRAMUKA YUNAL - BIKU SATU - PENDEK NO.32.png", price: 60000 },
      { id: 7, name: "ROK PRAMUKA TIOTI - BIKU SATU - PENDEK NO.12", img: "PS013 - ROK PRAMUKA TIOTI - BIKU SATU - PENDEK NO.12.png", price: 60000 },
      { id: 8, name: "ROK PRAMUKA MB.BEAN - BIKU SATU - PENDEK NO.28", img: "PS024 - ROK PRAMUKA MB.BEAN - BIKU SATU - PENDEK NO.28.png", price: 55000 },
      { id: 9, name: "ROK PRAMUKA MR.BEAN - BIKU KELILING - PENDEK NO.33", img: "PS025 - ROK PRAMUKA MR.BEAN - BIKU KELILING - PENDEK NO.33.png", price: 60000 },
      { id: 10, name: "ROK PRAMUKA MR.BEAN - BIKU KELILING - PENDEK NO.32", img: "PS026 - ROK PRAMUKA MR.BEAN - BIKU KELILING - PENDEK NO.32.png", price: 60000 },
      { id: 11, name: "ROK PRAMUKA CITRA PELAJAR - BIKU KELILING - PANJANG NO.1", img: "PS027 - ROK PRAMUKA CITRA PELAJAR - BIKU KELILING - PANJANG NO.1.png", price: 60000 },
      { id: 12, name: "ROK PRAMUKA MR.BEAN - BIKU KELILING - PANJANG NO.1", img: "PS029 - ROK PRAMUKA MR.BEAN - BIKU KELILING - PANJANG NO.1.png", price: 60000 },
      { id: 13, name: "ROK PRAMUKA CITRA PELAJAR - BIKU KELILING - PANJANG NO.2", img: "PS040 - ROK PRAMUKA CITRA PELAJAR - BIKU KELILING - PANJANG NO.2.png", price: 60000 },
      { id: 14, name: "ROK PRAMUKA KEMBAR - BIKU DUA - PENDEK NO.26", img: "PS042 - ROK PRAMUKA KEMBAR - BIKU DUA - PENDEK NO.26.png", price: 55000 },
      { id: 15, name: "ROK PRAMUKA MR.BEAN - BIKU DUA - PENDEK NO.30", img: "PS043 - ROK PRAMUKA MR.BEAN - BIKU DUA - PENDEK NO.30.png", price: 60000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
