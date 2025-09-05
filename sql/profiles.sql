-- Create profiles table
create table if not exists profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  role text check (role in ('admin', 'manager', 'cashier')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table profiles enable row level security;

-- Create demo users with default passwords
select
  auth.admin.create_user(
    email := 'admin@choppies.com',
    password := 'Admin123!',
    email_confirm := true,
    user_metadata := jsonb_build_object('full_name', 'Admin User')
  ),
  auth.admin.create_user(
    email := 'manager@choppies.com',
    password := 'Manager123!',
    email_confirm := true,
    user_metadata := jsonb_build_object('full_name', 'Manager User')
  ),
  auth.admin.create_user(
    email := 'cashier@choppies.com',
    password := 'Cashier123!',
    email_confirm := true,
    user_metadata := jsonb_build_object('full_name', 'Cashier User')
  );

-- Insert into profiles
insert into profiles (id, full_name, role)
select u.id, u.raw_user_meta_data->>'full_name',
  case
    when u.email = 'admin@choppies.com' then 'admin'
    when u.email = 'manager@choppies.com' then 'manager'
    when u.email = 'cashier@choppies.com' then 'cashier'
  end as role
from auth.users u
where u.email in ('admin@choppies.com','manager@choppies.com','cashier@choppies.com')
on conflict (id) do update set role = excluded.role;