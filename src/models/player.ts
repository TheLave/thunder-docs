import { ThunderModule } from 'src/models/ThunderModule';

export const player: ThunderModule = {
  client: {
    activeCharacter: `
      local character --[[ Character ]] = thunder.activeCharacter()
    `,
  },
  server: {
    createPlayer: `
      local player --[[ Player ]] = thunder.player.createPlayer(source --[[ Server ID ]])
    `,
    getPlayer: `
      local player --[[ Player ]] = thunder.player.getPlayer(source --[[ Server ID ]])
    `,
    getActiveCharacter: `
      local character --[[ Character ]] = thunder.player.getActiveCharacter(source --[[ Server ID ]])
    `,
    login: `
      thunder.player.login(source --[[ Server ID ]])
    `,
    logout: `
      thunder.player.logout(source --[[ Server ID ]])
    `,
    selectCharacter: `
      local character --[[ Character ]] = thunder.player.selectCharacter(source --[[ Server ID ]], characterId --[[ Int ]])
    `,
    createCharacter: `
      local character --[[ Character ]] = thunder.player.createCharacter(source --[[ Server ID ]], firstname --[[ String ]], lastname --[[ String ]], gender --[[ String ]], nationality --[[ String ]], birthdate --[[ String (DD-MM-YYYY) ]])
    `,
    saveCharacter: `
      thunder.player.saveCharacter(source --[[ Server ID ]], character --[[ Character ]])
    `,
    deleteCharacter: `
      local success --[[ Boolean ]] = thunder.player.saveCharacter(source --[[ Server ID ]], characterId --[[ Int ]])
    `,
    setSingleInstance: `
      thunder.player.setSingleInstance(source --[[ Server ID ]], state --[[ Int ]])
    `,
  },
};
