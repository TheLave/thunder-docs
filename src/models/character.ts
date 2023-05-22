import { ThunderModule } from 'src/models/ThunderModule';

export const character: ThunderModule = {
  server: {
    getName: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
      local characterName --[[ String ]] = character.getName()
    `,
    setName: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
      character.setName(firstName --[[ String ]], lastName --[[ String ]])
    `,
    addMoney: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
      character.addMoney(amount --[[ Int ]])
    `,
    removeMoney: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
      local success --[[ Boolean ]] = character.removeMoney(amount --[[ Int ]])
    `,
    setInventory: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
      character.setInventory(inventory --[[ Item array ]])
    `,
    save: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
      character.save()
    `,
  },
};
