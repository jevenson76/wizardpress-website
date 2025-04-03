/*
  # Create tables for Wizard Press submissions

  1. New Tables
    - `manuscript_submissions`
      - Stores book manuscript submissions
      - Contains author details and manuscript information
    - `newsletter_subscriptions`
      - Stores newsletter subscriber information
    - `pre_orders`
      - Tracks book pre-orders
      
  2. Security
    - Enable RLS on all tables
    - Add policies for data access and insertion
*/

-- Manuscript submissions table
CREATE TABLE IF NOT EXISTS manuscript_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  manuscript_title text NOT NULL,
  genre text NOT NULL,
  word_count text NOT NULL,
  synopsis text NOT NULL,
  target_audience text NOT NULL,
  author_bio text NOT NULL,
  marketing_plan text NOT NULL
);

-- Newsletter subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text,
  email text NOT NULL UNIQUE,
  active boolean DEFAULT true
);

-- Pre-orders table
CREATE TABLE IF NOT EXISTS pre_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  book_id text NOT NULL,
  email text NOT NULL,
  name text,
  quantity integer DEFAULT 1,
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE manuscript_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pre_orders ENABLE ROW LEVEL SECURITY;

-- Policies for manuscript submissions
CREATE POLICY "Allow public to insert manuscript submissions"
  ON manuscript_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admins to view all manuscript submissions"
  ON manuscript_submissions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

-- Policies for newsletter subscriptions
CREATE POLICY "Allow public to insert newsletter subscriptions"
  ON newsletter_subscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admins to view all newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

-- Policies for pre-orders
CREATE POLICY "Allow public to insert pre-orders"
  ON pre_orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admins to view all pre-orders"
  ON pre_orders
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');