using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _2DGraphics
{
    public partial class Form1 : Form
    {

        //points for Title
        public float Titlex = 150f;
        public float Titley = 150f;
        public float Titlewidth = 200f;
        public float Titlehieght = 50f;
        //points for Square
        public float plyX = 140f;
        public float plyY = 200f;
        public float plyWidth = 50f;
        public float plyHieght = 50f;
        //points for circle
        public float circleX = 270f;
        public float circleY = 200f;
        public float circleWidth = 50f;
        public float circlrHieght = 50f;
        // Points for traingle 
        public Point startingPoint = new Point(250, 10);
        public Point pointOne = new Point(350, 100);
        public Point pointTwo = new Point(150, 100);
        //POintsfor the MOON
        Rectangle moonRect = new Rectangle(20, 0, 100, 100);
        float startAngle = 35F;
        float sweepAngle = 180F;
        Rectangle moonRectEnd = new Rectangle(27, -10, 100, 100);
        float connectPointOne = 45F;
        float connectPointTwo = 160F;
        public Point moonOne = new Point(30, 30);
        public Point moonTwo = new Point(80, 80);
        //points for centerLgo/PIE
        Rectangle logo = new Rectangle(215, 30, 70, 70);
        //points for polygon
        Point[] po = new Point[]
        {

            new Point {X=420, Y= 40},
            new Point {X=450, Y= 20},
            new Point {X=490, Y= 20},
            new Point {X=500, Y= 15},
            new Point {X=500, Y= 65},
            new Point {X=490, Y= 60},
            new Point {X=450, Y= 60},


        };
        //eclipse 
        Rectangle eclipse = new Rectangle(-60,250,700,300);
        //points for hexagons
        Point[] pointForHex = new Point[] 
        {
            new Point(510, 25),//1
            new Point(515, 20),//2
            new Point(520, 20),//3
            new Point(525, 25),//4
            new Point(520, 30),//5
            new Point(515, 30),//6

        };
        Point[] pointForHexTwo = new Point[]
        {
            new Point(510, 45),//1
            new Point(515, 40),//2
            new Point(520, 40),//3
            new Point(525, 45),//4
            new Point(520, 50),//5
            new Point(515, 50),//6

        };
        Point[] pointForHexTres = new Point[]
{
            new Point(530, 35),//1
            new Point(535, 30),//2
            new Point(540, 30),//3
            new Point(545, 35),//4
            new Point(540, 40),//5
            new Point(535, 40),//6

};

        public Form1()
        {
            this.BackColor = Color.Black;
            InitializeComponent();
        }
        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            
            Point[] Tpoints = { startingPoint, pointOne, pointTwo};
            Point[] points = {moonOne, moonTwo };
            //Game Title

            String title = "Useless Game";
            String plyBtn = "PLAY";
            String quitBtn = "QUIT";

            Pen blackPen = new Pen(Color.Black);
            Pen WhitePen = new Pen(Color.White);
            SolidBrush drawBrush = new SolidBrush(Color.White);
            SolidBrush greenBrush = new SolidBrush(Color.Green);
            SolidBrush stringBrush = new SolidBrush(Color.Red);

            e.Graphics.DrawRectangle(WhitePen, Titlex, Titley - 10, Titlewidth, Titlehieght);
            e.Graphics.DrawPolygon(blackPen, Tpoints);
            Font font = new Font("Arial", 16);

            RectangleF drawRect = new RectangleF(Titlex, Titley, Titlewidth, Titlehieght);
            RectangleF plyRext = new RectangleF(plyX + 55, plyY + 15, plyWidth + 20, plyHieght);
            RectangleF quitText = new RectangleF(circleX + 50, circleY + 15, circleWidth + 20, circlrHieght);

            StringFormat format = new StringFormat();
            format.Alignment = StringAlignment.Center;
            
            e.Graphics.DrawString(title, font, stringBrush, drawRect, format);
            e.Graphics.FillPolygon(drawBrush, Tpoints);
            e.Graphics.FillRectangle(drawBrush, plyX, plyY, plyWidth, plyHieght);
            e.Graphics.DrawString(plyBtn, font, stringBrush, plyRext, format);
            e.Graphics.FillEllipse(drawBrush, circleX, circleY, circleWidth, circlrHieght);//circle
            e.Graphics.DrawString(quitBtn, font, stringBrush, quitText, format);
            e.Graphics.DrawArc(WhitePen, moonRect, startAngle, sweepAngle);
            e.Graphics.DrawArc(WhitePen, moonRectEnd, connectPointOne, connectPointTwo);
            e.Graphics.DrawPie(blackPen, logo, 25, 290);
            e.Graphics.FillPolygon(drawBrush, po);
            e.Graphics.FillEllipse(greenBrush, eclipse);
            e.Graphics.FillPolygon(drawBrush, pointForHex);
            e.Graphics.FillPolygon(drawBrush, pointForHexTwo);
            e.Graphics.FillPolygon(drawBrush, pointForHexTres);


        }
    }
}
