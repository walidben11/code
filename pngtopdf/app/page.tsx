'use client';

import { useState, useEffect } from 'react';
import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { Button } from '@/components/shared/ui/button';
import { colors } from '@/data/config/colors';
import { PDFDocument } from 'pdf-lib';

export default function Component() {
  const avatarItems = [
    {
      imageSrc: 'https://picsum.photos/id/64/100/100',
      name: 'John Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/65/100/100',
      name: 'Jane Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/669/100/100',
      name: 'Alice Doe',
    },
  ];

  const testimonialItems = [
    {
      name: 'Mathew',
      text: 'Converted my PNGs to PDF in seconds—so fast and easy!',
      handle: '@heymatt_oo',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    },
    {
      name: 'Joshua',
      text: 'Super simple to use. Uploaded my images, clicked convert, and done!',
      handle: '@joshua',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    },
    {
      name: 'Parl Coppa',
      text: 'I sent the link to my team, and they converted dozens of files effortlessly. Amazing tool!',
      handle: '@coppalipse',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      featured: true,
    },
    {
      name: 'Mandy',
      text: 'Love how quick and reliable this PNG-to-PDF converter is. Saved me so much time!',
      handle: '@mandy',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
    },
    {
      name: 'Alex',
      text: 'Found this while searching for a free converter. It’s straightforward and works perfectly!',
      handle: '@alex',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    },
    {
      name: 'Sam',
      text: 'Tried a few tools before this one. ConvertPNGtoPDF is by far the easiest and most intuitive.',
      handle: '@sama',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
    },
    {
      name: 'Lydia',
      text: 'As a student, I needed to convert lecture slides to PDF. This tool made it so easy and fast!',
      handle: '@lydiawrites',
      imageSrc: 'https://picsum.photos/100/100.webp?random=7',
    },
    {
      name: 'Ethan',
      text: 'I used it on my phone while traveling—worked flawlessly. Best PNG-to-PDF tool out there!',
      handle: '@ethan_travels',
      imageSrc: 'https://picsum.photos/100/100.webp?random=8',
    },
    {
      name: 'Sophie',
      text: 'This converter saved my presentation prep. Uploaded 15 PNGs, and got a single PDF in no time!',
      handle: '@sophie_designs',
      imageSrc: 'https://picsum.photos/100/100.webp?random=9',
    },
    {
      name: 'Noah',
      text: 'No downloads, no hassle—just a clean, free tool that works every time. Highly recommend!',
      handle: '@noah_codes',
      imageSrc: 'https://picsum.photos/100/100.webp?random=10',
    },
  ];

  const faqItems = [
    {
      question: "How to convert PNG to PDF online for free?",
      answer:
        "With ConvertPNGtoPDF, you can easily convert PNG to PDF online for free. Just upload your PNG files, click 'Convert to PDF,' and download your PDF in seconds using our PNG to PDF converter—no software or signup required.",
    },
    {
      question: "How can I convert PNG to PDF quickly?",
      answer:
        "ConvertPNGtoPDF makes it simple to convert PNG to PDF quickly online. Upload your PNG images, click 'Convert to PDF,' and get your PDF in seconds with our fast and free PNG to PDF converter tool.",
    },
    {
      question: "Can I combine multiple PNG images into one PDF file?",
      answer:
        "Yes, our free PNG to PDF converter lets you combine multiple PNG images into a single PDF. Upload up to 20 PNG files at once, and they’ll be merged into one PDF in the order you uploaded them using our PNG to PDF conversion tool.",
    },
    {
      question: "How do I convert multiple PNGs into separate PDF files?",
      answer:
        "To convert multiple PNGs into separate PDFs, upload your files using our PNG to PDF converter and download each PDF individually. Repeat the process for up to 20 files at a time, making it quick and easy with our online tool.",
    },
    {
      question: "What if I have more than 20 PNG files to convert into one PDF?",
      answer:
        "If you have more than 20 PNG files, convert them in batches of 20 using our PNG to PDF converter. Then, use a PDF combiner to merge the resulting PDFs into a single master file for easy sharing.",
    },
    {
      question: "Is it safe to use ConvertPNGtoPDF for converting PNG to PDF online?",
      answer:
        "Absolutely, ConvertPNGtoPDF is a secure PNG to PDF converter. We automatically delete all uploaded files and converted PDFs from our servers after one hour to protect your privacy during PNG to PDF conversion.",
    },
    {
      question: "Does this PNG to PDF converter work on mobile devices?",
      answer:
        "Yes, our free PNG to PDF converter is fully responsive and works seamlessly on mobile devices, tablets, and desktops. Convert PNG to PDF online from anywhere using any browser with our mobile-friendly tool.",
    },
    {
      question: "How fast is the PNG to PDF conversion process?",
      answer:
        "Converting PNG to PDF online with ConvertPNGtoPDF is quick, often taking just a few seconds per file. The speed of our PNG to PDF converter depends on your file size and internet connection.",
    },
    {
      question: "Do I need to install software to use this PNG to PDF tool?",
      answer:
        "No software installation is needed for PNG to PDF conversion. ConvertPNGtoPDF is a 100% online PNG to PDF converter, letting you transform your files directly in your browser without any downloads.",
    },
  ];

  const Converter = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [converting, setConverting] = useState(false);

    useEffect(() => {
      previews.forEach(url => URL.revokeObjectURL(url));
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews(newPreviews);
      return () => {
        newPreviews.forEach(url => URL.revokeObjectURL(url));
      };
    }, [files, previews]);

    // Define supported image formats
    const supportedFormats = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/webp',
      'image/gif',
    ];

    // Function to convert an image to PNG using Canvas
    const convertToPng = async (file: File): Promise<Blob> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.src = url;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            blob => {
              URL.revokeObjectURL(url);
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Could not convert image to PNG'));
              }
            },
            'image/png'
          );
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error('Could not load image'));
        };
      });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []).filter(file =>
        supportedFormats.includes(file.type)
      );
      if (selectedFiles.length === 0) {
        setError('Please upload a supported image file (PNG, JPG, JPEG, WEBP, or GIF).');
        return;
      }
      setFiles(selectedFiles);
      setError(null);
      setPdfUrl(null);
      setConverting(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFiles = Array.from(e.dataTransfer.files).filter(file =>
        supportedFormats.includes(file.type)
      );
      if (droppedFiles.length === 0) {
        setError('Please drop a supported image file (PNG, JPG, JPEG, WEBP, or GIF).');
        return;
      }
      setFiles(droppedFiles);
      setError(null);
      setPdfUrl(null);
      setConverting(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
    };

    const convertToPdf = async () => {
      setConverting(true);
      setError(null);
      setPdfUrl(null);

      try {
        const pdfDoc = await PDFDocument.create();

        for (const file of files) {
          let arrayBuffer = await file.arrayBuffer();
          let image;

          if (file.type === 'image/png') {
            image = await pdfDoc.embedPng(arrayBuffer);
          } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
            image = await pdfDoc.embedJpg(arrayBuffer);
          } else {
            // Convert WEBP, GIF, etc. to PNG
            const pngBlob = await convertToPng(file);
            arrayBuffer = await pngBlob.arrayBuffer();
            image = await pdfDoc.embedPng(arrayBuffer);
          }

          const page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        }

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (err) {
        setError('Failed to convert files to PDF. Please try again.');
        console.error(err);
      } finally {
        setConverting(false);
      }
    };

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);
    };

    const clearQueue = () => {
      setFiles([]);
      setPreviews([]);
      setPdfUrl(null);
      setError(null);
      setConverting(false);
    };

    return (
      <div id="convert" className="w-full max-w-3xl mx-auto mt-10 p-4 sm:p-6 md:p-10 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-100/30 shadow-2xl">
        <div
          className={`relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] p-6 sm:p-8 md:p-12 rounded-xl transition-all duration-500 ${
            isDragging
              ? 'bg-blue-50/70 border-blue-400 scale-105 shadow-lg'
              : 'bg-gradient-to-br from-gray-50/80 to-gray-100/80 border-gray-200 shadow-md'
          } border-2 border-dashed text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/70 hover:scale-102 transform-gpu hover:shadow-lg overflow-hidden`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 pointer-events-none" />
          <div className="absolute inset-0 rounded-xl shadow-inner shadow-gray-200/50 pointer-events-none" />

          <label htmlFor="file-upload" className="cursor-pointer relative z-10">
            <div className="relative mx-auto h-16 sm:h-20 w-16 sm:w-20 mb-4 sm:mb-6">
              <svg
                className={`h-full w-full ${
                  isDragging ? 'text-blue-500 animate-pulse' : 'text-gray-400'
                } transition-colors duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              {isDragging && (
                <div className="absolute inset-0 rounded-full bg-blue-200/40 blur-xl animate-pulse" />
              )}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
              {files.length > 0
                ? `${files.length} Image(s) Ready to Convert`
                : 'Upload Your Images Here'}
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-3">
              {files.length > 0
                ? 'Files selected. Ready to convert to PDF!'
                : 'Drag & drop your images (PNG, JPG, JPEG, WEBP, GIF) or click to browse'}
            </p>
            <input
              id="file-upload"
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-4 sm:mt-6 rounded-lg bg-gray-50/50 p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-48 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative group w-20 sm:w-24 h-20 sm:h-24 rounded-lg bg-white/80 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previews[index]}
                    alt={file.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => removeFile(index)}
                      className="text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transform scale-90 group-hover:scale-100 transition-all duration-300"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800/80 text-white text-xs p-1 truncate text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {file.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <p className="text-red-500 mt-4 text-center text-sm font-medium">{error}</p>
        )}

        {converting && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full animate-progress"
                style={{ width: '100%' }}
              />
            </div>
            <p className="text-gray-600 text-sm text-center mt-2">Converting...</p>
          </div>
        )}

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-4">
          <Button
            onClick={clearQueue}
            disabled={files.length === 0}
            className={`w-full sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 font-semibold text-base sm:text-lg ${
              files.length === 0
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600'
            }`}
          >
            <ClearIcon className="w-4 sm:w-5 h-4 sm:h-5" />
            Clear Queue
          </Button>
          {(!pdfUrl || converting) && (
            <Button
              onClick={convertToPdf}
              disabled={files.length === 0 || converting}
              className={`w-full sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 font-semibold text-base sm:text-lg ${
                files.length === 0 || converting
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600'
              }`}
            >
              <ConvertIcon className="w-4 sm:w-5 h-4 sm:h-5" />
              Convert to PDF
            </Button>
          )}
        </div>

        {pdfUrl && !converting && (
          <Button
            asChild
            className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 font-semibold text-base sm:text-lg"
          >
            <a href={pdfUrl} download="converted.pdf">
              <DownloadIcon className="w-4 sm:w-5 h-4 sm:h-5" />
              Download Your PDF
            </a>
          </Button>
        )}
      </div>
    );
  };

  return (
    <>
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <UploadIcon className="w-6 h-6 mr-2" />
        <LandingSocialProofBandItem>
          Trusted by thousands of users
        </LandingSocialProofBandItem>
        <LandingSocialProofBandItem>
          Instant conversions
        </LandingSocialProofBandItem>
        <LandingSocialProofBandItem graphic="rating">
          98% user satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <LandingPrimaryVideoCtaSection
        title="Convert PNG to PDF Online Free - Easy PNG to PDF Converter"
        description="Learn how to convert PNG to PDF online for free with ConvertPNGtoPDF. Our easy PNG to PDF converter lets you transform images into PDFs in seconds—no software needed!"
        autoPlay={false}
        controls={false}
        textPosition="center"
        videoPosition="center"
        withBackground
        variant="secondary"
        leadingComponent={
          <p className="font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-blue-500 via-blue-400 to-blue-500">
            Fast & Simple PNG-to-PDF Conversion
          </p>
        }
      >
        
        <Converter />
      </LandingPrimaryVideoCtaSection>

      

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions About PNG to PDF Conversion"
        description="Got questions about converting PNGs to PDFs? Find quick answers below to help you use our PNG to PDF converter effectively."
        faqItems={faqItems}
        withBackground
      />

      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:${colors.primary.dark};stop-opacity:0.1"/><stop offset="54.99%" style="stop-color:${colors.primary.darker};stop-opacity:0.1"/><stop offset="100%" style="stop-color:${colors.secondary.darker};stop-opacity:0.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
          )}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
    </>
  );
}

const UploadIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const ConvertIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7h12m0 0l-4-4m4 4l-4 4m-12 4H4m0 0l4-4m-4 4l4 4"
    />
  </svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const ClearIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);