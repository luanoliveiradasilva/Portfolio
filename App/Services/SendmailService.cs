using App.Models;
using App.Services.Input;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;


namespace App.Services
{
    public class SendmailService : ISendmailService
    {
        private readonly IConfiguration _configuration;
        private readonly SmtpClient _smtpClient;

        public SendmailService(IConfiguration configuration, SmtpClient smtpClient)
        {
            _configuration = configuration;
            _smtpClient = smtpClient;
        }

        public void SendEmailPost(SendEmailDto sendEMail)
        {
            var message = new MimeMessage();
            message.To.Add(MailboxAddress.Parse(sendEMail.To));
            message.From.Add(MailboxAddress.Parse(sendEMail.From));
            message.Subject = sendEMail.Subject;
            message.Body = new TextPart(TextFormat.Html)
            {
                Text = sendEMail.Mensage
            };

            ConecctionSmtp(message);
        }

        //TODO Remover essa funcao para uma classe de config
        private void ConecctionSmtp(MimeMessage message)
        {
            var numberPort = 587;

            _smtpClient.Connect(_configuration.GetSection("EmailHost").Value, numberPort, SecureSocketOptions.StartTls);
            _smtpClient.Authenticate(_configuration.GetSection("Emailusername").Value, _configuration.GetSection("EmailPassword").Value);
            _smtpClient.Send(message);
            _smtpClient.Disconnect(true);
        }
    }
}
