-- Index: period_idx
-- DROP INDEX public.period_idx;
CREATE INDEX period_idx
    ON public.campaigns USING btree
    (start_date ASC NULLS LAST, end_date ASC NULLS LAST)
    TABLESPACE pg_default;

-- Index: clicks_idx
-- DROP INDEX public.clicks_idx;
CREATE INDEX clicks_idx
    ON public.clicks USING btree
    (campaign_id ASC NULLS LAST, created_at ASC NULLS LAST)
    TABLESPACE pg_default;
