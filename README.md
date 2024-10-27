# DSIN - CODER CHALLENGE 2024

Neste repositório você encontra a minha solução para a etapa bônus do DSIN Coder Challenge 2024.
Para isso, foi feito uma aplicação web e um modelo de IA para a conclusão de cada um dos 3 requisitos.

As tecnologias usadas foram:

- nodejs
- python
- TensorFlow (para criar e carregar o modelo)
- NextJS
- Sqlite3
- CSS
- Lottie (biblioteca para carregar animações em JSON)
- GoogleMaps API (para o carregamento do mapa, usado para dizer onde a nave caiu)
- PIXABAY API (para a aquisição de imagens para a nave)

## Modelo (JOHN)

O modelo + dataset utilizam bibliotecas do python (como numpy e pandas) para criar os dados e então estes são carregados para um rede neural usando o TensorFlow. Este modelo resultante pode ser então baixado e carregado usando o `TensorFlow JS`.

O modelo criado para a competição pode ser baixado [aqui](https://github.com/Dpbm/dsin-coderchallenge-2024/releases/tag/v1.1).

## Website

O website utiliza a versão mais recente do NextJS para criar tanto o front-end como a API. Tomando também como proveito, a criação de componentes estáticos para deixar a navegação mais rápida.

## Como executar

Para executar o projeto, você precisa ter instalado na sua máquina:

- [nodejs](https://nodejs.org/en)
- [sqlite3](https://www.sqlite.org/download.html)

Após a instalação das ferramentas, crie uma `API_KEY` tanto no [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key), como no [PIXABAY](https://pixabay.com/api/docs/). Com as chaves na mão, adicione-as a um arquivo `.env` no diretorio seguindo o padrão do arquivo [.env.example](.env.example).

Com isso, crie o banco de dados executando o comando:

```bash
npm run migrate
```

Por fim, para rodar a aplicação execute:

```bash
# para modo desenvolvedor
npm run dev

# para rodar a aplicação de produção
npm run build
npm run start
```

## Com Contribuir?

Para melhorar esse projeto, abra uma issue ou crie um pull request adicionando novas funções ou corrigindo falhas que você encontrou. Vamos criar algo bem massa ;)




