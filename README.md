# Projeto Flappy Bird em JavaScript

Este é um projeto simples do jogo Flappy Bird desenvolvido em JavaScript. O objetivo deste projeto é servir como uma forma de aprendizado e passar o tempo.

## Descrição

O jogo é uma recriação do famoso jogo Flappy Bird. O jogador controla um pássaro que deve voar entre conjuntos de canos sem colidir com eles. A cada conjunto de canos passado, o jogador ganha um ponto. O jogo termina quando o pássaro colide com um cano ou com o chão.

## Funcionalidades

- Controle do pássaro usando a tecla `SPACE`.
- Pontuação que aumenta a cada conjunto de canos passado.
- Tela de "YOU LOSE" quando o jogador perde, com opção de reiniciar o jogo.

## Como Rodar o Jogo

Para rodar o jogo, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/soutoux/js-flappybird-project.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd js-flappybird-project
   ```

3. **Abra o arquivo `index.html` em um navegador**:
   - Você pode simplesmente clicar duas vezes no arquivo `index.html` ou
   - Abrir o arquivo `index.html` em um navegador através de um servidor local (recomendado).

### Usando um Servidor Local

Para uma melhor experiência, é recomendado usar um servidor local. Você pode usar extensões como o Live Server do VS Code ou qualquer outro servidor HTTP simples.

#### Usando o Live Server no VS Code

1. **Instale a extensão Live Server**:

   - Vá para a aba de extensões no VS Code e procure por "Live Server".
   - Clique em "Install".

2. **Abra o projeto no VS Code**:

   - Navegue até o diretório do projeto e abra-o no VS Code.

3. **Inicie o Live Server**:
   - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

Isso abrirá o jogo em uma nova aba do navegador.

## Estrutura do Projeto

```
/js-flappybird-project
│
├── index.html
├── style.css
├── main.js
├── assets
│   ├── images
│   │   ├── bird.png
│   │   ├── background.png
│   │   ├── pipe.png
│   └── sounds
│       ├── flap.wav
│       ├── hit.wav
└── js
    ├── game.js
    ├── bird.js
    ├── pipe.js
    ├── background.js
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
