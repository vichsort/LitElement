# Instalação
Achei uma instalação fácil pela primeira vez.<br>
Primeiramente, crie a pasta onde você quer baixar os pacotes e tenha certeza que você possui o node.js instalado.<br>
Para ver se você possui o node, apenas faça:<br>
```bash
node -v
```
Se você receber alguma resposta indicando a versão do node, você possui ele.<br>
Continuando, na pasta abra um terminal e nele insira o seguinte código:<br>

```bash
npm init -y
```

Com isso, você criou um arquivo chamado 'package-json', que guardará as dependências necessárias para o funcionamento do arquivo principal. Precisamos instalar dois pacotes para que possamos usufruir do Lit-element:
* Lit (que possui 'lit-html' e 'lit-element')
* Vite (para compilar em tempo real o lit)

Então, faremos o seguinte:
```bash
npm install lit
npm install vite --save-dev
```

O que significa que baixaremos o lit e o vite (nas dependências do dev)<br>

# Funcionamento do Vite
Usaremos o vite para compilar em tempo real todo o código feito apartir do Lit-Element, já que alguns navegadores não são capazes de suportá-lo nativamente. Seu funcionamento pode ser complexo, mas usaremos ele para construir e rodar a página num localhost. Para isso, precisamos adicionar dois comandos ao nosso arquivo 'package-json'. Os scripts serão:
* build: o que construirá o site e que fará o reload toda vez que qualquer arquivo for editado
* vite: que iniciará o localhost (ou irá pará-lo)

então, em nosso arquivo 'package-json':
```json
[...]
  "scripts": {
    [...],
    "build": "vite build",
    "vite": "vite"
  },
[...]
```

Certo. Agora, sempre que precisarmos usar o localhost poderemos simplesmente ir ao terminal e digitar:
```bash
npm run build
npm run vite
```
Como o componente ficará rodando em um arquivo em lotes, ele funcionará até você usar o comando Ctrl + C e finalizar o arquivo em lotes, o que significa que você só precisa usar essa série de comandos depois que tiver parado-os anteriormente (ou se for sua primeira vez usando)


# Importação
Com isso pronto, criaremos os dois principais arquivos de todo código, sendo o 'index.html' e 'index.js'.<br>
No código em html, criaremos um projeto básico com a tag script modular:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lit Element Demonstration</title>
    <script type="module" src="index.js"></script>
</head>
<body>
</body>
</html>
```

Precisamos, então, importar o que iremos usar para que os componentes web sejam usados, que são os pacotes do Lit Element, o CSS e o HTML.<br>
Para isso, faremos a importação diretamente do pacote recém-instalado:
```javascript
import { LitElement, css, html } from "lit";
```

Tudo pronto! Agora simplesmente precisamos criar os elementos usando o que o lit element é capaz de fazer!

# Os componentes
Vou tentar abstrair o máximo que conseguir, mas preste atenção com a sintaxe comum do javascript que é misturada com as sintaxes do HTML e CSS. <br>
Imagine que você quer usar um elemento novo, que ainda não existe, mas você precisa dos recursos de um elemento maior para que possa criar esse dito elemento. Por isso, iremos criar uma classe que se extende de LitElement! A classe HelloWorld é filha da classe LitElement no seguinte uso:

```javascript
class helloWorld extends LitElement {
    [...]
}
```

Certo. Pensando em um elemento HTML, podemos notar que todos eles possuem duas coisas: a marcação (HTML) e seus estilos (CSS). Isso indica que precisamos das ambas funcionalidades para que um elemento seja disposto na tela! --- Vale lembrar: a estilização NÃO é obrigatória! Os padrões definidos são aplicados ao nascer do elemento, mas serão tratados como obrigatórios da mesma forma para que seja mais facilmente compreendido.<br>
Bom, vamos criar um bloco de lógica único: o 'static', que será onde armazenaremos os estilos em CSS.
```javascript
class helloWorld extends LitElement {

    static styles = css`
        .container {
            // definições da classe
        }
        h1 {
            // definições do elemento
        }

        p {
            // definições do elemento
        }
        `
}
```

Com isso pronto, conseguimos obter os estilos dentro de um dito componente - mas onde está esse componente? Ainda não o criamos. Para criá-los, precisamos antes do elemento que será armazenado e renderizado em uma instância: o método 'render()', que deverá expor ao DOM um elemento específico.

```javascript
class helloWorld extends LitElement {
    [...]
        render() {
        return html`
        <div class="container">
            <h1>Hello World</h1>
            <p>Not hello world</p>
        </div>
        `;
    }
}
```
Simples assim, criamos um conteúdo todo que terá seus estilos aplicados. O que significa que podemos colocá-los no nosso HTML, certo?<br>
Errado. Precisamos antes definir o que acabamos de fazer, para que o leitor de JS possa ler tudo que colocamos nele.<br>
Usando a instância 'customElements.define()', iremos dizer o que fizemos e como fizemos, sendo então: (nome-do-elemento, classeDoElemento). Veja:

```javascript
customElements.define('hello-world', helloWorld);
```

Agora sim, precisamos apenas ir em nosso arquivo index.html e chamá-lo!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lit Element Demonstration</title>
    <script type="module" src="index.js"></script>
</head>
<body>
    <hello-world></hello-world>
</body>
</html>
```

Pronto! Temos um elemento criado!

# Importante!
Algumas coisas que precisamos ter em nota:
* Cada render e static é unico! Você pode criar 'n' classes iguais que não irão colidir, nem mesmo que sejam regras gerais!
* Os nomes de elemento não podem ter letras maiúsculas e precisam ter um hífen obrigatoriamente!
* A sintaxe é mostrada de forma errada e emmet abbreviations não funcionam sem uma extensão do VSCode!