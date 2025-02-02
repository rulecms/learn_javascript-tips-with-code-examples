<template>
  <div class="home">
    <h1>JavaScript Tips & Tricks</h1>

    <div class="tips-grid">
      <router-link
        v-for="tip in tips"
        :key="tip.slug"
        :to="{ name: 'tipDetail', params: { slug: tip.slug } }"
        class="tip-card"
        data-aos="fade-up"
      >
        <h2>{{ tip.title }}</h2>
        <p>{{ tip.summary }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { tips } from "../data/tips";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
  });
});
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 80px auto 2rem;
  padding: 0 1rem;
}

h1 {
  text-align: center;
  margin: 2rem 0;
  color: #2c3e50;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.tip-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .tips-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>
