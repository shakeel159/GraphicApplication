using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonLooter
{
    //CREDITS
    // https://fsymbols.com/text-art/
    //https://fsymbols.com/draw/
    // Micheal Hadley Videos
    // https://www.youtube.com/watch?v=eBadZxYe6I4
    // https://www.youtube.com/watch?v=qAWhGEPMlS8
    class Game
    {
        public int room;
        public int doorsPresent;

        public Random Rand;

        public Room rooms;
        public Game()
        {
            rooms = new RoomOne(this);
        }

        public void OnAwake()            //game intro
        {

            PrintCharacterHealth();
            Console.WriteLine("\n\nYou wake up in a undergroung hallway with 3 paths, one goin left, on doing right, and one directly in front\n\n");
            Player.WaitForKeyPress();
            MainMenuPrompt();
        }
        public void MainMenuPrompt()                    //Display ASCII art of 3 doors    //allow player to pick a door
        {
            
            string prompt = @"


░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 
║░░░░░░░░░░░░░║░░░░░░░░░░░░░░║░░░░░░░░░░ 
╠═════════║░░░║══════════║░░░║═════════║ 
║░░░░░░░░░║░░░║░░░░░░░░░░║░░░║░░░░░░░░░║ 
║░░░░░░░░░║░░░║░░░░░░░░░░║░░░║░░░░░░░░░║ 
║░░░░░░░░░║░░░║░░░░░░░░░░║░░░║░░░░░░░░░║ 
║░░░░░░░░░║░░░║░░░░░░░░░░║░░░║░░░░░░░░░║ 
║░═░░░░░░░║░░░║░═░░░░░░░░║░░░║░═░░░░░░░║ 
║░░░░░░░░░║░░░║░░░░░░░░░░║░░░║░░░░░░░░░║ 
║░░░╔══╗░░║░░░║░░░╔══╗░░░║░░░║░░░╔══╗░░║ 
║░░╔╝░░╚╗░║░░░║░░╔╝░░╚╗░░║░░░║░░╔╝░░╚╗░║ 
║░░╚╗░░╔╝░║░░░║░░║░░░░║░░║░░░║░░╚╗░░╔╝░║ 
║░░░╚══╝░░║░░░║░░╚╗░░╔╝░░║░░░║░░░╚══╝░░║ 
║░░░░░░░░░║░░░║░░░╚══╝░░░║░░░║░░░░░░░░░║ 
║═════════║░░░║══════════║░░░║══════════ 
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 


\nWich do you pick? (use Arrow keys and press Enter to select)";
            string[] options = { "Left Door", "Middle Door", "Right Door" };
            Menu mainMenu = new Menu(options, prompt);
            int selectedIndex = mainMenu.run();

            switch (selectedIndex)
            {
                case 0:
                    LeftDoorPrompt();
                    break;
                case 1:
                    MiddleRoomPrompt();
                    break;
                case 2:
                    ThirdDoorPrompt();
                    break;

            }
        }
        public void FirstDoorPrompt()
        {
            string prompt = @"
You enter the room with a beast standing in the middle


░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 
░░░░░░░░░░░░░░░░███████████░░░░░░░░░░░░░░ 
░░░░░░░░░░░░░░███░░░░░░░░░███░░░░░░░░░░░░ 
░░░░░░░░░░░░░░██░░░░░░░░░░░░██░░░░░░░░░░░ 
░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░ 
░░░░░░░░░░░░░░█░░███░░░███░░░█░░░░░░░░░░░ 
░░░░░░░░░░░░░░██░███░░░███░░██░░░░░░░░░░░ 
░░░░░░░░░░░░░░███░░░░░░░░░░███░░░░░░░░░░░ 
░░░░░░░░░░░░░░░░██░░░░░░░░░██░░░░░░░░░░░░ 
░░░░░░░░░░░░░░██░░░░█████░░░██░░░░░░░░░░░ 
░░░░░░░░░░░░░░█░░░░██░░░██░░░░█░░░░░░░░░░ 
░░░░░░░░░░░░░██░░██░░░░░░██░░░░█░░░░░░░░░ 
░░░░░░░░░░░░░█████░░░░░░░░███░░█░░░░░░░░░ 
░░░░░░░░░░░░░██░░░░░░░░░░░░░████░░░░░░░░░ 
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 


\nWich do you pick?";
            string[] options = { "Attack", "Investigate", "Leave" };
            Menu mainMenu = new Menu(options, prompt);
            int selectedIndex = mainMenu.run();

            switch (selectedIndex)
            {
                case 0:
                    //play attack sequance
                    AttackSequence();
                    break;
                case 1:
                    //Start attack sequence
                    Console.WriteLine("doesnt help, you get attacked");
                    Player.DMGTaken(25);
                    Player.PlayerStats();
                    AttackSequence();
                    break;
                case 2:
                    room = 0;
                    MainHall();  
                    break;

            }
        }
        public void SecondDoorPrompt()
        {

            string prompt = @"

You enter the room to see an huge beast in the middle blocking what seems to be staircase

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████░░███
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░
░░░░█████████████░░░░░░░░░░░░░░█░░░░░░░░░
░░░░█░░░░░█░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░
░░░░█████████████░░░░░░░░░░░░░░█░░░░░░░░░
░░░░█░░░░░█░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░
░░░░█████████████░░░░░░░░░░░░░░█░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█░██░░░░░░
░░░░░░░░░████░░░░░░░░░░░░░██░░░█░░░░░░░░░
░░░░░░░░░█░░███░░░░░░░░█████░░░█░░░░░░░░░
░░░░░░░░░█░░░░██░░░░░░██░░██░░░█░░░░░░░░░
░░░░░░░░░░█░░░░██░░░██░░░░█░░░░█░░░░░░░░░
████████░░░██░░░█████░░░░██░███████████░░
░░░░░░░░░░░░██░░░░░░░░░██░░░░░░░░░░░░░██░
░░░░░░░░░░░███░░░░░░░░░░███░░░░░░░░░░░░░░
░░░░░░░░░░░██░░███░░░███░██░░░░░░░░░░░░░░
░░░░░░░░░░░█░░░███░░░███░░█░░░░░░░░░░░░░░
░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░
░░░░░░░░░░░██░░░░░░░░░░░░██░░░░░░░░░░░░░░
░░░░░░░░░░░░███░░░░░░░░░███░░░░░░░░░░░░░░
░░░░░░░░░░░░░░███████████░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░




\nWich do you pick?";
            string[] options = { "Attack", "Investigate", "Leave" };
            Menu mainMenu = new Menu(options, prompt);
            int selectedIndex = mainMenu.run();

            switch (selectedIndex)
            {
                case 0:
                    //play attack sequance
                    BossSequence();
                    break;
                case 1:
                    //Start attack sequence
                    Console.WriteLine("doesnt help, you get attacked");
                    Player.DMGTaken(25);
                    BossSequence();
                    break;
                case 2:
                    room = 0;
                    MainHall();
                    break;

            }
        }
        public void ThirdDoorPrompt()
        {
            string prompt = "You enter the but its empty with a broken down desk at the end\" Wich do you pick?";
            string[] options = { "Investigate", "Leave" };
            Menu mainMenu = new Menu(options, prompt);
            int selectedIndex = mainMenu.run();

            switch (selectedIndex)
            {
                case 0:
                    //Investigate
                    Player.CoinDrop(15);
                    Console.WriteLine("Coins found ( " + Player.coins.ToString() + ")");
                    Player.WaitForKeyPress();
                    MainHall();
                    break;
                case 1:
                    MainHall();
                    break;

            }
        }
        public void MainHall()
        {
            Console.Clear();
            Console.WriteLine("Back in the hallway you started with three rooms");
            MainMenuPrompt();
            Player.WaitForKeyPress();
        }
        public void LeftDoorPrompt()
        {
            Console.Clear();
            //player chooses to run, attack, or talk // run that sequence
            //allow player to return to base room 0

            //rooms.Run();
            FirstDoorPrompt();
        }
        public void MiddleRoomPrompt()
        {
            //Middle Door
            //player chooses to run, attack, or talk // run that sequence
            //allow player to return to base room 0
            Console.Clear();
            SecondDoorPrompt();
        }
        public void RightRoomPrompt()
        {
            //Middle Door
            //player chooses to search or leave // run that sequence
            //allow player to return to base room 0
            Console.Clear();
        }

        public void LastDoorPrompt()
        {
            // door behind the large beast
            //once middle beast is killed door to escape is available
            Console.Clear();
            Console.WriteLine("you were able to escape what seemed to be a underground cell, ENJOY YOUR FREEDOM");
        }
        static void PrintCharacterHealth()
        {
            Player.PlayerStats();
            //Player.WaitForKeyPress();
        }

        public void AttackSequence()
        {

            do
            {
                Enemy.DMGTaken();
                Player.DMGTaken(15);
                Player.CoinDrop(15);
                Player.PlayerStats();
                Enemy.EnemyStats();
                Player.WaitForKeyPress();
                if(Enemy.Health <= 0)
                {
                    ThirdDoorPrompt();
                }
            } while (Player.health >= 0);



        }
        public void BossSequence()
        {

            do
            {
                Enemy.DMGTaken();
                Player.DMGTaken(15);
                Player.PlayerStats();
                Enemy.EnemyStats();
                Player.WaitForKeyPress();
                if (Enemy.Health <= 0)
                {
                    OneOptionPropmt();
                }
            } while (Player.health >= 0);
        }

        public void OneOptionPropmt()
        {
            string prompt = "Wich do you pick?";
            string[] options = { "go up staircase" , "Leave" };
            Menu mainMenu = new Menu(options, prompt);
            int selectedIndex = mainMenu.run();

            switch (selectedIndex)
            {
                case 0:
                    EndSequence();
                    break;
                case 1:
                    MainHall();
                    break;

            }
        }

        public void EndSequence()
        {
            Console.WriteLine("CONGRATULATIONS YOU ESCAPED");
            Player.PlayerStats();
            Console.ReadKey();
            Environment.Exit(0);
        }


    }
}
