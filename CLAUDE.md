# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Interview/coding exercise collection for discussing problem-solving approaches. Each exercise is self-contained in `exercises/`.

## Exercise Commands

Each exercise is independent with its own `package.json`. Navigate to exercise directory first.

### TypeScript Problems (vitest)
```bash
cd exercises/typescript_problem_01_is_string_a_permutation  # or 02, 03_bom
npm install
npm run dev          # run tests once
npm run dev:watch    # watch mode
```

### Node Express
```bash
cd exercises/node_express
npm install
npm run dev          # ts-node-dev with auto-reload
```

### Angular
```bash
cd exercises/angular_typescript
npm install
npm start            # ng serve
npm test             # ng test (Karma/Jasmine)
npm run e2e          # Protractor e2e
```

### React
```bash
cd exercises/react_typescript
npm install
npm start            # react-scripts start
npm test             # react-scripts test (Jest)
```

### Vue 2
```bash
cd exercises/vue2_typescript
npm install
npm run dev          # vite dev server
npm run typecheck    # tsc --noEmit
```

### Vue 3
```bash
cd exercises/vue3_typescript
npm install
npm run dev          # vite dev server
npm run typecheck    # vue-tsc --noEmit
```

## Architecture

- No shared code between exercises - each is isolated
- TypeScript problems use vitest for testing
- Frontend exercises: Angular (Karma), React (Jest), Vue 2 (Vite), Vue 3 (Vite)
- Non-code exercises (sql, command_line, design) have no package.json
