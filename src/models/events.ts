import { ThunderModule } from 'src/models/ThunderModule';

export const events: ThunderModule = {
  client: {
    setLoggedIn: `
      TriggerEvent('thunder:selectCharacter', character --[[ Character ]])
    `,
    savePosition: `
      TriggerServerEvent('thunder:savePosition', coords --[[ Vector3 ]])
    `,
    saveCharacter: `
      TriggerServerEvent('thunder:saveCharacter', character --[[ Character ]])
    `,
    saveCharacterClothing: `
      TriggerServerEvent('thunder:saveCharacterClothing', character --[[ Character ]])
    `,
  },
  server: {
    setLoggedIn: `
      TriggerClientEvent('thunder:selectCharacter', source --[[ Server ID ]], character --[[ Character ]])
    `,
  },
};
