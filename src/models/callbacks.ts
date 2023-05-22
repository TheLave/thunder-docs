import { ThunderModule } from 'src/models/ThunderModule';

export const callbacks: ThunderModule = {
  client: {
    trigger: `
      thunder.cb.trigger(callbackName --[[ String ]], function(... --[[ Callback return arguments (optional) ]])
        -- Code that is triggered after the callback returns
      end, ... --[[ Callback arguments (optional) ]])
    `,
  },
  server: {
    create: `
      thunder.cb.create(callbackName --[[ String ]], function(source --[[ Server ID ]], cb --[[ Callback function ]], ... --[[ Callback arguments (optional) ]])
        -- Code that is triggered when the callback is triggered from the client side
        cb(... --[[ Callback return arguments (optional) ]])
      end)
    `,
  },
};
