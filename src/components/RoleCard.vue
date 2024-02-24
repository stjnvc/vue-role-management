<template>
  <div class="role-card">
    <div class="role-info">
      <h2>{{ role.name }}</h2>
      <h3>{{ role.type }}</h3>
      <p>{{ role.description }}</p>
      <p>Date created: {{ createdOn }}</p>
      <div class="user-images">
        <img v-for="user in role.users" :key="user.id" :src="user.image" alt="User Image">
      </div>
    </div>
    <div class="role-actions">
      <div v-if="role.editable">
        <button @click="editRole">Edit</button>
        <button @click="deleteRole">Delete</button>
      </div>
      <div v-else>
        <font-awesome-icon icon="lock" />
      </div>
      <div v-if="!role.active" class="inactive-indicator">
        <p>Inactive</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    role: Object,
    editable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    createdOn(){
      return moment(this.role.created_on).format('DD/MM/YYYY'); // Format the date
    }
  },
  methods: {
    editRole() {
      alert('Edit role.')
    },
    deleteRole() {
      alert('Delete role')
    }
  }
}
</script>

<style>
.role-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; /* Changed from row to column */
}

.role-info {
  flex: 1;
}

.user-images {
  margin-top: 10px;
}

.role-actions {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items to center */
  margin-top: 10px; /* Added margin-top for spacing */
}

.inactive-indicator {
  background-color: red;
  color: white;
  padding: 2px 6px; /* Reduced padding */
  border-radius: 5px; /* Adjusted border-radius for rounded edges */
  font-size: 12px; /* Reduced font size */
  display: inline-block; /* Ensure it wraps around the text */
}
</style>
