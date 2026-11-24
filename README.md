# Portfólio Web Dinâmico - Matheus Schunck

Portfólio pessoal desenvolvido como atividade final do 4º bimestre.

## Tecnologias
- HTML5
- CSS3
- JavaScript
- Bootstrap 5 (via CDN)
- Bootstrap Icons (via CDN)

## Seções
- Apresentação pessoal
- Habilidades (hard e soft skills)
- Áreas do Conhecimento (Humanas, Natureza, Matemática e Linguagens)
- Tendências Tecnológicas (Cibersegurança, Blockchain, Automação/Robótica e Edge Computing)
- Galeria de Projetos
- Contato (links para GitHub e Instagram)

## Como executar
1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Não é necessário instalar dependências (Bootstrap e Bootstrap Icons são carregados via CDN).

## Armazenamento local (LocalStorage)
As mensagens são salvas no LocalStorage do navegador, convertidas para JSON
com `JSON.stringify()` e lidas com `JSON.parse()`.

No primeiro acesso, se o LocalStorage estiver vazio, o sistema cria
automaticamente **20 registros de teste** para validação imediata do avaliador.

## Acesso ao Painel Administrativo Oculto
1. Role a página até o **rodapé**.
2. Clique **5 vezes** no texto de copyright (`© 2026 - Matheus Schunck`).
3. O painel será exibido com a tabela de mensagens.

### CRUD disponível
| Operação | Como funciona |
|----------|---------------|
| Create   | Botão "+ Adicionar mensagem" no painel |
| Read     | Tabela exibida automaticamente ao abrir o painel |
| Update   | Botão "Editar" (solicita os novos dados via prompt) |
| Delete   | Botão "Excluir" (pede confirmação) |

## Ferramenta de automação escolhida (Etapa 2.2)
Foi utilizado o **Formspree**.

**Motivo da escolha:** é gratuito, não exige backend e funciona apenas
apontando o envio do formulário para um endpoint próprio. Isso se encaixa na
proposta do projeto, que é 100% client-side. Além disso, a configuração é
simples e o serviço já trata o envio do e-mail e o bloqueio de spam.

**Configuração:**
1. Criar uma conta em https://formspree.io
2. Criar um novo formulário e copiar o endpoint gerado.
3. Utilizar o endpoint para integração futura de notificações.

## Responsividade
Layout construído com o conceito Mobile First, usando o grid do Bootstrap
(`col-12`, `col-md-6`, `col-lg-3`) e ajustes finos com media queries no CSS.
