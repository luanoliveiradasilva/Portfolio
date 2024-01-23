using System.Xml.Linq;

namespace App.Models
{
    public class SendEmailDto
    {
        public string To { get; set; }
        public string From { get; set; }
        public string Subject { get; set; }        
        public string Mensage { get; set; }
    }
}
