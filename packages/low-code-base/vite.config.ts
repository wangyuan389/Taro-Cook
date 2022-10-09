/*
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2022-04-02 14:12:10
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-08 16:06:35
 */
import { fileURLToPath, URL } from "url";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify } from "unocss";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetAttributify(), presetUno({})],
      shortcuts: {
        "flex-center": "flex justify-center items-center",
      },
    }),
  ],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve("src") + "/",
      },
      // #/xxxx => types/xxxx
      {
        find: /#\//,
        replacement: pathResolve("src/types") + "/",
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variable.scss";',
      },
    },
  },
});
