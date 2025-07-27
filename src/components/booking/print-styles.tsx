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
          padding: 15mm;
          box-sizing: border-box;
          font-size: 10pt;
          line-height: 1.3;
        }
        
        @page {
          size: A4;
          margin: 15mm;
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
          margin-bottom: 6pt;
        }
        
        .print-header {
          display: flex;
          align-items: center;
          margin-bottom: 15pt;
          padding-bottom: 10pt;
          border-bottom: 1pt solid #ccc;
        }
        
        .print-logo {
          width: 40pt;
          height: 40pt;
          margin-right: 15pt;
        }
        
        .print-company-info h1 {
          font-size: 14pt;
          margin: 0;
          color: #005F72;
        }
        
        .print-company-info p {
          font-size: 9pt;
          margin: 2pt 0;
          color: #666;
        }
        
        .print-section {
          margin-bottom: 10pt;
        }
        
        .print-section h3 {
          font-size: 11pt;
          margin-bottom: 4pt;
          color: #005F72;
        }
        
        .print-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10pt;
          margin-bottom: 8pt;
        }
        
        .print-info-item {
          border: 1pt solid #eee;
          padding: 6pt;
          border-radius: 3pt;
        }
        
        .print-info-label {
          font-weight: bold;
          font-size: 9pt;
          color: #666;
          margin-bottom: 2pt;
        }
        
        .print-info-value {
          font-size: 10pt;
          color: #333;
        }
        
        .print-footer {
          margin-top: 15pt;
          padding-top: 10pt;
          border-top: 1pt solid #ccc;
          font-size: 8pt;
          color: #666;
          text-align: center;
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