using System;
using System.Collections.Generic;
using HamzaBank.Api.Models;
using HamzaBank.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace HamzaBank.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenuItemsController : ControllerBase
    {
        private readonly IMenuItemService _menuItemService;
        
        public MenuItemsController(IMenuItemService menuItemService)
        {
            _menuItemService = menuItemService;
        }

        [HttpGet]
        [Route("get-all")]
        public IList<MenuItem> GetAll()
        {
            return _menuItemService.GetAll();
        }
    }
}
