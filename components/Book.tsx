"use client";
import React, { useState } from 'react';
import { EmailFormschemaType } from '@/lib/schema';
import { IEmaildetail } from '@/lib/types';
import { 

  Calendar,
  Clock,
  Mail,
  Phone,
  MessageSquare,
  Stethoscope,
  CheckCircle,
  User,
  MapPin,
  Send
} from 'lucide-react';

// TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
  options: { value: string; label: string }[];
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
}

// Custom Input Component
const Input: React.FC<InputProps> = ({ label, icon: Icon, error, className = '', ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold" style={{ color: '#4a1d4a' }}>{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5"  />
        </div>
      )}
      <input
        className={`block w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border-2 rounded-xl focus:ring-2 transition-all duration-200 ${error ? 'border-red-400' : ''} ${className}`}
        style={{
          borderColor: error ? '#f87171' : '#8b4a8b',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#4a1d4a';
          e.target.style.boxShadow = '0 0 0 2px rgba(74, 29, 74, 0.2)';
        }}
        onBlur={(e) => {
          if (!error) e.target.style.borderColor = '#8b4a8b';
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />
    </div>
    {error && <p className="text-sm text-red-600">{error}</p>}
  </div>
);

// Custom Select Component
const Select: React.FC<SelectProps> = ({ label, icon: Icon, error, options, className = '', ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold" style={{ color: '#4a1d4a' }}>{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <select
        className={`block w-full ${Icon ? 'pl-10' : 'pl-4'} pr-10 py-3 border-2 rounded-xl transition-all duration-200 appearance-none bg-white ${error ? 'border-red-400' : ''} ${className}`}
        style={{
          borderColor: error ? '#f87171' : '#8b4a8b',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#4a1d4a';
          e.target.style.boxShadow = '0 0 0 2px rgba(74, 29, 74, 0.2)';
        }}
        onBlur={(e) => {
          if (!error) e.target.style.borderColor = '#8b4a8b';
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="h-5 w-5" style={{ color: '#663366' }} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    {error && <p className="text-sm text-red-600">{error}</p>}
  </div>
);

// Custom Textarea Component
const Textarea: React.FC<TextareaProps> = ({ label, icon: Icon, error, className = '', ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold" style={{ color: '#4a1d4a' }}>{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
          <Icon className="h-5 w-5"  />
        </div>
      )}
      <textarea
        className={`block w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border-2 rounded-xl transition-all duration-200 resize-none ${error ? 'border-red-400' : ''} ${className}`}
        style={{
          borderColor: error ? '#f87171' : '#8b4a8b',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#4a1d4a';
          e.target.style.boxShadow = '0 0 0 2px rgba(74, 29, 74, 0.2)';
        }}
        onBlur={(e) => {
          if (!error) e.target.style.borderColor = '#8b4a8b';
          e.target.style.boxShadow = 'none';
        }}
        rows={4}
        {...props}
      />
    </div>
    {error && <p className="text-sm text-red-600">{error}</p>}
  </div>
);

export default function BookTestPage(
     {
    onHandleSubmit,
  }: {
    defaultEmail: IEmaildetail;
    onHandleSubmit: (data: EmailFormschemaType) => void;
  }
) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });


  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: 'digital-xray', label: 'Digital X-Ray' },
    { value: 'ct-scan', label: 'CT Scan' },
    { value: 'mri', label: 'MRI' },
    { value: 'ultrasound', label: 'Ultrasound & Doppler' },
    { value: 'mammography', label: 'Mammography' },
    { value: 'echocardiography', label: 'Echocardiography' },
    { value: 'blood-tests', label: 'Blood Tests' },
    { value: 'pathology', label: 'Pathology Services' },
    { value: 'health-checkup', label: 'Complete Health Checkup' },
    { value: 'diabetes-profile', label: 'Diabetes Profile' },
    { value: 'thyroid-profile', label: 'Thyroid Profile' },
    { value: 'cardiac-profile', label: 'Cardiac Profile' },
    { value: 'interventional', label: 'Interventional Radiology' },
    { value: 'home-collection', label: 'Home Collection' },
    { value: 'other', label: 'Other (Specify in message)' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
      onHandleSubmit(formData);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  // Get today's date for minimum date selection
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8f4ff 0%, #ede4ff 100%)' }}>
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4">
            <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
              <CheckCircle className="h-10 w-10" style={{ color: '#4a1d4a' }} />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#4a1d4a' }}>Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for booking with Mega Diagnostics. We'll contact you shortly to confirm your appointment.
            </p>
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#f8f4ff' }}>
              <p className="text-sm" style={{ color: '#663366' }}>
                For urgent queries, call us at <br />
                <span className="font-bold">+91 93514 11126</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8f4ff 0%, #ede4ff 100%)' }}>
      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl pt-[70px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6" style={{ background: 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' }}>
              <h2 className="text-2xl font-bold text-white text-center">
                Schedule Your Appointment
              </h2>
              <p className="text-center mt-2" style={{ color: '#e6c76b' }}>
                Fill out the form below and we'll contact you to confirm
              </p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  icon={User}
                  placeholder="Enter your full name"
                  error={errors.name}
                  required
                />
                
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  icon={Mail}
                  placeholder="your.email@example.com"
                  error={errors.email}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  icon={Phone}
                  placeholder="10-digit mobile number"
                  error={errors.phone}
                  required
                />
                
                <Select
                  label="Service Required"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  icon={Stethoscope}
                  options={services}
                  error={errors.service}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  icon={Calendar}
                  min={today}
                  error={errors.date}
                  required
                />
                
                <Select
                  label="Preferred Time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  icon={Clock}
                  options={timeSlots}
                  error={errors.time}
                  required
                />
              </div>

              <Textarea
                label="Additional Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                icon={MessageSquare}
                placeholder="Any specific requirements, symptoms, or questions you'd like to share..."
              />

              {/* Important Notes */}
              <div className="border-l-4 p-4 rounded-r-xl" style={{ backgroundColor: '#fffdf0', borderColor: '#f0d97c' }}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5" style={{ color: '#e6c76b' }} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-bold" style={{ color: '#663366' }}>Important Notes:</h3>
                    <ul className="mt-2 text-sm space-y-1" style={{ color: '#4a1d4a' }}>
                      <li>• Home collection service available</li>
                      <li>• Fasting may be required for certain tests</li>
                      <li>• Please bring a valid ID and previous reports if any</li>
                      <li>• We'll confirm your appointment via phone/SMS</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="text-white font-bold py-4 px-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
                  style={{
                    background: isSubmitting ? '#8b4a8b' : 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #663366 0%, #4a1d4a 100%)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#4a1d4a' }}>
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                  <Phone className="h-6 w-6" style={{ color: '#4a1d4a' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#4a1d4a' }}>Call Us</p>
                  <p className="text-sm" style={{ color: '#663366' }}>+91 93514 11126</p>
                  <p className="text-sm" style={{ color: '#663366' }}>+91 90243 11126</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                  <Mail className="h-6 w-6" style={{ color: '#4a1d4a' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#4a1d4a' }}>Email Us</p>
                  <p className="text-sm" style={{ color: '#663366' }}>megadiagnosticsudaipur@gmail.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                  <MapPin className="h-6 w-6" style={{ color: '#4a1d4a' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#4a1d4a' }}>Visit Us</p>
                  <p className="text-sm" style={{ color: '#663366' }}>Plot No.29-C, Madhuban</p>
                  <p className="text-sm" style={{ color: '#663366' }}>Udaipur - 313001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}