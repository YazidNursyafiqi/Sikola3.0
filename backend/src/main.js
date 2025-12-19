import express from 'express';
import cors from 'cors';

import loginHandler from './routes/login-routes.js';

const app = express();
const port = 3000;

// const courses = [
//     {
//         title:'BAHASA INGGRIS',
//         major:'Teknik Informatika(S1)',
//         percentage:20,
//         url:'',
//         image:'https://media.istockphoto.com/id/1604700367/id/vektor/wallpaper-latar-belakang-pola-lingkaran-bauhaus-merah-mulus.webp?s=2048x2048&w=is&k=20&c=_RDnCwwDQWmTks4EmhrVXgOOvc4iMrGl9ymSyf_T7RI=',
//     },
//     {
//         title:'BAHASA INGGRIS',
//         major:'Teknik Informatika(S1)',
//         percentage:20,
//         url:'',
//         image:'https://media.istockphoto.com/id/1604700367/id/vektor/wallpaper-latar-belakang-pola-lingkaran-bauhaus-merah-mulus.webp?s=2048x2048&w=is&k=20&c=_RDnCwwDQWmTks4EmhrVXgOOvc4iMrGl9ymSyf_T7RI=',
//     },
//     {
//         title:'BAHASA INGGRIS',
//         major:'Teknik Informatika(S1)',
//         percentage:20,
//         url:'',
//         image:'https://media.istockphoto.com/id/1604700367/id/vektor/wallpaper-latar-belakang-pola-lingkaran-bauhaus-merah-mulus.webp?s=2048x2048&w=is&k=20&c=_RDnCwwDQWmTks4EmhrVXgOOvc4iMrGl9ymSyf_T7RI=',
//     },
//     {
//         title:'BAHASA INGGRIS',
//         major:'Teknik Informatika(S1)',
//         percentage:20,
//         url:'',
//         image:'https://media.istockphoto.com/id/1604700367/id/vektor/wallpaper-latar-belakang-pola-lingkaran-bauhaus-merah-mulus.webp?s=2048x2048&w=is&k=20&c=_RDnCwwDQWmTks4EmhrVXgOOvc4iMrGl9ymSyf_T7RI=',
//     },
//     {
//         title:'BAHASA INGGRIS',
//         major:'Teknik Informatika(S1)',
//         percentage:20,
//         url:'',
//         image:'https://media.istockphoto.com/id/1604700367/id/vektor/wallpaper-latar-belakang-pola-lingkaran-bauhaus-merah-mulus.webp?s=2048x2048&w=is&k=20&c=_RDnCwwDQWmTks4EmhrVXgOOvc4iMrGl9ymSyf_T7RI=',
//     },

// ];
app.use(express.json());
app.use(cors());
app.use('/user',loginHandler);



app.listen(port,()=>{
    console.log('server berhasil di jalankan');
})