using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppDaw.Models
{
    public class Food
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string ImagePath { get; set; }

        public string Recipe { get; set; }

        public string Ingredients { get; set; }
    }
}
