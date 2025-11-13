<template>
  <div class="container">
    <header>
      <h1>Bienvenido a Nuxt</h1>
      <p>Proyecto base creado con Nuxt 4</p>
    </header>
    
    <main>
      <section class="info">
        <h2>🚀 Proyecto listo para desarrollar</h2>
        <p>Este es un proyecto base de Nuxt configurado con:</p>
        <ul>
          <li>Nuxt 4</li>
          <li>Vue 3</li>
          <li>TypeScript</li>
          <li>pnpm</li>
        </ul>
      </section>
      
      <section class="actions">
        <h3>Comandos disponibles:</h3>
        <div class="commands">
          <code>pnpm dev</code> - Iniciar servidor de desarrollo
          <code>pnpm build</code> - Construir para producción
          <code>pnpm preview</code> - Previsualizar build de producción
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

header h1 {
  font-size: 2.5rem;
  color: #00dc82;
  margin-bottom: 0.5rem;
}

header p {
  font-size: 1.2rem;
  color: #666;
}

main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

section {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

section h2 {
  margin-top: 0;
  color: #333;
}

section h3 {
  margin-top: 0;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #00dc82;
  font-weight: bold;
}

.commands {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

code {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  display: inline-block;
}
</style>
