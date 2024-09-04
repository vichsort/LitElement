import { LitElement, css, html } from "lit";

class helloWorld extends LitElement {

    static styles = css`
        .container {
            background-color: grey;
            padding: 15px;
            border: none;
            margin-bottom: 15px;
        }
        h1 {
            color: red;
        }

        p {
            color: blue;
        }
        `

    render() {
        return html`
        <div class="container">
            <h1>Hello World</h1>
            <p>Not hello world</p>
        </div>
        `;
    }
}

class meuPenis extends LitElement {
    static styles = css`
    .container {
        background-color: black;
        color: white;
        padding: 5px;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 15px;
        max-width: 50%;
    }
    `

    render() {
        return html`
        <div class="container">
            <h1>Meu pênis extende no Lit Element.</h1>
            <p>Isso mesmo que você leu, meu pênis extende no <a href="https://lit.dev" target="_blank">Lit Element</a></p>
        </div>
        `
    }
}

customElements.define('hello-world', helloWorld);
customElements.define('meu-penis', meuPenis);