using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonLooter
{
    class RoomOne : Room
    {
        public RoomOne(Game game) : base(game)
        {

        }
        public override void Run()
        {
            Console.WriteLine("You enter the room with a beast standing in the middle");
        }

    }
}
