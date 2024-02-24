const state = {
    roles: [] // Initial roles state
};

const mutations = {
    setRoles(state, roles) {
        state.roles = roles; // Mutation to set roles state
    }
};

const actions = {
    fetchRoles({ commit }) {
        // Simulated fetch from JSON file (replace with actual fetch logic)
        import('../../data/user_roles.json').then(rolesData => {
            console.log("roles data", rolesData)
            commit('setRoles', rolesData.default); // Commit mutation to update roles state
        });
    }
};

const getters = {
    getRoles: state => state.roles // Getter to access roles state
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};