export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const WEBHOOK_URL =
      'https://discord.com/api/webhooks/1153144170123370526/QntRjmzj4_P54auSW3mGrj4Ziv7GW9IdK_mOt76RJKRAZbBQLqETYoKodP-vgOzfmR8P';

    const data = {
      embeds: [
        {
          title: 'Ticket',
          color: 16497925,
          fields: [
            {
              name: 'Correo',
              value: formData.get('email'),
            },
            {
              name: 'Nombre',
              value: formData.get('name'),
            },
            {
              name: 'Asunto',
              value: formData.get('subject'),
            },
          ],
        },
      ],
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(`[LOGGING FROM /submit]: Succesfully sent message from ${formData.get('email')}`);
      return new Response('Mensaje enviado correctamente', {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    } else {
      console.log(`[LOGGING FROM /submit]: Error sending message from ${formData.get('email')}`);
      return new Response('Error al enviar el mensaje', {
        status: response.status,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  } catch (error) {
    console.log(`[LOGGING FROM /submit]: Error sending message`);
    return new Response('Error al enviar el mensaje', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}