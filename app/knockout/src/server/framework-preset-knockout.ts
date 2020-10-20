// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: require.resolve('html-loader'),
            },
          ],
        },
      ],
    },
  };
}
