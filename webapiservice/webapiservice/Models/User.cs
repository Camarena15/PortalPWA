using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapiservice.Models
{
    public class User
    {
        protected string username;
        protected string password;
        protected string customerId;
        protected string cRM;
        protected int membership;

        public User(string usr, string pass) {
            this.username = usr;
            this.password = pass;
        }

        public string Username { get { return this.username; } set{ this.username = value; } }
        public string Password { get { return this.password; } set { this.password = value; } }


    }
}
