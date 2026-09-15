import { neon } from '@neondatabase/serverless';

export interface LeadRecord {
  id?: string;
  name: string;
  phone: string;
  store_name?: string;
  category?: string;
  image_url?: string;
  source: string;
  created_at?: string;
}

// Memory fallback store for local development or demo runs without DATABASE_URL
const inMemoryLeads: LeadRecord[] = [];

export async function saveLead(lead: LeadRecord) {
  const databaseUrl = process.env.DATABASE_URL;

  if (databaseUrl) {
    try {
      const sql = neon(databaseUrl);
      
      // Auto-create table if not exists
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          phone VARCHAR(100) NOT NULL,
          store_name VARCHAR(255),
          category VARCHAR(100),
          image_url TEXT,
          source VARCHAR(100) DEFAULT 'website',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      const result = await sql`
        INSERT INTO leads (name, phone, store_name, category, image_url, source)
        VALUES (${lead.name}, ${lead.phone}, ${lead.store_name || ''}, ${lead.category || ''}, ${lead.image_url || ''}, ${lead.source || 'brand_audit'})
        RETURNING *;
      `;

      return { success: true, db: 'neon', data: result[0] };
    } catch (error) {
      console.warn('Neon Postgres save issue, falling back to local store:', error);
    }
  }

  // Fallback memory store
  const newLead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    created_at: new Date().toISOString(),
  };
  inMemoryLeads.push(newLead);
  console.log('[Lead Persisted Local Store]:', newLead);

  return { success: true, db: 'memory', data: newLead };
}
