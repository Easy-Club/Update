using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;
using System.Web.Http.Cors;
namespace UI.Controllers

{
    public class UsersController : ApiController
    {
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

        /// <summary>
        /// 
        /// </summary>
        /// <param name="password"></param>
        /// <param name="mail"></param>
        /// <returns></returns>
        [HttpGet]
        public UsersDTO GetLogIn(string password,string mail)
        {
           return UsersService.LogIn(password,mail);
        }

        [HttpPost]
        public IHttpActionResult PostSingIn(UsersDTO users)
        {
            if (users == null)
            {
                return BadRequest();//404
            }
            if (UsersService.isPasswordExist(users.Password))
            {
                return BadRequest("password is exist");
            }
            if (UsersService.isEmailExist(users.Email))
            {
                return BadRequest("email is exist");
            }

            UsersService.SighIn(users);
            return Ok(users);//200

        }
        [HttpGet]
        public bool isClubCardExist(int enterpCardId, string userId)
        {
            return UsersService.isClubCardExist(enterpCardId, userId);
        }

    }
}
