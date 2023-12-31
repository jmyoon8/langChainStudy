import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import {
  JSONLoader,
  JSONLinesLoader,
} from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";

const loader = new DirectoryLoader(
  "src/document_loaders/example_data/example",
  {
    ".json": (path) => new JSONLoader(path),
    // ".jsonl": (path) => new JSONLinesLoader(path, "/html"),
    ".txt": (path) => new TextLoader(path),
    ".csv": (path) => new CSVLoader(path),
  }
);
const fileDerectoryData = await loader.load();

export { fileDerectoryData };
