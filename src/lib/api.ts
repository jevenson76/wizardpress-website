import { supabase } from './supabase';
import type { ManuscriptSubmission, NewsletterSubscription, PreOrder } from '../types/supabase';

export async function submitManuscript(data: ManuscriptSubmission) {
  const { data: submission, error } = await supabase
    .from('manuscript_submissions')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return submission;
}

export async function subscribeToNewsletter(data: NewsletterSubscription) {
  const { data: subscription, error } = await supabase
    .from('newsletter_subscriptions')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return subscription;
}

export async function createPreOrder(data: PreOrder) {
  const { data: order, error } = await supabase
    .from('pre_orders')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return order;
}