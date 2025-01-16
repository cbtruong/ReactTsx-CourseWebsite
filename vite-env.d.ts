/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_API_URL: string;
    readonly VITE_OPEN_AI_URL: string;
    // Thêm các biến môi trường khác nếu cần
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  