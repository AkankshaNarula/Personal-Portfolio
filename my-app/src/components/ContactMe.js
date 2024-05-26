import React, { useState } from 'react';

  export default function EnhancedContactForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validate = () => {
      const errors = {};
      if (!formData.firstName) errors.firstName = 'First Name is required';
      if (!formData.lastName) errors.lastName = 'Last Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.message) errors.message = 'Message is required';
      return errors;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      setIsSubmitting(true);
      setErrors({});
  
      try {
        // Simulate form submission (replace with your submission logic)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitSuccess(true);
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors({ submit: 'Something went wrong. Please try again later.' });
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <section id="contactme" className="min-h-screen p-8">
      <form className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold leading-7">Contact Me</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Fill in the form below to send me a message.
            </p>
          </div>
  
          {submitSuccess && (
            <div className="bg-green-100 text-green-800 p-3 rounded-md">
              Your message has been sent successfully!
            </div>
          )}
  
          {errors.submit && (
            <div className="bg-red-100 text-red-800 p-3 rounded-md">
              {errors.submit}
            </div>
          )}
  
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.firstName ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-300'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
          </div>
  
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.lastName ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-300'
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.email ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.message ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-300'
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          </div>
  
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isSubmitting ? 'cursor-not-allowed' : 'hover:bg-indigo-500'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    );
  </section>
  )}
  