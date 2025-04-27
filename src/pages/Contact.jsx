import React from 'react'

export default function Contact() {
  return (
    <main className="flex w-4/5 mx-auto items-center gap-8">
        <article className='grid gap-4'>

        <h3 className="font-medium italic">Contact</h3>
        <h1 className="uppercase text-3xl font-bold">Reach out me</h1>
        <p className='text-neutral-700 mt-10'>Beshqayrag'och St., 3, Uchtepa District, Tashkent city, Uzbekistan</p>
        </article>
        <article className="flex-1 grid gap-8 justify-items-start basis-2/3 px-12 py-10 bg-blue-700 text-white">
            <h1 className="text-3xl uppercase font-bold">Suggest me to visit:</h1>
            <div className="input-group flex gap-8">
                <div className="input-form border-b border-white">
                    <input type="text" name="full-name" id="name" placeholder='YOUR FULL NAME...' className='outline-none pb-2' />
                </div>
                <div className="input-form border-b border-white">
                    <input type="email" name="email" id="email" placeholder='YOUR EMAIL...' className='outline-none pb-2' />
                </div>
            </div>
            <textarea name="messsage" rows={3} className='w-full outline-none border-b border-white resize-none' placeholder='MESSAGE'></textarea>
            <button
                    type="button"
                    role="link"
                    className="md:px-8 md:py-4 px-6 py-3 bg-neutral-950 text-white mt-5 cursor-pointer hover:bg-neutral-700"
                >
                    Submit now
                </button>
        </article>
    </main>
  )
}
