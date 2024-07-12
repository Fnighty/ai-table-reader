# AI Table Reader

AI Table Reader is a web application built with Next.js that allows users to upload images, detect table structures within those images, and extract table data using Tesseract.js for OCR and OpenCV.js for image processing.

## Features

-   **Image Upload**: Users can upload images containing tables.
-   **Table Detection**: Uses OpenCV.js to detect table structures within the image.
-   **Text Extraction**: Uses Tesseract.js to extract text from the detected tables.
-   **Table Display**: Extracted table data is displayed in a HTML table format.

## Technologies Used

-   [Next.js](https://nextjs.org/): React framework for building server-side rendered applications.
-   [Tesseract.js](https://tesseract.projectnaptha.com/): JavaScript OCR library.
-   [OpenCV.js](https://docs.opencv.org/4.5.5/opencv.js): JavaScript version of OpenCV for image processing.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/download/) installed.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Fnighty/ai-table-reader.git
    cd ai-table-reader
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

## Usage

1. **Upload an Image:**

    On the homepage, click the "Choose File" button and upload an image containing a table.

2. **Process the Image:**

    The application will automatically process the image to detect table structures and extract text.

3. **View Extracted Table Data:**

    Extracted table data will be displayed in a HTML table format below the uploaded image.

## Project Structure

The project structure is organized as follows:

-   **`README.md`**: Project overview and instructions.
-   **`app/page.tsx`**: Main HTML file for the application.
-   **`app/globals.css`**: CSS file for styling the application.
-   **`components/ImageUpload.js`**: JavaScript file for handling image upload and processing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
