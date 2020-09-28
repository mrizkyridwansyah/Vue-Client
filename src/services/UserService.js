//file ini bisa di asumsikan sbg controller

import http from '../http';

class UserService{
	find() {
		return http.get("/user/");
	}
}

export default new UserService;