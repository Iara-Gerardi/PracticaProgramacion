const http = require("http");
const PORT = 3001;
const cursos = [{ 1: 1, 2: 2 }, { 3: 3, 4: 4 }]

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return getReq(req, res);
    default:
      console.log("no tenemos el metodo");
      break;
  }
})

const getReq = (req, res) => {
  const path = req.url
  if (path === '/') {
    res.statusCode = 200;
    return res.end("bienvenidis");
  } else if (path === '/cursos') {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos));
  }
}

const postReq = () => {
  const path = req.url

  if (path === '/cursos/programacion') {
    res.statusCode = 200;
    return res.end('el servidor recibio una solicitud post');
  }
}

servidor.listen(PORT, () => {
  console.log(`servidor en el puerto ${PORT}`)
})