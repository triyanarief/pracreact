import React from 'react';
import Child from './Child';


class Mine extends React.Component {
  constructor(){
    super()
    this.state = {texts:[]}
  }

  render() {
    this.setState({texts: ['contoh pakai state pertama', 'contoh pakai state kedua', 'dan contoh pakai state ketiga']})

    let texts = this.state.texts.map(function(text){
      return(
        <Child text = {text} />
      )
    })
    return ( // 1. kalau mau dibuat lebih dari satu baris maka harus dibuat pakai dalam kurung. jika cuma sebaris gak perlu contoh dibawah lebih dari sebaris
      // 2. render return() hanya boleh ada satu tag tunggal contoh div hanya boleh satu saja gak boleh ada dua. cara akalinya pakai div induk yang berisi tag div lain didalamnya. contoh dibawah
      // 3. cara memasukkan child component bisa dilihat pada tag Child dibawah dan jangan lupa untuk export dari file asalnya dan kita import diatas agar bisa digunakan.
      // 4. props yang dimaksud adalah kita bisa membuat props pada child dan nanti kita isi pada parrentnya disini tepatnya sebagai properti dalam tag child contoh dibawah
      // 5. state digunakan di parrent agar bisa kita isi nilai dan kita rubah dengan menggunkan construct
      <div>
        <div id="mine">
          Halo Dunia Malam
        </div>
        <div>
          Halo Dunia Siang
        </div>
        <br />
        {texts}
      </div>
    );
  }
}


export default Mine;
