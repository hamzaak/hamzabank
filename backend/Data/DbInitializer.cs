using System.Linq;
using HamzaBank.Api.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace HamzaBank.Api.Data {
    public static class DbInitializer {
        public static void Seed(HamzaBankDbContext context)
        {
            if (!context.MenuItems.Any())
            {
                context.Add(new MenuItem{ Id= 1, ComponentId="Accounts", Title="Hesaplar", Body="Tüm hesap detaylarınız..."});
                context.Add(new MenuItem{ Id= 2, ComponentId="Transfer", Title="Para Transferi", Body="Para transfer detaylarınız..."});
                context.Add(new MenuItem{ Id= 3, ComponentId="Payment", Title="Ödeme", Body="Ödeme detaylarınız..."});
            }

            context.SaveChanges();
        }
    }
}