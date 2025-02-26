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

// Remove the dist folder after processing
function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for directories
        removeDirectory(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });
    // Delete the now-empty directory
    fs.rmdirSync(dirPath);
    console.log(`Removed: ${dirPath}`);
  }
}

const distDir = path.join(process.cwd(), "dist");
if (fs.existsSync(distDir)) {
  removeDirectory(distDir);
}

console.log("Post-build processing complete!");
