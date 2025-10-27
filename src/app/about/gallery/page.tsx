"use client";

import { useState } from "react";
import InnerPageLayout from "../../components/InnerPageLayout";
import Image from "next/image";
import { galleryImages, categories } from "@/lib/galleryData";
import { FaTimes } from "react-icons/fa";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages =
        selectedCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const openLightbox = (id: number) => {
        setSelectedImage(id);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const currentImage = galleryImages.find((img) => img.id === selectedImage);

    return (
        <InnerPageLayout section="about">

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">

                <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        <span className="text-theme-blue">Picture</span> <span className="text-red-600"> Gallery</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-normal text-justify">Photographs are about visual storytelling. In today’s media-rich environment, people often look first to images, then to words. Our picture gallery conveys UW’s most valued and distinct attributes — collaboration, spirit, competition, focus and determination, and bold energy.</p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-1 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? "bg-gradient-to-r from-blue-300 to-orange-300 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-12 ">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="break-inside-avoid group cursor-pointer"
                            onClick={() => openLightbox(image.id)}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className="w-full h-auto"
                                    loading="lazy"
                                    quality={75}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-semibold text-sm">{image.alt}</p>
                                        <p className="text-white text-xs">{image.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No images found in this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && currentImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-theme-orange transition-colors p-2"
                        aria-label="Close"
                    >
                        <FaTimes className="text-3xl" />
                    </button>
                    <div
                        className="relative max-w-5xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            width={currentImage.width}
                            height={currentImage.height}
                            className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                            quality={90}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-white font-bold text-xl mb-1">{currentImage.alt}</h3>
                            <p className="text-yellow-300 text-sm">{currentImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </InnerPageLayout>
    );
}
