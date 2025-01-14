
import fs from "fs";
import path from "path";

// Paths to the directories you want to generate barrel files for
const paths = [
    path.resolve("../App/src/renderer/src"),
    path.resolve("../App/server"),
];

// Function to recursively traverse directories
const traverseDirectories = (dirPath: string) => {
    // Read all items in the directory
    const items = fs.readdirSync(dirPath);

    items.forEach((item) => {
        const itemPath = path.join(dirPath, item);

        // Check if the item is a directory
        if (fs.statSync(itemPath).isDirectory()) {
            traverseDirectories(itemPath); // Recursively traverse subdirectories
        } else if (item === "index.ts") {
            // Check if the file is "index.ts" and contains the "// @barrel" comment
            const content = fs.readFileSync(itemPath, "utf8");
            if (content.includes("// @barrel")) {
                console.log(`Processing barrel file: ${itemPath}`);

                // Read all TypeScript files in the current directory (excluding "index.ts")
                const files = fs.readdirSync(dirPath)
                    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

                // Generate export statements for each file
                const exportStatements = files
                    .map((file) => `export * from "./${file.replace(".ts", "")}";`)
                    .join("\n");

                // Write the export statements to the "index.ts" file
                fs.writeFileSync(itemPath, `\n// @barrel\n\n${exportStatements}\n`, "utf8");

                console.log(`Barrel file updated successfully at: ${itemPath}`);
            } else {
                console.log(`Skipping: ${itemPath} (no // @barrel comment)`);
            }
        }
    });
};

// Start traversal for each base path
paths.forEach((basePath) => {
    if (fs.existsSync(basePath)) {
        traverseDirectories(basePath);
    } else {
        console.error(`Directory does not exist: ${basePath}`);
    }
});
