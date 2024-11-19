using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;
using VehicleServiceManagement;
using VehicleServiceManagement.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Configure JSON options to handle circular references and null values.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
        options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    });

// Swagger configuration.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext with MS SQL Server connection string.
builder.Services.AddDbContext<VehicleServiceManagementContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS policy setup to allow front-end access.
builder.Services.AddCors(o =>
{
    o.AddPolicy("myCorsPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Register EmailService and JwtService for dependency injection.
builder.Services.AddScoped<EmailService>();
builder.Services.AddScoped<JwtService>();

// Configure JWT Authentication.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "localhost",
            ValidAudience = "localhost",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)),
            ClockSkew = TimeSpan.Zero // Set clock skew to zero to remove delay in token expiration.
        };
    });
builder.Services.AddCors(o =>
{
    o.AddPolicy("myCorsPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Allow requests from Angular
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable HTTPS redirection.
app.UseHttpsRedirection();

// Enable CORS.
app.UseCors("myCorsPolicy");

// Add authentication middleware.
app.UseAuthentication();

// Add authorization middleware.
app.UseAuthorization();

// Map controllers to handle API routes.
app.MapControllers();

// Start the application.
app.Run();
