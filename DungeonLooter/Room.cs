using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonLooter
{
    class Room
    {
        protected Game myGame;

        private int SelectedIndex;
        private string[] Options;
        private string Prompt;

        public Room(Game game)
        {
            SelectedIndex = 0;
        }
        virtual public void Run()
        {

        }

    }
}
