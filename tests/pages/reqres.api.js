import BaseApi from "$root/pages/base.api";

const reqresApi = {
    register: (data) => BaseApi.post('/register', data)
}

export default reqresApi;