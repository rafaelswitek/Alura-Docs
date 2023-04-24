import { MongoClient } from "mongodb";

const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const url = process.env.MONGO_URL

const cliente = new MongoClient(
  `mongodb+srv://${user}:${password}@${url}?retryWrites=true&w=majority`
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
