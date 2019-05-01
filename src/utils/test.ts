const fs = require('fs');
const path = require('path');

export const renderToSketch = async function (page, component, name) {
    await page.addScriptTag({
        path: path.resolve('src/global/page2layers.js')
    });

    const asketchPageJSONString = await page.evaluate('JSON.stringify(page2layers.run())');

    const outputFile = `../../data/sketch/${component}-${name}.asketch.json`;
    fs.writeFileSync(path.resolve(__dirname, outputFile), asketchPageJSONString);
}
