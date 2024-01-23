using App.Services;
using App.Services.Input;
using MailKit.Net.Smtp;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<ISendmailService, SendmailService>();
builder.Services.AddScoped<SmtpClient>();
builder.Services.AddCors(
    options =>
    {
        options.AddPolicy("AllowAngularApp",
            builder =>
            {
                builder
                    .WithOrigins("https://localhost:44332", "https://localhost:44458")
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
    }
);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAngularApp");


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();



