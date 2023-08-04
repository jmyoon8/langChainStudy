import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const pdfLoaderHandler = async () => {
  const loader = new PDFLoader("src/document_loaders/example_data/example.pdf");

  const docs = await loader.load();
  console.log(docs);
};
export { pdfLoaderHandler };
