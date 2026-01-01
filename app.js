import { sdk } from '@farcaster/miniapp-sdk';

// KeÄŹ je aplikĂˇcia pripravenĂˇ
async function initializeApp() {
    try {
        await sdk.actions.ready();
        console.log('Mini app je pripravenĂˇ!');
    } catch (error) {
        console.error('Chyba pri inicializĂˇcii:', error);
    }
}

// Inicializuj aplikĂˇciu
initializeApp();