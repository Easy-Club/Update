﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ClubCardsEntities : DbContext
    {
        public ClubCardsEntities()
            : base("name=ClubCardsEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Buyings> Buyings { get; set; }
        public virtual DbSet<ClubCards> ClubCards { get; set; }
        public virtual DbSet<EnterpCards> EnterpCards { get; set; }
        public virtual DbSet<Enterprises> Enterprises { get; set; }
        public virtual DbSet<Lotery> Lotery { get; set; }
        public virtual DbSet<ManagerEnter> ManagerEnter { get; set; }
        public virtual DbSet<Users> Users { get; set; }
    }
}
