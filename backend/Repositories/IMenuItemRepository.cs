using System.Collections.Generic;
using HamzaBank.Api.Core.Data;
using HamzaBank.Api.Models;

namespace HamzaBank.Api.Repositories {
    public interface IMenuItemRepository {
        IList<MenuItem> GetAll();  
        MenuItem Get(long id);
        void Add(MenuItem menuItem);
     }
}