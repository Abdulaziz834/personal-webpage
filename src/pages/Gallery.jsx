import React, { useRef } from "react";

import gallery from '../gallery.json';

export default function Gallery() {

    const dialogRef = useRef(null);
    const imageDialogRef = useRef(null)


    function openGalleryPicture(pictureId) {
        const selectedImage = gallery.find((img) => img.id === pictureId)
        imageDialogRef.current.src = selectedImage.imageSrc;
        dialogRef.current.showModal()
    }

    function closeOutsideDialog(e) {
        if (e.target.tagName !== "IMG") {
            dialogRef.current.close()
        }
        
    }

    return (
        <main className="py-12 w-4/5 mx-auto">
            <section>
                <h4 className="font-medium italic">Just some photo gallery for you!</h4>
                <h2 className="text-3xl font-bold">Gallery...</h2>
            </section>
            <div className="image-gallery mt-12 grid grid-cols-3 w-4/5 mx-auto gap-4">
                {gallery.map(image => {
                    return (
                        <div key={image.id} className="grid gap-1" onClick={() => {openGalleryPicture(image.id)}}>
                            <img src={image.imageSrc} className="w-full aspect-square object-cover" />
                            <h3>{image.name}</h3>
                        </div>
                )

                })}
            </div>
            <dialog ref={dialogRef} onClick={e => {closeOutsideDialog(e)}} className="m-auto w-[40vw] outline-none backdrop:bg-neutral-950/40">
                <img ref={imageDialogRef} className="aspect-square object-cover" />
            </dialog>
        </main>
    );
}
