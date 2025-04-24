# Eighware | Projeto Front-end

Este é o frontend de um projeto desenvolvido utilizando Next.js, React e outras tecnologias modernas.

O objetivo deste repositório é fornecer uma estrutura básica para avaliação técnica para testar os conhecimentos full stack, exigindo integração com um backend.

A arquitetura do projeto segue a metodologia **Atomic Design**, dividindo a interface de usuário em componentes menores e reutilizáveis.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e criação de sites otimizados.
- **React**: Biblioteca para construção da interface de usuário.
- **Styled-Components**: Biblioteca para escrever CSS dentro do JavaScript, com suporte a temas e estilos dinâmicos.
- **Jest**: Framework de testes para JavaScript, utilizado para garantir que o código esteja funcionando como esperado.
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript.
- **Testing Library**: Conjunto de bibliotecas para facilitar os testes de componentes React de forma mais simples e intuitiva.

## Arquitetura do Projeto

A arquitetura do projeto segue a metodologia **Atomic Design**, que consiste em dividir os componentes da interface de usuário em cinco níveis hierárquicos, permitindo criar interfaces reutilizáveis e modulares. Os níveis são:

1. **Átomos**: Componentes básicos, como botões, inputs, rótulos, etc.
2. **Moléculas**: Combinação de átomos para criar componentes mais complexos, como formulários de entrada.
3. **Organismos**: Componentes mais complexos compostos por moléculas e átomos, como uma barra de navegação ou uma seção de conteúdo.
4. **Páginas**: A representação final de uma página, incluindo todos os componentes e dados, pronta para ser renderizada.

## Como Executar o Projeto Localmente

Siga os passos abaixo para instalar e rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/DiogooRodrigoo/eightwareFrontend.git
```

### 2. Instale as dependências

Certifique-se que você possui o **Node.js** (versão recomendada: >=16) instalado.

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

O projeto já inclui um arquivo `.env.example` com os parâmetros necessários para a configuração local. Para começar, copie esse arquivo e renomeie como `.env.local`:

```bash
cp .env.example .env.local
```

O arquivo `.env.local` será utilizado pelo Next.js para carregar as variáveis em ambiente de desenvolvimento.

Por padrão, o `.env.example` já está configurado com o endereço local do back-end. Altere os valores conforme necessário.

### 4. Build do projeto

```bash
npm run build
# ou
yarn build
```

### 5. Execute o projeto

Após o build, inicie o servidor de produção:

```bash
npm start
# ou
yarn start
```

O projeto estará disponível em http://localhost:3000

---

Com essas orientações, você conseguirá copiar o repositório, instalar as dependências e rodar o projeto **Projeto Front-end** no seu ambiente local. Caso precise de mais assistência, não hesite em me procurar.

Desenvolvido por Diogo Rodrigo Pedreira Galvão, 2025.
Todos os direitos de uso de imagem e atribuições deste trabalho estão diretamente relacionados à empresa Eightware Technology.
