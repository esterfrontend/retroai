<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Retrospective AI</h1>
      <p class="subtitle">Ingresa tu nombre para comenzar</p>
      
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="input-group">
          <input
            v-model="userName"
            type="text"
            placeholder="Tu nombre"
            required
            autofocus
            class="input-field"
          />
        </div>
        
        <button type="submit" class="submit-button" :disabled="!userName.trim()">
          Continuar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const userName = ref('')

const handleSubmit = () => {
  if (userName.value.trim()) {
    // Aquí puedes guardar el nombre del usuario y navegar a otra página
    // Por ejemplo: navigateTo('/dashboard')
    console.log('Usuario:', userName.value.trim())
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.login-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  width: 100%;
}

.input-field {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-field::placeholder {
  color: #999;
}

.submit-button {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>