'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log('EmailJS result:', result.text);
          setIsSuccess(true);
          setStateMessage('✅ Message sent successfully!');
          form.reset(); // ✅ clear fields right away
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setIsSuccess(false);
          setStateMessage('❌ Something went wrong. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStateMessage(null), 5000);
      });
  };

  return (
    <form onSubmit={sendEmail} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="user_name" className="block text-primary font-medium mb-2">
          Name
        </label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-primary font-medium mb-2">
          Email
        </label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-primary font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-vertical"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary-dark transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send'}
      </button>

      {/* Animated success/error message */}
      <AnimatePresence>
        {stateMessage && (
          <motion.p
            key="state-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`text-center font-medium mt-4 ${
              isSuccess ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {stateMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

ContactForm.displayName = 'ContactForm';
export default ContactForm;
