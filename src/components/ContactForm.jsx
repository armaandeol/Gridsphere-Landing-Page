export default function ContactForm() {
    return (
        <section className="bg-white">
            <div className="py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-6 text-4xl font-extrabold text-center text-black">Contact Us</h2>
                <p className="mb-10 text-center text-black text-lg font-normal">
                    Have questions about our smart farming solutions? Need help with our platform or want to collaborate? Reach out — we’re here to support your journey toward sustainable, tech-driven agriculture.
                </p>

                <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-8">
                    <form action="#" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@gmail.com"
                                required
                                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full p-3 focus:ring-black focus:border-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Your message</label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Leave a message..."
                                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full p-3 focus:ring-black focus:border-black"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-all"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}