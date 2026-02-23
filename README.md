# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

### Deploy no cPanel / Turbo Cloud

O projeto está configurado para deploy na [Turbo Cloud](https://app.turbocloud.com.br/) (cPanel):

1. **No cPanel**: vá em **Git Version Control** e conecte este repositório.
2. **Node.js**: crie uma aplicação Node.js em **Setup Node.js App** (para o deploy rodar `npm install` e `npm run build`).
3. **Caminho de deploy**: por padrão os arquivos vão para `public_html`. Se o seu site ficar em outra pasta (ex.: subdomínio), edite no repositório o arquivo `.cpanel.yml` e altere `DEPLOYPATH` (ex.: `export DEPLOYPATH=$HOME/public_html/seudominio`).
4. **Deploy**: a cada push no repositório, o cPanel executa as tarefas do `.cpanel.yml` (instala dependências, gera o build e copia a pasta `dist` para o diretório público).

O arquivo `public/.htaccess` garante que o roteamento da SPA (React Router) funcione no Apache.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
