using Newtonsoft.Json;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Northwind.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { action = RouteParameter.Optional, id = RouteParameter.Optional }
            );

            var corsAttribute = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(corsAttribute);

            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Re‌​ferenceLoopHandling = ReferenceLoopHandling.Ignore;
            config.Formatters.Clear();
            config.Formatters.Add(jsonFormatter);
        }
    }
}
