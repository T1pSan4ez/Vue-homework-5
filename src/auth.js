export const auth = {
    isAuthenticated: false,
    role: null,

    loginAsAdmin() {
        this.isAuthenticated = true;
        this.role = 'admin';
    },

    loginAsUser() {
        this.isAuthenticated = true;
        this.role = 'user';
    },

    logout() {
        this.isAuthenticated = false;
        this.role = null;
    },

    isAdmin() {
        return this.isAuthenticated && this.role === 'admin';
    },

    isUser() {
        return this.isAuthenticated && this.role === 'user';
    }
}