/* 
Ada 3 jenis modul pada Node.js, Anda sudah mengetahui dua di antaranya. Berikut rinciannya:

local module : module yang dibuat secara lokal berlokasi pada Node.js project Anda.
core module : module bawaan Node.js berlokasi di folder lib di mana Node.js terpasang pada komputer Anda. Core module dapat digunakan di mana saja.
third party module : module yang dipasang melalui Node Package Manager. Bila third party module dipasang secara lokal, maka modul akan disimpan pada folder node_modules di Node.js project Anda. Bila dipasang secara global, ia akan disimpan pada folder node_modules di lokasi Node.js dipasang.


*/

/* 
TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.
TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
TODO 3 : Import class Tiger dari berkas Tiger.js.
TODO 4 : Import class Wolf dari berkas Wolf.js.
*/


const Tiger = require('./Tiger');  // TODO 3
const Wolf = require('./Wolf'); // TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);