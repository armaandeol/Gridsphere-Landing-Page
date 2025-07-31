import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xblkkznw");
    if (state.succeeded) {
        return (
            <section className="bg-white">
                <div className="py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-6 text-4xl font-extrabold text-center text-black">Contact Us</h2>
                    <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-8 flex justify-center items-center min-h-[200px]">
                        <p className="text-xl text-black text-center">Thanks for reaching out! We'll get back to you soon.</p>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className="bg-white">
            <div className="py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-6 text-4xl font-extrabold text-center text-black">Contact Us</h2>
                <p className="mb-10 text-center text-black text-lg font-normal">
                    Have questions about our smart farming solutions? Need help with our platform or want to collaborate? Reach out — we’re here to support your journey toward sustainable, tech-driven agriculture.
                </p>

                <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@gmail.com"
                                required
                                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full p-3 focus:ring-black focus:border-black"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Your message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Leave a message..."
                                required
                                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full p-3 focus:ring-black focus:border-black"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <button
                                type="submit"
                                className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-all"
                                disabled={state.submitting}
                            >
                                {state.submitting ? "Sending..." : "Send message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}