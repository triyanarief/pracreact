import React from 'react';
import Child from './Child';


class Mine extends React.Component {
  constructor(){
    super()
    this.state = {texts:[], color : ''}
    this.changeColor = this.changeColor.bind(this)
  }

  componentDidMount() {
    this.setState({texts: ['contoh pakai state pertama', 'contoh pakai state kedua', 'dan contoh pakai state ketiga'] , color : 'red'})
  }

  changeColor() {
    if(this.state.color === 'red') {
      this.setState({color : 'blue'})
    } else {
      this.setState({color : 'red'})
    }
  }

  render() {
    let texts = this.state.texts.map(function(text){
      return(
        <Child text = {text} />
      )
    })

    let style = {color : this.state.color}

    return ( // 1. kalau mau dibuat lebih dari satu baris maka harus dibuat pakai dalam kurung. jika cuma sebaris gak perlu contoh dibawah lebih dari sebaris
      // 2. render return() hanya boleh ada satu tag tunggal contoh div hanya boleh satu saja gak boleh ada dua. cara akalinya pakai div induk yang berisi tag div lain didalamnya. contoh dibawah
      // 3. cara memasukkan child component bisa dilihat pada tag Child dibawah dan jangan lupa untuk export dari file asalnya dan kita import diatas agar bisa digunakan.
      // 4. props yang dimaksud adalah kita bisa membuat props pada child dan nanti kita isi pada parrentnya disini tepatnya sebagai properti dalam tag child contoh dibawah
      // 5. state digunakan di parrent agar bisa kita isi nilai dan kita rubah dengan menggunkan construct
      // 6. componentDidMount ini berfungsi sebagai tempat untuk kita mengisi nilai suatu state pada component. hanya boleh di inisialisasi disini gak bisa ditempat lain supaya tidak error.
      // 7. untuk menangani event. fungsi event kita buat tepat di atas render atau sebelum render lalu pada constructor kita set dulu this.nama fungsi untuk di bind (this) agar ketika digunakan bisa berfungsi this-nya tidak null. dan buat onClick di div yang mau kita pakaikan fungsinya. isinya nama fungsi tersebut cukup simple
      <div style={style} onClick={this.changeColor}>
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
