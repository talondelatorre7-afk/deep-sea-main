export async function onRequestPost(context) {
    try {
        // 1. Parse the incoming JSON from contact.html
        const data = await context.request.json();
        
        const name = data.name || 'No Name Provided';
        const email = data.email || 'No Email Provided';
        const phone = data.phone || 'No Phone Provided';
        const business = data['business-type'] || 'Not Specified';
        const message = data.message || 'No Message Provided';
        const optIn = data.SMS_Opt_In === 'on' ? 'Yes' : 'No';

        // 2. Format the email notification body
        const emailContent = `
New Lead from Deep Sea Digital Website!

Name: ${name}
Email: ${email}
Phone: ${phone}
Business Type: ${business}
SMS Opt-In: ${optIn}

Message:
${message}
        `;

        // 3. Send email via MailChannels API
        const send_request = new Request('https://api.mailchannels.com/tx/v1/send', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        // Set to your new custom forwarding address
                        to: [{ email: 'contact@deepseadigital.online', name: 'Deep Sea Digital' }],
                    },
                ],
                from: {
                    email: 'website@deepseadigital.online',
                    name: 'Deep Sea Digital Bot',
                },
                reply_to: {
                    email: email,
                    name: name,
                },
                subject: `New Lead: ${name} (${business})`,
                content: [
                    {
                        type: 'text/plain',
                        value: emailContent,
                    },
                ],
            }),
        });

        const resp = await fetch(send_request);
        
        if (resp.ok) {
             return new Response(JSON.stringify({ success: true }), {
                 status: 200,
                 headers: { 'Content-Type': 'application/json' }
             });
        } else {
             const errorText = await resp.text();
             throw new Error(`Failed to send email: ${errorText}`);
        }

    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}