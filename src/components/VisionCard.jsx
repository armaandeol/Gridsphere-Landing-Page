"use client";

export function VisionCard({ title, text, bgImage, hoverImage }) {

    return (
        <div className="max-w-xs w-full">
            <div
                className={`
          group w-full cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl
          mx-auto flex flex-col justify-end p-6 border border-neutral-800
          transition-all duration-500 bg-[#4A5F33]
        `}
            >
                {/* Hover Background Image */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cover bg-center transition-opacity duration-500 z-0"
                    style={{ backgroundImage: `url(${hoverImage})` }}
                />

                {/* Optional dark overlay for smooth hover */}
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/30 transition-all" />

                {/* Text Content */}
                <div className="relative z-20 text-white">
                    <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
                    <p className="text-base mt-2">{text}</p>
                </div>
            </div>
        </div>
    );
}