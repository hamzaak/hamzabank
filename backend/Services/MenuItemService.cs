using System.Collections.Generic;
using HamzaBank.Api.Models;
using HamzaBank.Api.Repositories;

namespace HamzaBank.Api.Services {
    public class MenuItemService : IMenuItemService
    {
        private readonly IMenuItemRepository _menuItemRepository;

        public MenuItemService(IMenuItemRepository menuItemRepository)
        {
            _menuItemRepository = menuItemRepository;   
        }

        public void Add(MenuItem menuItem)
        {
            _menuItemRepository.Add(menuItem);
        }

        public MenuItem Get(long id)
        {
            return _menuItemRepository.Get(id);
        }

        public IList<MenuItem> GetAll()
        {
            return _menuItemRepository.GetAll();
        }
    }
}