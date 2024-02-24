<template>
  <div id="user-roles-management-app">
    <div class="container">
      <h1>User Roles Management</h1>
      <router-view/>
    </div>
  </div>
</template>

<style>
#user-roles-management-app {
  font-family: "Apple Symbols";
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
}
</style>
