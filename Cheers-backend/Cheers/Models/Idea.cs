﻿namespace Cheers.Models
{
    public class Idea
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
