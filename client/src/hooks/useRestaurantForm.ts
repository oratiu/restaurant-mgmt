import { useState, useEffect } from 'react';
import { Restaurant } from '../types.ts';

const useRestaurantForm = (initialData: Partial<Restaurant>) => {
  const [formData, setFormData] = useState<Partial<Restaurant>>(initialData);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  useEffect(() => {
    const { name, address, email, phone } = formData;
    setIsFormValid(
      !!name?.trim() &&
        !!address?.trim() &&
        !!email?.trim() &&
        !!phone?.trim() &&
        validateEmail(email)
    );
  }, [formData]);

  const validateEmail = (email: string | undefined): boolean => {
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, isFormValid, handleChange };
};

export default useRestaurantForm;
