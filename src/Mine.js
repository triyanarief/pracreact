import React from 'react';


class Mine extends React.Component {
  render() {
    return ( // 1. kalau mau dibuat lebih dari satu baris maka harus dibuat pakai dalam kurung. jika cuma sebaris gak perlu contoh dibawah lebih dari sebaris
      // 2. render return() hanya boleh ada satu tag tunggal contoh div hanya boleh satu saja gak boleh ada dua. cara akalinya pakai div induk yang berisi tag div lain didalamnya. contoh dibawah
      <div>
        <div id="mine">
          Halo Dunia Malam
        </div>
        <div>
          Halo Dunia Siang
        </div>
      </div>
    );
  }
}


export default Mine;
