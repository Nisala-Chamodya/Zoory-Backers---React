import React from "react";

const { default: axios } = require("axios");

const axiosPublic = axios.create({
  baseURL: "http://localhost:6001",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
