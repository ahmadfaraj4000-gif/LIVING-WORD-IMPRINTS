create or replace function public.lookup_order_status(lookup_invoice_number text)
returns table (
  invoice_number text,
  status text,
  pickup_date date,
  order_date date,
  school text
)
language sql
security definer
set search_path = public
as $$
  select
    invoices.invoice_number,
    invoices.status,
    invoices.pickup_date,
    invoices.order_date,
    invoices.school
  from public.invoices
  where invoices.invoice_number = trim(lookup_invoice_number)
    and coalesce(invoices.archived, false) = false
  limit 1;
$$;

grant execute on function public.lookup_order_status(text) to anon;
