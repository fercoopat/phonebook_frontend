import { axiosInstance } from '../config/axios-instance';

const PERSON_ENDPOINT = '/persons';

export default {
  getAll: async () => {
    try {
      const { data } = await axiosInstance.get(PERSON_ENDPOINT);
      return data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  create: async (payload) => {
    try {
      const { data } = await axiosInstance.post(PERSON_ENDPOINT, payload);
      return data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  update: async (id, payload) => {
    try {
      const { data } = await axiosInstance.put(
        `${PERSON_ENDPOINT}/${id}`,
        payload
      );
      return data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  remove: async (id) => {
    try {
      await axiosInstance.delete(`${PERSON_ENDPOINT}/${id}`);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
};
