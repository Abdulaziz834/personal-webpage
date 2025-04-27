import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function About() {
    return (
        <main className="py-12 w-4/5 mx-auto">
            <section>
                <h4 className="font-medium italic">Nice to meet you!</h4>
                <h2 className="text-3xl font-bold">Welcome to...</h2>
            </section>
            <section className="flex gap-4 mt-12 justify-between">
                <article className="flex flex-col items-center gap-2">
                    <div className="profile-pic w-[20vw] aspect-square bg-neutral-300"></div>
                    <h1 className="mt-8 text-2xl font-extrabold">
                        Abdulaziz Abdullayev
                    </h1>
                    <h3 className="text-lg">
                        <span className="font-medium italic">
                            Travel Blogger
                        </span>{" "}
                        from Tashkent
                    </h3>
                </article>
                <article>
                    <div className="info-table grid gap-3 gap-x-8 grid-cols-2 pb-8 border-b border-neutral-300 text-sm">
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

                        <p className="flex items-center gap-2 font-medium max-lg:justify-center">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="20"
                                    fill="#141313"
                                    fillOpacity="0.05"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.5837 19.8793L19.9993 25.7917L16.415 19.8793C14.6764 17.0117 16.6964 13.309 19.9993 13.309C23.3023 13.309 25.3223 17.0117 23.5837 19.8793ZM15.0473 20.7438C12.6454 16.782 15.4361 11.6666 19.9993 11.6666C24.5626 11.6666 27.3533 16.782 24.9514 20.7438L20.5349 28.0287C20.2887 28.4348 19.71 28.4348 19.4638 28.0287L15.0473 20.7438ZM19.9995 15.7727C19.1112 15.7727 18.391 16.508 18.391 17.4151C18.391 18.3222 19.1112 19.0575 19.9995 19.0575C20.8879 19.0575 21.608 18.3222 21.608 17.4151C21.608 16.508 20.8879 15.7727 19.9995 15.7727Z"
                                    fill="black"
                                />
                            </svg>
                            Tashkent, Uzbekistan
                        </p>
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
                        <p className="flex items-center gap-2 font-medium max-lg:justify-center">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="20"
                                    fill="#141313"
                                    fillOpacity="0.05"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.3327 14.1667C13.3327 13.7065 13.7058 13.3334 14.166 13.3334H25.8327C26.2929 13.3334 26.666 13.7065 26.666 14.1667V25.8334C26.666 26.2937 26.2929 26.6667 25.8327 26.6667L24.9993 26.6667C24.9993 24.3656 23.1339 22.5001 20.8327 22.5001H19.166C16.8648 22.5001 14.9993 24.3656 14.9993 26.6667L14.166 26.6667C13.7058 26.6667 13.3327 26.2937 13.3327 25.8334V14.1667ZM16.666 26.6667H23.3327C23.3327 25.286 22.2134 24.1667 20.8327 24.1667H19.166C17.7853 24.1667 16.666 25.286 16.666 26.6667ZM14.166 11.6667C12.7853 11.6667 11.666 12.786 11.666 14.1667V25.8334C11.666 27.2141 12.7853 28.3334 14.166 28.3334H25.8327C27.2134 28.3334 28.3327 27.2141 28.3327 25.8334V14.1667C28.3327 12.786 27.2134 11.6667 25.8327 11.6667H14.166ZM18.3327 18.3334C18.3327 19.2539 19.0789 20.0001 19.9993 20.0001C20.9198 20.0001 21.666 19.2539 21.666 18.3334C21.666 17.4129 20.9198 16.6667 19.9993 16.6667C19.0789 16.6667 18.3327 17.4129 18.3327 18.3334ZM19.9993 15.0001C18.1584 15.0001 16.666 16.4925 16.666 18.3334C16.666 20.1744 18.1584 21.6667 19.9993 21.6667C21.8403 21.6667 23.3327 20.1744 23.3327 18.3334C23.3327 16.4925 21.8403 15.0001 19.9993 15.0001Z"
                                    fill="#141313"
                                />
                            </svg>
                            20 years old
                        </p>
                    </div>
                    <div className="card-container flex justify-between mt-8">
                        <div className="card grid grid-cols-[auto_1fr] gap-y-3 gap-x-2 items-center">
                            <h4 className="font-bold text-3xl text-blue-700">
                                4+
                            </h4>
                            <h5 className="font-medium w-min italic text-sm/tight">
                                Years of travelling...
                            </h5>
                            <p className="col-span-2 max-w-[220px] text-neutral-600">
                                Started travelling when I was 16 y.o. with my
                                parents
                            </p>
                        </div>
                        <div className="card grid grid-cols-[auto_1fr] gap-y-3 gap-x-2 items-center">
                            <h4 className="font-bold text-3xl text-blue-700">
                                103+
                            </h4>
                            <h5 className="font-medium w-min italic text-sm/tight">
                                kilometres walked on
                            </h5>
                            <p className="col-span-2 max-w-[220px] text-neutral-600">
                                But this is only beginning, stay tuned
                            </p>
                        </div>
                    </div>
                    <article className="mt-10 p-5 bg-neutral-950 text-neutral-100 flex gap-3 max-w-[50ch] italic">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.2">
                                <path
                                    d="M6.11077 23.0946C4.73743 21.636 4.0001 20 4.0001 17.348C4.0001 12.6813 7.2761 8.49863 12.0401 6.43063L13.2308 8.26796C8.7841 10.6733 7.91477 13.7946 7.5681 15.7626C8.2841 15.392 9.22143 15.2626 10.1401 15.348C12.5454 15.5706 14.4414 17.5453 14.4414 20C14.4414 21.2376 13.9498 22.4246 13.0746 23.2998C12.1994 24.175 11.0124 24.6666 9.77477 24.6666C8.3441 24.6666 6.9761 24.0133 6.11077 23.0946ZM19.4441 23.0946C18.0708 21.636 17.3334 20 17.3334 17.348C17.3334 12.6813 20.6094 8.49863 25.3734 6.43063L26.5641 8.26796C22.1174 10.6733 21.2481 13.7946 20.9014 15.7626C21.6174 15.392 22.5548 15.2626 23.4734 15.348C25.8788 15.5706 27.7734 17.5453 27.7734 20C27.7734 21.2376 27.2818 22.4246 26.4066 23.2998C25.5314 24.175 24.3444 24.6666 23.1068 24.6666C21.6761 24.6666 20.3081 24.0133 19.4428 23.0946L19.4441 23.0946Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
						"The world is a book, and those who don't travel read only one page."
                    </article>
                </article>
            </section>
			<section className="mt-8">
				<h1 className="text-3xl font-bold mb-5">Been in:</h1>
				<Carousel slides={["dubai.jpg", "miami.jpg", "s-petersburg.jpg", "venice.jpg"]} />
			</section>
        </main>
    );
}
