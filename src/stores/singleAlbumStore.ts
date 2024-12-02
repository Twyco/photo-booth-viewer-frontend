import {defineStore} from "pinia";
import type {Album} from "@/types/Album";
import {type AxiosResponse} from "axios";
import axiosInstance from "@app/axiosInstance";

export const useSingleAlbumStore = defineStore('albumStore', {
  state: () => ({
    data: null as Album | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchAlbum(uuid: string) {
      if (this.loading) return;

      this.loading = true;
      this.error = null;
      try {
        const response: AxiosResponse<Album> = await axiosInstance.get(`/albums/${uuid}`);
        this.data = response.data;
      } catch (error: any) {
        this.error = error.response?.data || error.message;
        console.error('Error while fetching albums', this.error);
      } finally {
        this.loading = false;
      }
    }
  },
});