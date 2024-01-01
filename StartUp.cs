using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(CommercePromote.CreditClient.StartUp))]
namespace CommercePromote.CreditClient
{
    public partial class StartUp
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}