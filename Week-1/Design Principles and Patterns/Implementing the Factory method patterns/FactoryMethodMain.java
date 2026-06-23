public class FactoryMethodMain {

    interface Document {
        void open();
        void save();
        void close();
    }

    static class WordDocument implements Document {
        public void open()  { System.out.println("Hey! Opening your Word document..."); }
        public void save()  { System.out.println("Got it! Saving your Word document.");  }
        public void close() { System.out.println("Done! Closing your Word document.\n"); }
    }

    static class PdfDocument implements Document {
        public void open()  { System.out.println("Hey! Opening your PDF document..."); }
        public void save()  { System.out.println("Got it! Saving your PDF document.");  }
        public void close() { System.out.println("Done! Closing your PDF document.\n"); }
    }

    static class ExcelDocument implements Document {
        public void open()  { System.out.println("Hey! Opening your Excel document..."); }
        public void save()  { System.out.println("Got it! Saving your Excel document.");  }
        public void close() { System.out.println("Done! Closing your Excel document.\n"); }
    }

    static abstract class DocumentFactory {
        public abstract Document createDocument();
    }

    static class WordFactory extends DocumentFactory {
        public Document createDocument() { return new WordDocument(); }
    }

    static class PdfFactory extends DocumentFactory {
        public Document createDocument() { return new PdfDocument(); }
    }

    static class ExcelFactory extends DocumentFactory {
        public Document createDocument() { return new ExcelDocument(); }
    }

    public static void main(String[] args) {
        System.out.println("Welcome to the Document Management System!");
        System.out.println("Let's work with some documents...\n");

        DocumentFactory[] factories = { new WordFactory(), new PdfFactory(), new ExcelFactory() };

        for (DocumentFactory factory : factories) {
            Document doc = factory.createDocument();
            doc.open();
            doc.save();
            doc.close();
        }

        System.out.println("All documents handled successfully. Have a great day!");
    }
}
