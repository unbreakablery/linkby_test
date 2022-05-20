select a.id as account_id, a.name as account_name, to_char(cl.created_at, 'YYYY-MM') as month, count(a.id) as num_clicks 
from public.accounts as a
inner join public.campaigns as c on c.account_id = a.id and c.created_at >  CURRENT_DATE - INTERVAL '6 months' and c.end_date > c.start_date + INTERVAL '7 days'
inner join public.clicks as cl on cl.campaign_id = c.id
where a.active = true
group by a.id, a.name, to_char(cl.created_at, 'YYYY-MM');
