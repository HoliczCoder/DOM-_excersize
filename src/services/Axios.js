import axios from "axios"; // file nay duoc export di

let axiosInstance = null;
let headers = {
  "Content-Type": "application/json",
};

function setHeaders(inputHeaders) {
  // chỗ này để config header, còn không để mặc định như trên
  headers = inputHeaders;
}

function getHeaders() {
  return headers;
}

function getInstance() {
  if (axiosInstance != null) {
    return axiosInstance;
  }
  axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: getHeaders(),
  });
  //hook interceptor cài ở đây
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        alert("Bạn phải đăng nhập để truy cập vào api này");
        window.location.href = "/dang-nhap";
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}

function get(endpointApiUrl, payload = {}) {
  return getInstance().get(endpointApiUrl, payload); // tức là trả về axios.create.get ( ,). chỗ này nó tự động ghép, chưa hiểu payload là cái mẹ gì
} // gọi API bắt đầu từ đây

function post(endpointApiUrl, payload = {}) {
  return getInstance().post(endpointApiUrl, payload);
}

function put(endpointApiUrl, payload = {}) {
  return getInstance().put(endpointApiUrl, payload);
}

function del(endpointApiUrl, payload = {}) {
  return getInstance().delete(endpointApiUrl, payload);
}

export const Axios = {
  axiosInstance,
  getHeaders,
  setHeaders,
  get,
  post,
  put,
  del,
};
