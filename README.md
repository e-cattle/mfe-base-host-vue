# e-cattle-base

Esta é a ferramenta oficial de *scaffolding* para a plataforma e-Cattle, projetada para lhe dar uma vantagem inicial na construção da sua nova aplicação microfrontend. Ela gera um modelo base com todas as configurações necessárias e estrutura de diretórios padrão, permitindo que você inicie o desenvolvimento sem o incômodo de configurar o projeto do zero.

Esta aplicação Base é o ponto de partida para iniciar as demais aplicações, *host* e *remote*. Entre os *templates* desenvvolvidos, este é o mais simples, uma vez que seu objetivo é inicialização, em ordem pré-definida, das demais aplicações que fazem parte do projeto de micro-frontend.

Ao utilizar a Base o desenvolvedor não precisará inicializar ou fazer o *build* individual de cada aplicação do projeto.

## 👩🏿‍💻 Configurações antes de utilizar

Será necessário fazer algumas alterações no arquivo `package.json`, ele será clonado da seguinte forma:

```json
{
  "name": "base",
  "version": "1.0.0",
  "workspaces": [
    "./host_app",
    "./remote_app1",
    "./remote_app2"
  ],
  "scripts": {
    "dev:host_app": "npm run -w host_app dev",
    "dev:remote_app1": "npm run -w remote_app1 dev",
    "dev:remote_app2": "npm run -w remote_app2 dev",
    "dev": "run-p dev:*",
    "build:host_app": "npm run -w host_app build && npm run -w host_app preview",
    "build:remote_app1": "npm run -w remote_app1 build && npm run -w remote_app1 preview",
    "build:remote_app2": "npm run -w remote_app2 build && npm run -w remote_app2 preview",
    "build": "npm-run-all --parallel build:*",
    "preview": "npm run build --workspaces --if-present",
    "serve": "npm run serve --workspaces --if-present",
    "stop": "kill-port --port 4173,5005,5006"
  },
  "devDependencies": {
    "@originjs/vite-plugin-federation": "^1.3.5",
    "kill-port": "^2.0.1",
    "npm-run-all": "^4.1.5"
  }
}
```

Em `workspaces`, os valores contidos no vetor devem corresponder ao nomes das aplicações criadas, por exemplo se a aplicação *host* for criado com o nome de `e-cattle-host`, assim ele deverá ser declarado no `workspaces`. Além disso, os valores devem estar na ordem que desejar que sejam renderizados, principalmente se ouver dependência entre aplicações.

Supondo que temos apenas duas aplicações, uma hospedeira e outra remota, com os respectivos nomes de `e-cattle=host` e `e-cattle-remote`. O `workspaces` deverá ser definido da seguinte forma:

```json
{
  ...
  "workspaces": [
    "./e-cattle-host",
    "./e-cattle-remote"
  ],
  ...
}
```

Da mesma forma, deverá alterar e excluir/incluir os `scripts` correspondentes às quantidades e aos nomes escolhidos. Dando contituidade ao exemplo, os `scripts` ficariam assim:

```json
{
  ...
  "scripts": {
    "dev:e-cattle-host": "npm run -w e-cattle-host dev",
    "dev:e-cattle-remote": "npm run -w e-cattle-remote dev",
    "dev": "run-p dev:*",
    "build:e-cattle-host": "npm run -w e-cattle-host build && npm run -w e-cattle-host preview",
    "build:e-cattle-remote": "npm run -w e-cattle-remote build && npm run -w e-cattle-remote preview",
    "build": "npm-run-all --parallel build:*",
    "preview": "npm run build --workspaces --if-present",
    "serve": "npm run serve --workspaces --if-present",
    "stop": "kill-port --port 4173,5005"
  },
  ...
}
```

*Scripts* de *remotes* e portas não utilizadas devem ser excluídos.

Caso resolva incluir mais alguma aplicação remota, deverá incluir seus dados, incluindo a porta, no `package.json` da Base:

```json
{
  "name": "base",
  "version": "1.0.0",
  "workspaces": [
    "./e-cattle-host",
    "./e-cattle-remote",
    "./e-cattle-new-remote"
  ],
  "scripts": {
    "dev:e-cattle-host": "npm run -w e-cattle-host dev",
    "dev:e-cattle-remote": "npm run -w e-cattle-remote dev",
    "dev:e-cattle-new-remote": "npm run -w e-cattle-new-remote dev",
    "dev": "run-p dev:*",
    "build:e-cattle-host": "npm run -w e-cattle-host build && npm run -w e-cattle-host preview",
    "build:e-cattle-remote": "npm run -w e-cattle-remote build && npm run -w e-cattle-remote preview",
    "build:e-cattle-remote": "npm run -w e-cattle-new-remote build && npm run -w e-cattle-new-remote preview",
    "build": "npm-run-all --parallel build:*",
    "preview": "npm run build --workspaces --if-present",
    "serve": "npm run serve --workspaces --if-present",
    "stop": "kill-port --port 4173,5005,5006"
  },
  "devDependencies": {
    "@originjs/vite-plugin-federation": "^1.3.5",
    "kill-port": "^2.0.1",
    "npm-run-all": "^4.1.5"
  }
}
```

## Contribuir 🚀

Se quiser contribuir, clone este repositório, crie sua própria *branch* de trabalho e mãos à obra!

```bash
git clone https://github.com/andre-violin/e-cattle-base.git
```

```bash
git checkout -b feature/NAME
```

No final, abra um *Pull Request* explicando o problema resolvido ou a funcionalidade adicionada. Se existir, adicione capturas de tela das modificações visuais e aguarde pela revisão!

[Como criar uma Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[Padrão de Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Licença 📃

Este projeto está sob a licença [MIT](./../LICENSE) license
