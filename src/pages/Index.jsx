import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <main className="max-lg:py-12 flex items-center justify-evenly lg:flex-row-reverse flex-col">
            <div className="profile-pic w-[30vw] aspect-square bg-neutral-300"></div>

            <div className="info-box max-lg:mt-6 flex flex-col gap-2 lg:items-start items-center">
                <h1 className="uppercase text-[4vw] lg:text-[3vw]/snug lg:w-min">
                    <span className="max-lg:hidden">my name is</span>{" "}
                    <span className="font-bold">Abdullayev Abdulaziz</span>
                </h1>
                <h3 className="text-[2vw]">
                    <span className="font-medium italic">Travel Blogger</span>{" "}
                    from Tashkent
                </h3>
                <button
                    type="button"
                    role="link"
                    className="md:px-8 md:py-4 px-6 py-3 bg-neutral-950 text-white mt-5 cursor-pointer hover:bg-neutral-700"
                >
                    Let's talk with me
                </button>
                <div className="visual-row mt-8 grid gap-3 text-sm">
                    <Link
                        className="flex items-center gap-2 font-medium max-lg:justify-center"
                        to={"tel:+998901235076"}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="16"
                                cy="16"
                                r="16"
                                fill="#141313"
                                fillOpacity="0.05"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.4327 10.0034C11.9444 8.49172 14.3954 8.49172 15.9071 10.0034C17.4188 11.5151 17.4188 13.9661 15.9071 15.4778C15.3444 16.0405 14.6516 16.3937 13.9255 16.5375L16.0639 18.6759C16.2077 17.9498 16.5609 17.257 17.1236 16.6943C18.6353 15.1826 21.0863 15.1826 22.598 16.6943C24.1097 18.206 24.1097 20.657 22.598 22.1687C21.1891 23.5776 18.9643 23.6734 17.4445 22.4561L17.4278 22.4728L17.1236 22.1687L10.4327 15.4778L10.1286 15.1737L10.1453 15.157C8.92802 13.6371 9.02383 11.4123 10.4327 10.0034ZM18.3402 20.9522C19.18 21.792 20.5416 21.792 21.3815 20.9522C22.2213 20.1123 22.2213 18.7507 21.3815 17.9109C20.5416 17.071 19.18 17.071 18.3402 17.9109C17.5003 18.7507 17.5003 20.1123 18.3402 20.9522ZM14.6906 14.2613C13.8507 15.1011 12.4891 15.1011 11.6493 14.2613C10.8094 13.4214 10.8094 12.0598 11.6493 11.22C12.4891 10.3801 13.8507 10.3801 14.6906 11.22C15.5304 12.0598 15.5304 13.4214 14.6906 14.2613Z"
                                fill="#141313"
                            />
                        </svg>
                        +998 (90) 123-50-76
                    </Link>
                    <Link
                        className="flex items-center gap-2 font-medium max-lg:justify-center"
                        to={"mailto:abdullaevabdulaziz843@gmail.com"}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="16"
                                cy="16"
                                r="16"
                                fill="#141313"
                                fillOpacity="0.05"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.4947 9.63452C9.06946 9.63452 7.91406 10.7899 7.91406 12.2152V20.8173C7.91406 22.2426 9.06946 23.398 10.4947 23.398H22.5377C23.963 23.398 25.1184 22.2426 25.1184 20.8173V12.2152C25.1184 10.7899 23.963 9.63452 22.5377 9.63452H10.4947ZM9.71304 11.8555C9.84921 11.5601 10.148 11.355 10.4947 11.355H22.5377C22.8844 11.355 23.1832 11.5601 23.3194 11.8555L17.0443 16.7361C16.7337 16.9777 16.2987 16.9777 15.9881 16.7361L9.71304 11.8555ZM9.63449 13.974V18.9807L12.7421 16.391L9.63449 13.974ZM9.7058 21.1608C9.83841 21.4649 10.1417 21.6775 10.4947 21.6775H22.5377C22.8907 21.6775 23.194 21.4649 23.3266 21.1608L18.9003 17.4722L18.1006 18.0942C17.1687 18.819 15.8637 18.819 14.9319 18.0942L14.1321 17.4722L9.7058 21.1608ZM23.3979 18.9807V13.974L20.2903 16.391L23.3979 18.9807Z"
                                fill="#141313"
                            />
                        </svg>
                        abdulaziz843@gmail.com
                    </Link>
                </div>
            </div>
        </main>
    );
}
