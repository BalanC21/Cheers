using Cheers.Data;
using Cheers.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cheers.Models.Daos
{
    public class IdeaDbDAO : IIdeeaDAO
    {
        private readonly ApplicationDbContext _appDbContext;

        public IdeaDbDAO(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void Add(Idea idea)
        {
            Console.WriteLine(idea);
            _appDbContext.Ideas.Add(idea);
            _appDbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var idea = _appDbContext.Ideas.Where(x => x.Id == id).FirstOrDefault();
            if (idea != null)
            {
                _appDbContext.Ideas.Remove(idea);
                _appDbContext.SaveChanges();
            }
        }

        public void Edit(int id, Idea idea)
        {
            var lol = _appDbContext.Ideas.FirstOrDefault(x => x.Id == id);
            lol.Description = idea.Description;
            lol.Name = idea.Name;
            lol.ShortDescription = idea.ShortDescription;
            lol.CategoryId = idea.CategoryId;
            lol.Target = idea.Target;
            _appDbContext.Update(lol);
            _appDbContext.SaveChanges();
        }

        public Idea Get(int id)
        {
            return _appDbContext.Ideas.Include(idea => idea.Category).Include(idea => idea.Author).FirstOrDefault(idea => idea.Id == id);
        }

        public List<Idea> GetAll()
        {
            return _appDbContext.Ideas.Include(idea => idea.Category).Include(idea => idea.Author).ToList();
        }

        public List<Idea> GetByCategoryId(int categoryId)
        {
            return _appDbContext.Ideas.Include(idea => idea.Category).Include(idea => idea.Author).Where(idea => idea.CategoryId == categoryId).ToList();
        }
    }
}