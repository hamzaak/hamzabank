using System.ComponentModel.DataAnnotations;
using HamzaBank.Api.Core;

namespace HamzaBank.Api.Models
{
    public class MenuItem: IEntity
    {
        [Key]
        public long Id { get; set; }
        public string ComponentId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}