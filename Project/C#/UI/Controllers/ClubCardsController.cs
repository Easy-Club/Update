﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;
using System.Web.Http.Cors;

namespace UI.Controllers
{
    public class ClubCardsController : ApiController
    {
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        [HttpGet]
        public List<ClubCardsDTO> GetViewCards(string password)
        {
            return ClubCardsService.ViewCards(password);
        }
    }
}
