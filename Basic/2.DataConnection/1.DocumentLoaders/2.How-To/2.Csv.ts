import { CSVLoader } from "langchain/document_loaders/fs/csv";

const getExampleCsvHandler = async () => {
  const loader = new CSVLoader("src/document_loaders/example_data/example.csv");

  const getExampleCsv = await loader.load();
  console.log(getExampleCsv);
};

const getExampleSlngleColumnCsv = async () => {
  const loader = new CSVLoader(
    "src/document_loaders/example_data/example.csv",
    "text"
  );

  const getSingleColumn = await loader.load();
  console.log(getSingleColumn);
};

export { getExampleCsvHandler, getExampleSlngleColumnCsv };
/*
[
  Document {
    "metadata": {
      "line": 1,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "This is a sentence.",
  },
  Document {
    "metadata": {
      "line": 2,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "This is another sentence.",
  },
]
*/
