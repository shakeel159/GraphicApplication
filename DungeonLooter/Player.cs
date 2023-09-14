using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;


namespace DungeonLooter
{

    static public class Player
    {
        static public Random rand;

        static public int health = 100;
        static public int coins = 0;

        static public void WaitForKeyPress()
        {
            Console.ReadKey(true);
        }
        static public void PlayerStats()
        {
            string healthToInt = health.ToString();
            string coinToInt = coins.ToString();

            Console.WriteLine("********************************************");
            Console.WriteLine("health: " +  healthToInt);
            Console.WriteLine("coins: " + coinToInt);
            Console.WriteLine("********************************************");
        }

        static public void DMGTaken(int dmg)
        {
            rand = new Random();
            health -= rand.Next(dmg);
        }
        static public void CoinDrop(int amount)
        {
            rand = new Random();
            coins += rand.Next(amount);
        }


    }
}
