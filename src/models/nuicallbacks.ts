import { ThunderModule } from 'src/models/ThunderModule';

export const nuicallbacks: ThunderModule = {
  client: {
    isLoading: `
      fetch('https://thunder/isLoading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        // Run code to hide loadingscreen as the player is done loading
        // This is where you would trigger the 'doneLoading' POST request
      }
    `,
    doneLoading: `
      // POST to the server that the loadingscreen is closed and the loading sequence can continue
      fetch('https://thunder/doneLoading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    `,
  },
};
