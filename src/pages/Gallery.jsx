import React from "react";

import gallery from '../gallery.json';

export default function Gallery() {
    return (
        <main className="py-12 w-4/5 mx-auto">
            <section>
                <h4 className="font-medium italic">Just some photo gallery for you!</h4>
                <h2 className="text-3xl font-bold">Gallery...</h2>
            </section>
            <div className="image-gallery mt-12 grid grid-cols-3 w-4/5 mx-auto gap-4">
                {gallery.map(image => {
                    return (<img src={image.imageSrc} alt="" className="w-full aspect-square object-cover" />)

                })}
            </div>
        </main>
    );
}
