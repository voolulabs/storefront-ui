import { Config } from 'tailwindcss';
import config from '@storefront-ui/tailwind-config/index.json';

export default <Config>{
  ...(config as unknown as Config),
};