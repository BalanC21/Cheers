namespace Cheers.Services.EmailService
{
    public interface IEmailService
    {
        void SendEmail(string userEmail, string emailSubject, string emailBodyMessage);
    }
}
