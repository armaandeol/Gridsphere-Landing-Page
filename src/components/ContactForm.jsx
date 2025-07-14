export default function ContactForm() {
    return (
        <section className="bg-[#606c38]">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-[#F8D794]">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Have questions about our smart farming solutions? Need help with our platform or want to collaborate? Reach out — we’re here to support your journey toward sustainable, tech-driven agriculture.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-black ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-[#f7f1e4] border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-black">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-[#f7f1e4] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#16262e] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    );
}