<template>
  <nav class="top-nav">
    <div class="nav-content">Built with love by the RuleCMS Team</div>
  </nav>

  <router-view />
</template>

<style scoped>
.top-nav {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .nav-content {
    font-size: 1rem;
  }
}
</style>
