import {defineStore} from "pinia";
import type {Album} from "@/types/Album";
import {type AxiosResponse} from "axios";
import axiosInstance from "@app/axiosInstance";

export const useSingleAlbumStore = defineStore('albumStore', {
  state: () => ({
    album: null as Album | null,
    images: [] as string[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchAlbum(uuid: string) {
      if (this.loading) return;

      this.loading = true;
      this.error = null;
      try {
        const response: AxiosResponse = await axiosInstance.get(`/albums/${uuid}/images`);
        this.album = response.data.album;
        this.images = response.data.images;
      } catch (error: any) {
        this.error = error.response?.data || error.message;
        console.error('Error while fetching albums', this.error);
      } finally {
        this.loading = false;
      }
    }
  },
});