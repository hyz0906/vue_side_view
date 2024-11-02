<template>
  <div class="app-container">
    <header class="header">
      <img 
        @click="toggleSidebar" 
        class="header-icon" 
        src="../assets/logo.png" 
        alt="Toggle Sidebar"
      >
    </header>
    
    <div class="content">
      <transition name="slide">
        <div v-if="showSidebar" class="sidebar">
          <iframe 
            :src="iframeUrl" 
            frameborder="0"
            class="sidebar-iframe"
          ></iframe>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const showSidebar = ref(false);
    const iframeUrl = 'http://localhost:3000';

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };

    return {
      showSidebar,
      iframeUrl,
      toggleSidebar
    };
  }
});
</script>

<style scoped>
.app-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
}

.header-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.header-icon:hover {
  transform: scale(1.1);
}

.content {
  margin-top: 60px;
  height: calc(100vh - 60px);
}

.sidebar {
  position: fixed;
  right: 0;
  top: 60px;
  width: 400px;
  height: calc(100vh - 60px);
  background-color: #fff;
  box-shadow: -2px 0 4px rgba(0,0,0,0.1);
}

.sidebar-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
