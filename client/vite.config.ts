import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the `environments` folder
const envFiles = [
  `.env`,
  `.env.${process.env.NODE_ENV}`,
  `.env.local`,
  `.env.${process.env.NODE_ENV}.local`
];

envFiles.forEach((file) => {
  dotenv.config({ path: path.resolve(__dirname, 'environments', file) });
});
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
