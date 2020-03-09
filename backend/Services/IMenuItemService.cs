using System.Collections.Generic;
using HamzaBank.Api.Models;

namespace HamzaBank.Api.Services {
    public interface IMenuItemService {
        IList<MenuItem> GetAll();

        void Add(MenuItem menuItem);
     }
}