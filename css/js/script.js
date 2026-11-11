const CHAVE = "mensagens";

const ler = () => JSON.parse(localStorage.getItem(CHAVE)) || [];

const salvar = (lista) => localStorage.setItem(CHAVE, JSON.stringify(lista));

const criarTestes = () => {
  if (ler().length > 0) return;
  const lista = [];
  for (let i = 1; i <= 20; i++) {
    lista.push({
      id: i,
      nome: "Usuario Teste " + i,
      email: "teste" + i + "@email.com",
      mensagem: "Mensagem de teste numero " + i
    });
  }
  salvar(lista);
};

criarTestes();

const mostrarTabela = () => {
  const lista = ler();
  const html = lista.map(m => `
    <tr>
      <td>${m.id}</td>
      <td>${m.nome}</td>
      <td>${m.email}</td>
      <td>${m.mensagem}</td>
      <td>
        <button class="btn btn-warning btn-sm me-1" onclick="editar(${m.id})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="excluir(${m.id})">Excluir</button>
      </td>
    </tr>
  `).join("");
  document.getElementById("tabelaMensagens").innerHTML = html;
};

const adicionar = () => {
  const nome = prompt("Nome:");
  if (!nome) return;
  const email = prompt("E-mail:");
  if (!email) return;
  const mensagem = prompt("Mensagem:");
  if (!mensagem) return;

  const lista = ler();
  const novoId = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;
  lista.push({ id: novoId, nome, email, mensagem });
  salvar(lista);
  mostrarTabela();
};

const editar = (id) => {
  const lista = ler();
  const item = lista.find(m => m.id === id);
  if (!item) return;

  const nome = prompt("Novo nome:", item.nome);
  if (nome === null) return;
  const email = prompt("Novo e-mail:", item.email);
  if (email === null) return;
  const mensagem = prompt("Nova mensagem:", item.mensagem);
  if (mensagem === null) return;

  item.nome = nome;
  item.email = email;
  item.mensagem = mensagem;
  salvar(lista);
  mostrarTabela();
};

const excluir = (id) => {
  if (!confirm("Deseja excluir esta mensagem?")) return;
  salvar(ler().filter(m => m.id !== id));
  mostrarTabela();
};

let cliques = 0;
document.getElementById("segredo").addEventListener("click", () => {
  cliques++;
  if (cliques >= 5) {
    cliques = 0;
    document.getElementById("admin").style.display = "block";
    mostrarTabela();
    document.getElementById("admin").scrollIntoView();
  }
});

const fecharAdmin = () => {
  document.getElementById("admin").style.display = "none";
};
