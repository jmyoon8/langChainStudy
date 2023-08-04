import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const pdfLoaderHandler = async () => {
  const loader = new PDFLoader("src/document_loaders/example_data/example.pdf");
  const docs = await loader.load();
  console.log(docs);
};

const noSplitPdfLoaderHandler = async () => {
  const loader = new PDFLoader(
    "src/document_loaders/example_data/example.pdf",
    {
      splitPages: false,
    }
  );
  const docs = await loader.load();
  console.log(docs);
};

const pdfJsHandler = async () => {
  // 예제대로 헀는데 안됨..
  const loader = new PDFLoader(
    "src/document_loaders/example_data/example.pdf",
    {
      // you may need to add `.then(m => m.default)` to the end of the import
      pdfjs: () => import("pdfjs-dist/legacy/build/pdf.js"),
    }
  );
  const docs = await loader.load();
  console.log(docs);
};

export { pdfLoaderHandler, noSplitPdfLoaderHandler, pdfJsHandler };
