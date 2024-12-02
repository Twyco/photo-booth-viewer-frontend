import {defineStore} from "pinia";
import type {Album} from "@/types/Album";
import {type AxiosResponse} from "axios";
import axiosInstance from "@app/axiosInstance";

export const useAlbumCollectionStore = defineStore('albumsStore', {
  state: () => ({
    data: [] as Album[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchAlbums() {
      if (this.loading) return;

      this.loading = true;
      this.error = null;
      try {
        const response: AxiosResponse<Album[]> = await axiosInstance.get('/albums');
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