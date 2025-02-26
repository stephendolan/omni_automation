const fs = require("fs");
const path = require("path");

// Function to process a file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const fileName = path.basename(filePath, ".js");
  const outputPath = path.join(process.cwd(), `${fileName}.omnijs`);

  // Write the file to the root directory with .omnijs extension
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Created: ${outputPath}`);
}

// Process all plugin files in the dist/plugins directory
const pluginsDir = path.join(process.cwd(), "dist", "plugins");
if (fs.existsSync(pluginsDir)) {
  const files = fs.readdirSync(pluginsDir);

  files.forEach((file) => {
    if (file.endsWith(".js")) {
      processFile(path.join(pluginsDir, file));
    }
  });
}

console.log("Post-build processing complete!");
