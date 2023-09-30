import nodemailer from "nodemailer";

interface IEmail {
  name: string;
  email: string;
  message: string;
}

async function sendEmail(name: string, email: string, message: string) {
  console.log("sendEmail", name, email, message);

  // Configurar o transporte de e-mail usando SMTP do Gmail
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ph23.alves@gmail.com", // Seu endereço de e-mail Gmail
      pass: "suasenha", // Sua senha de e-mail Gmail
    },
  });

  // Definir as informações do e-mail
  const mailOptions = {
    from: "ph23.alves@gmail.com", // Seu endereço de e-mail Gmail
    to: "ph23.alves@gmail.com", // Endereço de e-mail do destinatário
    subject: "Assunto do E-mail Teste",
    text: "Corpo do E-mail",
  };

  // Enviar o e-mail
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado: ", info.response);
  } catch (error) {
    console.error("Erro ao enviar e-mail: ", error);
  }
}

// Chamar a função para enviar o e-mail
// sendEmail();

export default sendEmail;
