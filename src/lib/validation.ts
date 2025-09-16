// Client-side validation utilities
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Validation rules
export const validationRules = {
  name: {
    required: 'Name is required',
    minLength: (min: number) => `Name must be at least ${min} characters long`,
    maxLength: (max: number) => `Name cannot exceed ${max} characters`,
    pattern: 'Name can only contain letters, spaces, hyphens, and apostrophes'
  },
  email: {
    required: 'Email is required',
    invalid: 'Please enter a valid email address',
    maxLength: (max: number) => `Email cannot exceed ${max} characters`
  },
  phone: {
    invalid: 'Please enter a valid phone number'
  },
  company: {
    maxLength: (max: number) => `Company name cannot exceed ${max} characters`
  },
  subject: {
    required: 'Subject is required',
    minLength: (min: number) => `Subject must be at least ${min} characters long`,
    maxLength: (max: number) => `Subject cannot exceed ${max} characters`
  },
  message: {
    required: 'Message is required',
    minLength: (min: number) => `Message must be at least ${min} characters long`,
    maxLength: (max: number) => `Message cannot exceed ${max} characters`
  }
};

// Validation functions
export const validateName = (name: string): string | null => {
  if (!name.trim()) return validationRules.name.required;
  if (name.length < 2) return validationRules.name.minLength(2);
  if (name.length > 50) return validationRules.name.maxLength(50);
  if (!/^[a-zA-Z\s'-]+$/.test(name)) return validationRules.name.pattern;
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) return validationRules.email.required;
  if (email.length > 100) return validationRules.email.maxLength(100);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return validationRules.email.invalid;
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone.trim()) return null; // Optional field
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
  if (!phoneRegex.test(phone)) return validationRules.phone.invalid;
  return null;
};

export const validateCompany = (company: string): string | null => {
  if (!company.trim()) return null; // Optional field
  if (company.length > 100) return validationRules.company.maxLength(100);
  return null;
};

export const validateSubject = (subject: string): string | null => {
  if (!subject.trim()) return validationRules.subject.required;
  if (subject.length < 5) return validationRules.subject.minLength(5);
  if (subject.length > 100) return validationRules.subject.maxLength(100);
  return null;
};

export const validateMessage = (message: string): string | null => {
  if (!message.trim()) return validationRules.message.required;
  if (message.length < 10) return validationRules.message.minLength(10);
  if (message.length > 1000) return validationRules.message.maxLength(1000);
  return null;
};

// Validate entire form
export const validateForm = (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}): FormErrors => {
  const errors: FormErrors = {};

  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const companyError = validateCompany(formData.company);
  if (companyError) errors.company = companyError;

  const subjectError = validateSubject(formData.subject);
  if (subjectError) errors.subject = subjectError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;

  return errors;
};

// Check if form is valid
export const isFormValid = (errors: FormErrors): boolean => {
  return Object.keys(errors).length === 0;
};
