//file ini bisa di asumsikan sbg controller

import http from '../http';

class UserService{
	find() {
		return http.get("/user");
	}

	create(data) {
		return http.post("/user", data);
	}
}

export default new UserService;