using Microsoft.EntityFrameworkCore;
using HamzaBank.Api.Models;
 
namespace HamzaBank.Api.Data
{
    public class HamzaBankDbContext : DbContext
    {
        public DbSet<MenuItem> MenuItems { get; set; }

        public HamzaBankDbContext(DbContextOptions<HamzaBankDbContext> options):base(options){}
    }
}