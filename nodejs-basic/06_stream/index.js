/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */


const fs = require('fs');
 
const readableStream = fs.createReadStream('./06_stream/input.txt', {
    highWaterMark: 15
});

const writeableStream = fs.createWriteStream('./06_stream/output.txt');

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`);

    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});