import { ThunderModule } from 'src/models/ThunderModule';

export const utils: ThunderModule = {
  server: {
    getIdentifier: `
      local identifier --[[ String ]] = thunder.utils.getIdentifier(source --[[ Server ID ]], type --[[ String ]])
    `,
  },
};
