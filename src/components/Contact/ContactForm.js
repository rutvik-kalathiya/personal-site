/* eslint-disable no-console */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      console.log('Validation failed: empty fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Check if EmailJS is configured
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Config Check:');
      console.log('Service ID:', serviceId ? 'Set' : 'Missing');
      console.log('Template ID:', templateId ? 'Set' : 'Missing');
      console.log('Public Key:', publicKey ? 'Set' : 'Missing');

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS not configured. Missing environment variables.');
        setSubmitStatus('config-error');
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: process.env.REACT_APP_USER_EMAIL,
        message: formData.message,
        reply_to: formData.email,
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('send-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="name">{t('pages.contact.form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t('pages.contact.form.namePlaceholder')}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group half">
            <label htmlFor="email">{t('pages.contact.form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('pages.contact.form.emailPlaceholder')}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('pages.contact.form.message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('pages.contact.form.messagePlaceholder')}
            rows="6"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="button primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('pages.contact.form.submitting') : t('pages.contact.form.submit')}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              {t('pages.contact.form.successMessage')}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              {t('pages.contact.form.errorMessage')}
            </div>
          )}

          {submitStatus === 'config-error' && (
            <div className="status-message error">
              Email service not configured. Please check console for details.
            </div>
          )}

          {submitStatus === 'send-error' && (
            <div className="status-message error">
              Failed to send email. Please try again or contact directly.
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
