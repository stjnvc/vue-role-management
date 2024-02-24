<template>
  <div>
    <div class="role-actions">
      <input type="text" v-model="searchTerm" placeholder="Search roles">
      <select v-model="roleStatus">
        <option value="all">Active and inactive</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button @click="createNewRole">Create New Role</button> <!-- Button for creating new roles -->
    </div>
    <div class="role-list">
      <RoleCard
          v-for="role in filteredRoles"
          :key="role.id"
          :role="role"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RoleCard from "@/components/RoleCard";

export default {
  name: 'RoleListView',
  components: {RoleCard},
  data() {
    return {
      searchTerm: '',
      roleStatus: 'all'
    };
  },
  computed: {
    ...mapState('role', ['roles']),

    filteredRoles() {
      let filteredRoles = this.roles;

      if (this.searchTerm) {
        const searchTerm = this.searchTerm.toLowerCase();
        filteredRoles = filteredRoles.filter(role => {
          return role.name.toLowerCase().includes(searchTerm);
        });
      }

      if (this.roleStatus !== 'all') {
        const isActive = this.roleStatus === 'active';
        filteredRoles = filteredRoles.filter(role => role.active === isActive);
      }

      return filteredRoles;
    }
  },
  created() {
    this.fetchRoles();
  },
  methods: {
    ...mapActions('role', ['fetchRoles']),

    createNewRole(){
      alert('Create new role.')
    }
  }
}
</script>
<style>
.role-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.role-actions {
  margin-bottom: 40px;
}
</style>
