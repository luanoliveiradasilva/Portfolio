using App.Models;
using App.Services;
using App.Services.Input;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendEmailController : ControllerBase
    {
        private readonly ISendmailService _iSendmailService;       

        public SendEmailController(ISendmailService iSendmailService)
        {
            _iSendmailService = iSendmailService;
        }

        //TODO adicionar uma mensagem de retorno ok ao inves de retornar so OK.
        [HttpPost]
        public IActionResult SendEmail(SendEmailDto sendEmailDto)
        {
            _iSendmailService.SendEmailPost(sendEmailDto);

            return Ok();
        }
    }
}
