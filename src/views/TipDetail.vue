<template>
  <div class="tip-detail" v-if="tip">
    <h1>{{ tip.title }}</h1>

    <p class="description">{{ tip.description }}</p>

    <pre class="code-block"><code>{{ tip.codeSnippet }}</code></pre>

    <router-link to="/" class="home-button"> Back to Home </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { tips } from "../data/tips";

const route = useRoute();
const tip = computed(() => tips.find((t) => t.slug === route.params.slug));
</script>

<style scoped>
.tip-detail {
  max-width: 800px;
  margin: 80px auto 2rem;
  padding: 0 1rem;
}

h1 {
  color: #2c3e50;
  margin: 2rem 0;
}

.description {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.code-block {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.home-button:hover {
  background: #1a2632;
}
</style>
