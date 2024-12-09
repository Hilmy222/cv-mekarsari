/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark',
  content: [
    "./**/*.html",                   // Memproses semua file HTML di root dan subdirektori
    "./*.html",                      // Memproses file HTML di root directory
    "./src/**/*.{js,ts,jsx,tsx}",    // Memproses file JS, TS, JSX, TSX di dalam folder src
    "./scripts/**/*.js",             // Tambahkan jalur untuk semua file JS di dalam folder 'scripts'
    "./language.js",                 // Jika Anda memiliki file JavaScript tertentu, tambahkan path-nya di sini
  ],
  theme: {
    extend: {
      animation: {
      "loop-scroll" : "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        mekarsari: '#05308c',  // Warna khusus Mekar Sari
        paleBlue: "#304057",
        secondGray: "#6D6D6D",
        secondBlack: "#151515",
        linearBlue: "#cce4ff",
        lightBlue: "#D2E0FB",
      },
    },
    fontFamily: {
      sans: ['Poppins'],  // Font default yang diatur ke Poppins
      jkt : ['Plus Jakarta Sans'], 
    },
    
  },
  plugins: [],
}
