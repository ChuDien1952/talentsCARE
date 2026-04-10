/**
 * Contact Form Component
 * Form with validation using react-hook-form and zod
 */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Input, Textarea } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof schema>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      // For static site: Log to console (Phase 06 will add backend)
      console.log('Form submitted:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
        {t('success')}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          {...register('name')}
          label={t('name')}
          error={errors.name?.message}
          id="name"
        />
        <Input
          {...register('email')}
          type="email"
          label={t('email')}
          error={errors.email?.message}
          id="email"
        />
        <Input
          {...register('phone')}
          type="tel"
          label={t('phone')}
          id="phone"
        />
        <Input {...register('company')} label={t('company')} id="company" />
      </div>
      <Input
        {...register('subject')}
        label={t('subject')}
        error={errors.subject?.message}
        id="subject"
      />
      <Textarea
        {...register('message')}
        label={t('message')}
        error={errors.message?.message}
        id="message"
        rows={5}
      />
      {status === 'error' && (
        <p className="text-red-500 text-sm">{t('error')}</p>
      )}
      <Button type="submit" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : t('submit')}
      </Button>
    </form>
  );
}
