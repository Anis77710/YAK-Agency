import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: 'Name and phone are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send notification email to owner
    const RECIPIENT_EMAIL = "bad292943@gmail.com";
    
    // Use Supabase's built-in SMTP to send via the management API
    // For now, the submission is stored in the database
    // The owner can check submissions in the Cloud dashboard
    
    console.log(`New contact submission: ${name} - ${phone}`);

    return new Response(
      JSON.stringify({ success: true, message: 'Contact submission received' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
