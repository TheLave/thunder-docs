import { ThunderModule } from 'src/models/ThunderModule';

export const main: ThunderModule = {
  client: {
    isLoggedIn: `
      local isLoggedIn --[[ Boolean ]] = thunder.isLoggedIn()
    `,
    getCharacters: `
      thunder.cb.trigger('getCharacters', function(characters --[[ Characters array ]])
        -- Code that runs when the list of items is retrieved
      end)
    `,
  },
  server: {
    registerItemUse: `
      thunder.registerItemUse(itemName --[[ String ]], function(itemData --[[ Item data ]], ... --[[ Function arguments (optional) ]])
        -- Code that runs when an item is used
      end)
    `,
    useItem: `
      thunder.useItem(itemName --[[ String ]], item --[[ Item data ]])
    `,
  },
};
