using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BL;
using DTO;
namespace UI.Controllers
{
    public class LoteryController : ApiController
    {
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

        [HttpGet]
        public List<LoteryDTO> GetViewLoteryForCard(ClubCardsDTO clubCard)
        {
            return LoteryService.ViewLoteryForCard(clubCard);
        }
    }
}
