// components/ImageUpload.js
import { useState } from 'react';
import Tesseract from 'tesseract.js';
import Script from 'next/script';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        processImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (imageData) => {
    const img = new Image();
    img.src = imageData;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const src = cv.imread(canvas);
      const dst = new cv.Mat();
      cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
      cv.threshold(src, src, 120, 255, cv.THRESH_BINARY);
      const contours = new cv.MatVector();
      const hierarchy = new cv.Mat();
      cv.findContours(src, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE);

      // Filter contours to detect table
      const tableContours = [];
      for (let i = 0; i < contours.size(); ++i) {
        const cnt = contours.get(i);
        const rect = cv.boundingRect(cnt);
        if (rect.width > img.width / 4 && rect.height > img.height / 4) {
          tableContours.push(rect);
        }
      }

      src.delete();
      dst.delete();
      contours.delete();
      hierarchy.delete();

      extractText(imageData, tableContours);
    };
  };

  const extractText = (imageData, tableContours) => {
    Tesseract.recognize(imageData, 'eng', { logger: (m) => console.log(m) }).then(({ data: { text } }) => {
      const lines = text.split('\n');
      const extractedTableData = lines.map(line => line.split(/\s+/).filter(word => word));
      setTableData(extractedTableData);
    });
  };

  return (
    <div>
      <h1>Upload an Image</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />}
      {tableData.length > 0 && (
        <div>
          <h2>Extracted Table Data:</h2>
          <table border="1">
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Script src="https://docs.opencv.org/4.5.5/opencv.js" strategy="beforeInteractive" />
    </div>
  );
};

export default ImageUpload;
