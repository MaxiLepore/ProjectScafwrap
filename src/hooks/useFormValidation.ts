import { useState, useCallback } from 'react';
import { validateForm, validateName, validateEmail, validatePhone, validateCompany, validateSubject, validateMessage, FormErrors } from '@/lib/validation';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export const useFormValidation = (initialData: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Update form data and validate field in real-time
  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Mark field as touched
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate the specific field
    let fieldError: string | null = null;
    
    switch (field) {
      case 'name':
        fieldError = validateName(value);
        break;
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'phone':
        fieldError = validatePhone(value);
        break;
      case 'company':
        fieldError = validateCompany(value);
        break;
      case 'subject':
        fieldError = validateSubject(value);
        break;
      case 'message':
        fieldError = validateMessage(value);
        break;
    }
    
    // Update errors
    setErrors(prev => {
      if (fieldError) {
        return { ...prev, [field]: fieldError };
      } else {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      }
    });
  }, []);

  // Validate entire form
  const validateAll = useCallback(() => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);
    
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setTouched({});
  }, [initialData]);

  // Check if field has error and is touched
  const getFieldError = useCallback((field: keyof FormData): string | undefined => {
    return touched[field] ? errors[field] : undefined;
  }, [errors, touched]);

  // Check if field is valid
  const isFieldValid = useCallback((field: keyof FormData): boolean => {
    return !errors[field] || !touched[field];
  }, [errors, touched]);

  // Check if form is valid (only required fields must be filled)
  const isFormValid = useCallback((): boolean => {
    // Check if there are no validation errors
    if (Object.keys(errors).length > 0) return false;
    
    // Check only required fields: name, email, subject, message
    const requiredFields = ['name', 'email', 'subject', 'message'] as const;
    return requiredFields.every(field => formData[field].trim() !== '');
  }, [errors, formData]);

  return {
    formData,
    errors,
    touched,
    updateField,
    validateAll,
    resetForm,
    getFieldError,
    isFieldValid,
    isFormValid: isFormValid()
  };
};
