"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

/**
 * ExpandableImage Component
 * 
 * A wrapper around Next.js Image that allows users to click and view 
 * the image in a full-screen modal/lightbox.
 */
export default function ExpandableImage(props: ImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Disable scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div 
        className="relative group cursor-zoom-in overflow-hidden"
        onClick={toggleExpand}
      >
        <Image 
          {...props} 
          alt={props.alt || "Product image"}
          // Ensure className is merged properly
          className={`${props.className || ""} transition-transform duration-500 group-hover:scale-105`}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-300">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Full-screen Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 md:p-12 transition-all duration-300 animate-in fade-in"
          onClick={toggleExpand}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-[10000] text-white/50 hover:text-white transition-all duration-200 hover:rotate-90 p-2"
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            aria-label="Close image"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={props.src}
              alt={props.alt || "Expanded image"}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              quality={100}
            />
          </div>
          
          {/* Caption */}
          {props.alt && (
            <div className="absolute bottom-8 left-0 right-0 text-center px-6 animate-in slide-in-from-bottom-4 duration-500">
              <p className="inline-block bg-white/10 backdrop-blur-md text-white/90 text-sm px-4 py-2 rounded-full border border-white/10">
                {props.alt}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
