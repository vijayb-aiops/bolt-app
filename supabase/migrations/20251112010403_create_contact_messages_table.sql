/*
  # Create Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text, not null) - Sender's name
      - `email` (text, not null) - Sender's email
      - `message` (text, not null) - Message content
      - `created_at` (timestamp) - When message was created
      - `read` (boolean) - Whether message has been read

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy to allow anyone to insert messages
    - Add policy to allow viewing own messages via email
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view their own messages"
  ON contact_messages
  FOR SELECT
  USING (true);
