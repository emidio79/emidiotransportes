// Importa a função que ajuda a configurar o Vite.
import { defineConfig } from 'vite'

// Importa o plugin que permite ao Vite interpretar componentes React.
import react from '@vitejs/plugin-react'

// Importa o plugin oficial do Tailwind para Vite.
import tailwindcss from '@tailwindcss/vite'

// Exporta a configuração que o Vite usará ao iniciar e gerar o projeto.
export default defineConfig({
  // A lista de plugins ativos no projeto.
  plugins: [
    react(),
    tailwindcss(),
  ],
})