using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace webapiservice.Connection
{
    public class Connection
    {
        string connetionString = "Data Source=localhost,1433;Initial Catalog=MetasVIP_Pruebas;Integrated Security=False;Persist Security Info=True;User ID=SA;Password=Contrasena1234";
        public SqlConnection connection = new SqlConnection();

        public Connection() {
            connection.ConnectionString = connetionString;
        }

        public SqlConnection GetConnection() {
            return connection;
        }

        public void OpenConnection() {
            try
            {
                connection.Open(); 
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ocurrió un error al intentar conectar con la BD: {0}", ex);
            }
        }

        public void CloseConnection() {
            connection.Close();
        }
    }
}
