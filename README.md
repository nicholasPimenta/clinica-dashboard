<div align="center">

# Formulário para Impressão

Uma interface responsiva para organizar informações clínicas e gerar documentos para impressão.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-20232A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[Ver projeto em produção](https://clinica-dashboard-seven.vercel.app) · [Acessar repositório](https://github.com/nicholasPimenta/clinica-dashboard)

</div>

## Sobre o projeto

O **Formulário para Impressão** é uma aplicação voltada ao preenchimento de informações clínicas e à preparação de documentos em formato A4.

A interface permite selecionar um exame, registrar hábitos de vida, indicar históricos de doenças crônicas e familiares e acrescentar observações. Ao clicar em **Imprimir**, a aplicação verifica o preenchimento obrigatório e abre o diálogo de impressão do navegador.

O documento possui um layout próprio, separado da interface de preenchimento, com as opções selecionadas e as informações organizadas para impressão.

Todo o fluxo é executado no navegador, sem necessidade de backend, banco de dados ou integração com APIs externas.

> A versão atual utiliza nomes de exames demonstrativos, logotipo provisório e dados fictícios de contato.

## Funcionalidades

- Seleção de exame em uma lista com pesquisa;
- Mensagem quando nenhum exame corresponde à pesquisa;
- Registro de hábitos de vida;
- Seleção de histórico de doenças crônicas;
- Seleção de histórico familiar;
- Opção “Nenhuma” exclusiva em cada grupo de histórico;
- Campo de observações com limite de 600 caracteres;
- Contador de caracteres atualizado durante a digitação;
- Validação dos campos obrigatórios ao clicar em **Imprimir**;
- Mensagens e destaques visuais nos grupos com preenchimento pendente;
- Remoção do erro ao selecionar uma opção válida no respectivo grupo;
- Botão para limpar os campos e as mensagens de erro;
- Documento com layout específico para papel A4 em orientação retrato;
- Impressão pelo diálogo nativo do navegador;
- Possibilidade de salvar em PDF quando essa opção estiver disponível no diálogo de impressão;
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Base UI](https://base-ui.com/)
- [Lucide React](https://lucide.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/)

## Arquitetura da aplicação

```text
Preenchimento do formulário
   │
   ▼
Estado local no React
   │
   ▼
Clique em Imprimir
   │
   ├── Preenchimento incompleto → Mensagens de validação
   │
   └── Preenchimento válido
          │
          ▼
     window.print()
          │
          ▼
     Layout de impressão — PrintPreview
          │
          ▼
     Diálogo de impressão do navegador
```

O componente `DocumentGenerator` concentra o estado do formulário, as regras de seleção, a validação e as ações de limpar e imprimir.

O componente `PrintPreview` recebe os dados por propriedades tipadas e organiza o documento para impressão.

As regras de CSS alternam a apresentação conforme o contexto: durante o uso normal, aparece a interface de preenchimento; durante a impressão, aparece o documento.

## Estrutura principal

```text
clinica-dashboard/
├── public/
│   └── img/
│       ├── LogoProvisorio.png
│       └── favicon.png
├── src/
│   ├── components/
│   │   ├── print/
│   │   │   └── PrintPreview.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── checkbox.tsx
│   │       ├── combobox.tsx
│   │       ├── field.tsx
│   │       └── textarea.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── DocumentGenerator.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.ts
```

## Como executar localmente

### Pré-requisitos

Antes de começar, será necessário ter instalado:

- [Node.js](https://nodejs.org/) 22.12 ou superior;
- npm;
- [Git](https://git-scm.com/).

### 1. Clone o repositório

```bash
git clone https://github.com/nicholasPimenta/clinica-dashboard.git
```

### 2. Entre na pasta do projeto

```bash
cd clinica-dashboard
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

Não é necessário configurar variáveis de ambiente para executar a versão atual.

## Como utilizar

1. Selecione um exame;
2. Marque pelo menos uma opção em **Hábitos de Vida**;
3. Preencha o grupo **Histórico de Doença Crônica**;
4. Preencha o grupo **Histórico Familiar**;
5. Acrescente observações, se necessário;
6. Clique em **Imprimir**;
7. Escolha a impressora ou a opção de salvar em PDF no diálogo do navegador.

Para iniciar um novo preenchimento, clique em **Limpar**.

### Regras de preenchimento

- A seleção de um exame é obrigatória;
- Cada grupo de hábitos e históricos exige pelo menos uma opção marcada;
- Nos grupos de histórico, selecionar **Nenhuma** desmarca as demais opções;
- Selecionar uma condição nesses grupos desmarca **Nenhuma**;
- O campo de observações é opcional e aceita até 600 caracteres.

## Build de produção

Para gerar o build:

```bash
npm run build
```

O comando executa a compilação TypeScript e gera os arquivos de produção no diretório `dist`.

Para visualizar o build localmente:

```bash
npm run preview
```

Acesse o endereço informado no terminal.

## Implantação

O projeto pode ser publicado na Vercel importando este repositório e utilizando as seguintes configurações:

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Comando de instalação | `npm install` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |

A versão atual não exige variáveis de ambiente ou funções serverless.

## Impressão

O documento utiliza dimensões de referência do papel A4, com largura de 210 mm, altura mínima de 297 mm e espaçamento interno de 15 mm.

A configuração da página é definida em `src/index.css`:

```css
@page {
  size: A4 portrait;
  margin: 0;
}
```

A interface de preenchimento utiliza `print:hidden`, enquanto a seção do documento utiliza `hidden print:block`.

O conteúdo impresso inclui:

- Logotipo;
- Exame selecionado;
- Hábitos de vida;
- Histórico de doenças crônicas;
- Histórico familiar;
- Observações;
- Dados de contato no rodapé.

As opções são representadas por caixas com marcação visual, e as observações preservam as quebras de linha inseridas no formulário.

> No diálogo de impressão, confira o papel A4, a orientação retrato e a escala. Desative os cabeçalhos e rodapés automáticos do navegador caso apareçam data, endereço da página ou numeração adicional.

## Acessibilidade

A interface inclui cuidados como:

- Rótulos associados aos campos;
- Agrupamento de opções com `fieldset` e `legend`;
- Identificação de campos e grupos inválidos com `aria-invalid`;
- Associação das mensagens de erro com `aria-describedby`;
- Estados visíveis de foco nos controles;
- Uso de texto para explicar erros de preenchimento, além dos destaques visuais.

## Decisões técnicas

### Separação entre formulário e documento

A interface de preenchimento e o documento possuem necessidades diferentes de apresentação.

Por isso, o formulário fica em `DocumentGenerator`, enquanto `PrintPreview` organiza os mesmos dados em um layout voltado ao papel.

Essa separação permite ajustar a experiência na tela e a apresentação impressa de maneira independente.

### Estado controlado pelo React

O exame, as opções selecionadas, as observações e os erros são controlados com `useState`.

O documento recebe esses valores diretamente, mantendo o conteúdo de impressão sincronizado com o preenchimento.

### Validação antes da impressão

A ação do botão **Imprimir** verifica se um exame foi selecionado e se cada grupo obrigatório possui pelo menos uma opção marcada.

Quando há pendências, a aplicação apresenta as mensagens correspondentes. Quando o preenchimento é válido, chama `window.print()`.

### Exclusividade da opção “Nenhuma”

Nos históricos de doenças crônicas e familiares, a opção **Nenhuma** possui uma regra própria de seleção.

Essa lógica impede que ela permaneça marcada simultaneamente com uma condição do mesmo grupo.

### Impressão nativa do navegador

A aplicação utiliza `window.print()` e estilos específicos de impressão.

O navegador oferece a escolha da impressora e, quando disponível, o salvamento em PDF, sem necessidade de uma biblioteca adicional para gerar o arquivo.

### Dados mantidos em memória

Os dados do formulário permanecem no estado local da aplicação e não são persistidos em banco de dados ou armazenamento do navegador.

Ao recarregar a página, o preenchimento é reiniciado.

## Personalização

Os principais pontos de personalização estão em:

| Elemento | Local |
| --- | --- |
| Lista de exames | Constante `exames` em `src/pages/DocumentGenerator.tsx` |
| Campos e regras de preenchimento | `src/pages/DocumentGenerator.tsx` |
| Conteúdo e layout do documento | `src/components/print/PrintPreview.tsx` |
| Contatos do rodapé | `src/components/print/PrintPreview.tsx` |
| Logotipo | `public/img/LogoProvisorio.png` |
| Favicon | `public/img/favicon.png` |
| Cores e regras de impressão | `src/index.css` |

## Aprendizados

Este projeto reúne práticas de:

- Componentização com React;
- Tipagem de propriedades e estruturas de dados com TypeScript;
- Controle de formulários com `useState`;
- Atualização de estados compostos;
- Validação de grupos de seleção;
- Implementação de regras de exclusividade entre opções;
- Construção de interfaces com shadcn/ui e Base UI;
- Estilização responsiva com Tailwind CSS;
- Uso de atributos de acessibilidade;
- Separação entre interface interativa e documento impresso;
- Configuração de layouts A4 com CSS;
- Integração com a impressão nativa do navegador;
- Publicação de aplicações na Vercel.

## Autor

Desenvolvido por [Nicholas Pimenta](https://github.com/nicholasPimenta).

---

<div align="center">

**[Acessar o Formulário para Impressão](https://clinica-dashboard-seven.vercel.app)**

</div>
