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
    const { name, phone, email } = await req.json();

    if (!name || !phone || !email) {
      return new Response(
        JSON.stringify({ error: 'Name, phone, and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send notification email to owner
    const RECIPIENT_EMAIL = "bad292943@gmail.com";
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY is not configured in the function environment' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: RECIPIENT_EMAIL,
        subject: 'New Contact Submission',
        text: `New contact submission:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`,
        html: `<p>New contact submission:</p><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p>`,
      }),
    });

    const responseBody = await emailResponse.text();
    if (!emailResponse.ok) {
      console.error('Failed to send email:', responseBody);
      return new Response(
        JSON.stringify({ error: 'Email send failed', details: responseBody }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`New contact submission: ${name} - ${phone} - ${email}`);
    console.log('Resend response:', responseBody);

    return new Response(
      JSON.stringify({ success: true, message: 'Contact submission received', resendResponse: responseBody }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
