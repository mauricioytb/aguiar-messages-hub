# Mauricio Aguiar Digital

Crie um site institucional moderno, elegante e responsivo para o pregador brasileiro Mauricio Aguiar.

IMPORTANTE:
Este é o primeiro MVP do site. Quero uma experiência simples, limpa e profissional. NÃO adicione funcionalidades, seções ou páginas que não estejam especificadas abaixo.

IDENTIDADE VISUAL
- Analise cuidadosamente as imagens de referência fornecidas do Mauricio Aguiar.
- Use essas imagens para entender a identidade visual, atmosfera, iluminação, roupas, ambientes e características visuais do ministério.
- A partir dessa análise, defina uma paleta de cores coerente com as fotografias e com a personalidade do pregador.
- NÃO use uma paleta pré-definida ou genérica de "site religioso".
- Não force dourado, azul, preto, vermelho ou qualquer outra cor sem que isso faça sentido após analisar as imagens.
- O resultado deve parecer uma identidade criada especificamente para Mauricio Aguiar.
- O design deve ser contemporâneo, sofisticado, limpo e com forte presença visual.
- Evite excesso de elementos decorativos, gradientes exagerados, efeitos 3D ou aparência de template.

ESTRUTURA DO SITE

1. HEADER

Criar um header simples e elegante.

Lado esquerdo:
- Nome/logo: MAURICIO AGUIAR

Navegação:
- Início
- Mensagens
- Contato

Lado direito:
- ícone/link do YouTube
- ícone/link do Instagram
- ícone/link do TikTok

O header deve ser responsivo e ter uma versão adequada para dispositivos móveis.

2. HERO

Criar uma seção hero visualmente forte.

Usar uma das fotografias fornecidas do Mauricio Aguiar como imagem principal.

Texto:

MAURICIO AGUIAR

"Um chamado. Uma mensagem. Uma missão."

Adicionar um botão principal:

"ASSISTIR ÀS MENSAGENS"

Esse botão deve levar para a seção/página de mensagens.

A fotografia deve ter bastante destaque. Não esconder o rosto do pregador com excesso de texto ou elementos gráficos.

3. ÚLTIMAS MENSAGENS

Criar uma seção chamada:

"Últimas Mensagens"

Mostrar 4 mensagens em uma grade no desktop.

Cada card deve conter SOMENTE:

- miniatura da mensagem
- botão/ícone de play sobre a miniatura
- título da mensagem

NÃO mostrar:
- duração
- número de visualizações
- data
- categoria
- descrição
- autor
- tags

O card inteiro deve ser clicável.

As miniaturas e títulos devem ser preparados para utilizar os vídeos reais do canal do YouTube de Mauricio Aguiar.

Canal oficial:
https://www.youtube.com/@MauricioAguiarcanal

O botão "Ver todas as mensagens" deve levar para a página "Mensagens".

4. PÁGINA DE MENSAGENS

Criar uma página simples chamada "Mensagens".

Ela deve utilizar o mesmo padrão visual dos cards da homepage.

Cada card contém somente:
- miniatura
- botão de play
- título

Os cards devem direcionar para o respectivo vídeo no YouTube.

Não criar filtros por tema, categorias, próximos eventos, agenda ou outros recursos.

Sempre que possível, estruturar o projeto para que posteriormente os vídeos possam ser carregados automaticamente através da API do YouTube, em vez de precisar cadastrar cada vídeo manualmente.

5. REDES SOCIAIS

Criar uma seção simples para apresentar as três principais redes:

YouTube
Instagram
TikTok

Cada uma deve funcionar como um link real para o respectivo perfil.

Não criar feeds complexos ou integrações visuais desnecessárias.

6. CONTATO

Criar uma seção simples:

"Entre em contato"

com uma chamada objetiva e um botão para contato.

Não criar formulário complexo neste primeiro MVP.

7. FOOTER

Footer minimalista contendo:

MAURICIO AGUIAR

Links:
- Início
- Mensagens
- Contato
- YouTube
- Instagram
- TikTok

Adicionar copyright.

DIREÇÃO DE UX

- O site deve carregar rapidamente.
- Priorizar imagens e tipografia.
- Espaçamento generoso.
- Hierarquia visual clara.
- Navegação extremamente simples.
- Excelente experiência em desktop e mobile.
- Cards de mensagens devem ter boa qualidade visual.
- Microinterações discretas no hover são permitidas.
- Não exagerar em animações.

IMPORTANTE — O QUE NÃO DEVE EXISTIR NESTA VERSÃO

Não criar:
- página "Minha história"
- biografia extensa
- agenda
- próximos eventos
- conteúdos por tema
- categorias complexas
- newsletter
- loja
- área de membros
- blog
- estudos bíblicos
- sistema de comentários
- formulário complexo
- depoimentos
- doações
- funcionalidades desnecessárias

O objetivo é criar uma primeira versão enxuta, profissional e visualmente marcante, tendo Mauricio Aguiar e suas mensagens como o foco principal.

TECNOLOGIA

Construa com uma arquitetura limpa e fácil de manter.

Use componentes reutilizáveis.

Prepare a estrutura para posteriormente integrar a API do YouTube, mas não sacrifique a simplicidade da primeira versão.

Antes de definir as cores finais, analise as imagens de referência fornecidas e faça a identidade visual nascer delas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7929924f-4533-4d3e-a146-178d59ef5f01).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
