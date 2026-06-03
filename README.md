# ConectaPro

App mobile em React Native + Expo + TypeScript para conectar profissionais a empresas com vagas abertas.

## Tecnologias

- React Native
- Expo SDK 54
- TypeScript
- React Navigation
- AsyncStorage
- Context API

## Pre-requisitos

Antes de rodar o projeto, instale:

- Node.js 20 ou superior
- npm
- Expo Go no celular, se quiser testar em dispositivo fisico

Opcional:

- Android Studio, para rodar em emulador Android
- Xcode, para rodar em simulador iOS no macOS

## Como rodar localmente

Clone o repositorio:

```bash
git clone <url-do-repositorio>
cd conecta
```

Instale as dependencias:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Depois disso, o Expo vai abrir o painel no terminal. Voce pode:

- Ler o QR Code com o Expo Go no celular
- Pressionar `a` para abrir no Android
- Pressionar `i` para abrir no iOS
- Pressionar `w` para abrir no navegador

## Rodar diretamente por plataforma

Web:

```bash
npm run web
```

Android:

```bash
npm run android
```

iOS:

```bash
npm run ios
```

## Verificar TypeScript

```bash
npx tsc --noEmit
```

## Fluxo para testar

1. Abra o app e escolha `Sou empresa`.
2. Cadastre o nome da empresa, o titulo da vaga e os requisitos.
3. Use `Trocar de conta`.
4. Escolha `Sou profissional`.
5. Cadastre nome, profissao e habilidades parecidas com os requisitos da vaga.
6. Na Home, toque em `Buscar vagas`.
7. Veja o score de compatibilidade e abra os detalhes da vaga.

## Observacoes

O projeto ainda nao possui backend. Os dados sao salvos localmente usando AsyncStorage. A proxima etapa planejada e substituir os services locais por chamadas para uma API REST.
