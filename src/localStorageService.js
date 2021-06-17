const localStorageService = {
    setSession: function (data) {
        localStorage.setItem("Access Token", data.access_token);
        localStorage.setItem("Refresh Token", data.refresh_token);
        localStorage.setItem("Email", data.email);
    },

    getAccessToken: function(){
        return localStorage.getItem('Access Token');
    },

    getRefreshToken: function(){
        return localStorage.getItem('Refresh Token');
    },

    getEmail: function(){
        return localStorage.getItem('Email');
    },

    resetSession: function(){
        localStorage.removeItem('Access Token');
        localStorage.removeItem('Refresh Token');
        localStorage.removeItem('Email');
    }
}

export default localStorageService;