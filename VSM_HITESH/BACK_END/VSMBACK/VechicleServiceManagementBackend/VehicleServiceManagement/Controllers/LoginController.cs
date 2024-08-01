using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using VehicleServiceManagement;
using VehicleServiceManagement.Models;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{

    public VehicleServiceManagementContext Context { get; }
    //public EmailService EmailService { get; }
    public JwtService JwtService { get; }
    public LoginController(VehicleServiceManagementContext context,EmailService emailService, JwtService jwtService)
    {
        Context = context;
        //EmailService = emailService;
        JwtService = jwtService;
    }
   


    [HttpPost("Register")]
    public ActionResult Register(User user)
    {
        user.AccountStatus = AccountStatus.UNAPROOVED;
        user.UserType = UserType.SERVICE_ADVISER;
        user.CreatedOn = DateTime.Now;

        Context.Users.Add(user);
        Context.SaveChanges();

        const string subject = "Account Created";
        var body = $"""
                <html>
                    <body>
                        <h1>Hello, {user.FirstName} {user.LastName}</h1>
                        <h2>
                            Your account has been created and we have sent approval request to admin. 
                            Once the request is approved by admin you will receive email, and you will be
                            able to login in to your account.
                        </h2>
                        <h3>Thanks</h3>
                    </body>
                </html>
            """;

        //EmailService.SendEmail(user.Email, subject, body);

        return Ok(@"Thank you for registering. 
                        Your account has been sent for aprooval. 
                        Once it is aprooved, you will get an email.");
    }

    [HttpGet("Login")]
    public ActionResult Login(string email, string password)
    {
        if (Context.Users.Any(u => u.Email.Equals(email) && u.Password.Equals(password)))
        {
            var user = Context.Users.Single(user => user.Email.Equals(email) && user.Password.Equals(password));

            if (user.AccountStatus == AccountStatus.UNAPROOVED)
            {
                return Ok("unapproved");
            }

            if (user.AccountStatus == AccountStatus.BLOCKED)
            {
                return Ok("blocked");
            }

            var token = JwtService.GenerateToken(user);
            var userType = user.UserType;  // Assuming UserType is a property of User

            return Ok(new { token = token, userType = userType });
        }
        return Ok("not found");
    }
    //    [HttpGet("Login")]
    //public ActionResult Login(string email, string password)
    //{
    //    if (Context.Users.Any(u => u.Email.Equals(email) && u.Password.Equals(password)))
    //    {
    //        var user = Context.Users.Single(user => user.Email.Equals(email) && user.Password.Equals(password));

    //        if (user.AccountStatus == AccountStatus.UNAPROOVED)
    //        {
    //            return Ok("unapproved");
    //        }

    //        if (user.AccountStatus == AccountStatus.BLOCKED)
    //        {
    //            return Ok("blocked");
    //        }

    //        var token = JwtService.GenerateToken(user);
    //        return Ok(new { token = token }); // Return token in JSON format
    //    }
    //    return Ok("not found");
    //}


    //[HttpGet("Login")]
    //public ActionResult Login(string email, string password)
    //{
    //    if (Context.Users.Any(u => u.Email.Equals(email) && u.Password.Equals(password)))
    //    {
    //        var user = Context.Users.Single(user => user.Email.Equals(email) && user.Password.Equals(password));

    //        if (user.AccountStatus == AccountStatus.UNAPROOVED)
    //        {
    //            return Ok("unapproved");
    //        }

    //        if (user.AccountStatus == AccountStatus.BLOCKED)
    //        {
    //            return Ok("blocked");
    //        }

    //        return Ok(JwtService.GenerateToken(user));
    //    }
    //    return Ok("not found");
    //}

}
