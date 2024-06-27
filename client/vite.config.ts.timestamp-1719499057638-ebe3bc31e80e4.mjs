// vite.config.ts
import { defineConfig } from "file:///home/olga/dev/Bootcamp/Phase%203/chistoNet/client/node_modules/vite/dist/node/index.js";
import react from "file:///home/olga/dev/Bootcamp/Phase%203/chistoNet/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/profile": "http://localhost:3001",
      "/api/products": "http://localhost:4000/",
      "/api/chat": "http://localhost:5001/",
      "/api/news": "http://localhost:6000/",
      "/api": "http://localhost:3000"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9vbGdhL2Rldi9Cb290Y2FtcC9QaGFzZSAzL2NoaXN0b05ldC9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL29sZ2EvZGV2L0Jvb3RjYW1wL1BoYXNlIDMvY2hpc3RvTmV0L2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9vbGdhL2Rldi9Cb290Y2FtcC9QaGFzZSUyMDMvY2hpc3RvTmV0L2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpL3Byb2ZpbGUnOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJyxcbiAgICAgICcvYXBpL3Byb2R1Y3RzJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC8nLFxuICAgICAgJy9hcGkvY2hhdCc6ICdodHRwOi8vbG9jYWxob3N0OjUwMDEvJyxcbiAgICAgICcvYXBpL25ld3MnOiAnaHR0cDovL2xvY2FsaG9zdDo2MDAwLycsXG4gICAgICAnL2FwaSc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1UsU0FBUyxvQkFBb0I7QUFDalcsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxnQkFBZ0I7QUFBQSxNQUNoQixpQkFBaUI7QUFBQSxNQUNqQixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
