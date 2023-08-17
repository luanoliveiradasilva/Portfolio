using App.Models;

namespace App.Services.Input
{
    public interface ISendmailService
    {
        public void SendEmailPost(SendEmailDto sendEMail);
    }
}
