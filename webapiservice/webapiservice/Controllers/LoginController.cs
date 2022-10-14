using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using webapiservice.Connection;
namespace webapiservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
    // POST: LoginController/Details/5
    [HttpPost]
      public IActionResult Details([FromBody] string user)
      {
            string pass = "123";
            Connection.Connection conn = new Connection.Connection();
            conn.OpenConnection();
            string query = String.Format("select* from Users where Username ={0} AND Password ={1}", user, pass);
            SqlCommand command = new SqlCommand(query, conn.GetConnection());
            SqlDataReader queryResult = command.ExecuteReader();
            if (!queryResult.HasRows) {
                return BadRequest("Usuario o contraseña inválidos");
            }
            conn.CloseConnection();
            return Ok();
        }

    }
}
