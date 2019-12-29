// Preload script
process.once('loaded', () => {
    console.log('preload...')
    global.nameUser = 'Sadri FERTANI';
})