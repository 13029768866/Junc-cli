import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
// 处理环境变量
import { wrapperEnv } from './build';
// 插件列表
import { getPluginsList } from './build/plugins';

// 进程的当前目录
const root = process.cwd();

// 路径查找
const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  /* 情景模式配置: command代表指令(dev/serve/build) */
  /* loadEnv根据root(当前目录)加载环境变量文件(.env) */

  const { VITE_PORT, VITE_LEGACY, VITE_PUBLIC_PATH } = wrapperEnv(loadEnv(mode, root));

  return {
    // 项目根目录（index.html 文件所在的位置）,默认process.cwd()
    root,
    // 公共基础路径
    base: VITE_PUBLIC_PATH,
    // 文件导入配置
    resolve: {
      // 别名配置
      alias: {
        '/@': pathResolve('src'),
      },
    },
    css: {
      // https://github.com/vitejs/vite/issues/5833
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    // 服务器选项
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      https: false,
      open: true,
      // 本地跨域代理（todo）
    },
    // 构建选项
    build: {
      // vite在build时候默认进行压缩计算,但是vite并不提供gzip压缩功能,关闭后可以跳过计算压缩大小,提高打包速度
      brotliSize: false,
      // 消除打包大小500kb警告
      chunkSizeWarningLimit: 2000,
    },
    // 插件配置
    plugins: getPluginsList(command, VITE_LEGACY),
    // 依赖优化选项
    optimizeDeps: {
      // 默认情况下,不在node_modules中的链接包不会被预构建,可强制预构建想要的链接包
      include: [],
    },
  };
});