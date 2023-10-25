const fs = require('fs').promises;
function successLog() {
  console.log(`
    ╔═════════════════════════════════════════════╗
    ║   Stylesheets created:                      ║
    ║                                             ║
    ║   ->  /src/assets/styles/colors.scss        ║
    ╚═════════════════════════════════════════════╝
  `);
}
async function createDesignTokens() {
  const file = await fs.readFile('design-tokens.json');
  const colors = JSON.parse(file).colors;
  const colorsStyleContent = Object.entries(colors).reduce((acc, [color, intensities]) => {
    if ('value' in intensities) {
      const line = `$${color}: ${intensities.value};\n`;
      return acc + line;
    }
    const lines = Object.entries(intensities).reduce((acc, [intensity, { value }]) => {
      const line = `$${color}-${intensity}: ${value};\n`;
      return acc + line;
    }, '');
    return acc + lines;
  }, '');
  fs.writeFile('src/assets/styles/colors.scss', colorsStyleContent, 'utf-8');
}
createDesignTokens().then(successLog).catch(console.error);
