using System.Collections.Generic;
using System.Linq;
using HamzaBank.Api.Core.Data.Ef;
using HamzaBank.Api.Data;
using HamzaBank.Api.Models;

namespace HamzaBank.Api.Repositories
{
    public class MenuItemRepository : IMenuItemRepository
    {
        private readonly HamzaBankDbContext _context;

        public MenuItemRepository(HamzaBankDbContext context)
        {
            _context = context;
        }

        public IList<MenuItem> GetAll()
        {
            return _context.MenuItems.ToList();
        }

        public void Add(MenuItem menuItem){
            _context.MenuItems.Add(menuItem);
            _context.SaveChanges();
        }
    }
}