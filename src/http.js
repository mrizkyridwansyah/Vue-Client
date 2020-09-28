// untuk mengarahkan uri ke component
import axios from 'axios';//untuk menentukan header http

export default axios.create({
	baseURL: "http://localhost:8080/api",
	headers: {
		"Content-type": "application/json"
	}
});