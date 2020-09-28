//file ini bisa di asumsikan sbg controller

import http from '../http';

class UserService{
	find() {
		return http.get("/user");
	}

	get(id) {
		return http.get(`/user/${id}`);
	}

	create(data) {
		return http.post("/user", data);
	}
}

export default new UserService;