using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonLooter
{
    static class Enemy
    {
        static public Random rand;

        static private int coinDrop;
        static public int Health = 100;

        static public void EnemyStats()
        {
            string healthToInt = Health.ToString();
            string coinToInt = coinDrop.ToString();

            Console.WriteLine("********************************************");
            Console.WriteLine("Enemy health: " + healthToInt);
            Console.WriteLine("coins dropped: " + coinToInt);
            Console.WriteLine("********************************************");
        }
        static public void DMGTaken()
        {
            rand = new Random();
            Health -= rand.Next(100);
        }
    }
}
