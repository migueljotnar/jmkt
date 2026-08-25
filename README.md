<div align="center">
  <h1>🎬 Arquitetura e Desenvolvimento: Portfólio Audiovisual</h1>
  <p><strong>Visão Técnica e Decisões de Engenharia do Projeto "Jessyane Soares"</strong></p>

  <a href="https://jmkt-ten.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🔗_Live_Demo-jmkt--ten.vercel.app-000?style=for-the-badge" alt="Live Demo" />
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
</p>

<hr />

## 🎯 Objetivo do Repositório

Este repositório tem como finalidade principal a **demonstração técnica** da arquitetura, das escolhas de stack e das práticas de desenvolvimento adotadas na construção desta aplicação web. Ele serve como um *showcase* para avaliação por empresas e recrutadores das habilidades de engenharia de software e design de interfaces implementadas.

> **Nota:** Este projeto não foi concebido para ser um template de código aberto ou para ser rodado localmente por terceiros, mas sim como um documento vivo das capacidades técnicas do desenvolvedor(a).

## 🏗️ Decisões Arquiteturais e Stack Tecnológica

A aplicação foi desenvolvida sob o paradigma de *Single Page Application* (SPA), focando em alta performance de renderização, forte tipagem estática e manutenibilidade a longo prazo.

### Core Stack
- **[React](https://react.dev/):** Utilizado pela sua robustez na componentização e gestão do DOM virtual. A escolha recai sobre o React pela vasta adoção em mercado e ecossistema maduro, permitindo criar interfaces interativas e reativas.
- **[TypeScript](https://www.typescriptlang.org/):** Adotado estritamente em todo o projeto. Tipar o código estaticamente mitiga erros em tempo de execução, melhora a inferência do código no editor e documenta implicitamente as interfaces e contratos de dados.
- **[Vite](https://vitejs.dev/):** Ferramenta de *build* moderna escolhida em detrimento do Webpack pelo seu tempo de inicialização a frio quase instantâneo (graças ao HMR via ES modules nativos do navegador) e otimização agressiva de *bundles* em produção via Rolldown.

### Roteamento
- **[React Router](https://reactrouter.com/):** Responsável pela navegação client-side da SPA, gerenciando as transições de rotas sem recarregamento de página e permitindo a organização da aplicação em *views* independentes.

### Estilização e UI
- **[Tailwind CSS](https://tailwindcss.com/):** A abordagem *utility-first* foi escolhida para acelerar o desenvolvimento da interface e promover a criação de um design system consistente. Essa escolha garante um bundle CSS final diminuto (apenas as classes usadas vão para produção).

### Qualidade e Consistência
- **[ESLint](https://eslint.org/):** Configuração moderna utilizando Flat Config para garantir padrões rigorosos de qualidade, prevenindo anti-patterns e inconsistências ao longo de toda a base de código.

## 🚀 Destaques e Pontos Fortes do Projeto

1. **Desenvolvimento Orientado a Componentes (Component-Driven):**
   - O projeto adota uma arquitetura rigorosa, separando `components` (elementos reutilizáveis, puros e agnósticos como botões e cards) de `sections` (componentes maiores, de contexto específico).
   
2. **Separação de Preocupações (Separation of Concerns):**
   - **Camada de Dados Isolada:** O diretório `src/data/` mantém mock de dados, retirando lógica de negócio e estruturação de dados da camada de visualização.
   - **Custom Hooks:** Lógicas complexas e *side-effects* do React estão encapsulados em diretórios `hooks/`, garantindo componentes de UI limpos e com baixo acoplamento.

3. **Performance e Entrega:**
   - O uso combinado do Vite para *builds* de produção entrega arquivos minificados e com hash (para estratégias de *cache busting*).
   - Abordagem de componentes funcionais para diminuir o custo de memória.

4. **Experiência do Usuário (UX) & Design Responsivo:**
   - Interface concebida *mobile-first*, adaptando-se fluidamente até telas *ultrawide*, sem comprometer a estética refinada necessária para a apresentação de um portfólio audiovisual de alto nível.

## 📁 Estrutura de Diretórios

A estrutura do projeto foi desenhada visando modularidade, escalabilidade e facilidade de navegação técnica:

```text
src/
├── assets/       # Arquivos estáticos otimizados (mídias, ícones)
├── components/   # Blocos de construção de UI reutilizáveis
├── data/         # Entidades de dados estáticos e constantes (ex: models de serviços)
├── hooks/        # Encapsulamento de lógicas complexas (React Custom Hooks)
├── pages/        # Views principais (Entrypoints de rotas)
├── sections/     # Agrupamentos macro de contexto da interface (Hero, Footer)
├── App.tsx       # Componente orquestrador de roteamento
├── main.tsx      # Entry point da aplicação (renderiza o App no DOM)
└── index.css     # Diretivas globais de estilo da aplicação (Tailwind base)
```

## 📄 Licença

Este projeto é de uso exclusivo para demonstração de portfólio. Todos os direitos reservados ao autor. Não é permitida a cópia, redistribuição ou uso comercial sem autorização prévia.

## 👤 Autor

Desenvolvido por **Miguel Jotnar** — [GitHub](https://github.com/migueljotnar)
