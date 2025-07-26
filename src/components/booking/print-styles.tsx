import { useEffect } from 'react';

export function usePrintStyles() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        
        .print-area, .print-area * {
          visibility: visible;
        }
        
        .print-area {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          max-width: 210mm;
          margin: 0;
          padding: 20mm;
          box-sizing: border-box;
          font-size: 12pt;
          line-height: 1.4;
        }
        
        @page {
          size: A4;
          margin: 20mm;
        }
        
        .no-print {
          display: none !important;
        }
        
        .print-break {
          page-break-before: always;
        }
        
        .print-avoid-break {
          page-break-inside: avoid;
        }
        
        h1, h2, h3, h4 {
          margin-top: 0;
          margin-bottom: 8pt;
        }
        
        p, div {
          margin-bottom: 4pt;
        }
        
        .print-header {
          text-align: center;
          margin-bottom: 20pt;
          border-bottom: 2pt solid #005F72;
          padding-bottom: 10pt;
        }
        
        .print-section {
          margin-bottom: 15pt;
          padding: 10pt;
          border: 1pt solid #e5e5e5;
          border-radius: 5pt;
        }
        
        .print-two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15pt;
        }
        
        .print-highlight {
          background-color: #f0f8fa !important;
          padding: 8pt;
          border-radius: 3pt;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
}