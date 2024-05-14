import * as fs from "fs/promises"

async function cat(path){
  try {
    let content = await fs.readFile(path, "utf8");
    console.log("file content: ", content);
  }
  catch(err){
    console.log("File not found!");
    process.exit(1);
  }
}

const argv = process.argv;
await cat(argv[2]);

export { cat };