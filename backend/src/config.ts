export interface Config {
  port: number;
}

const config: Config = {
  port: Number(process.env.PORT) || 9000,
};

export default config;
