using System;
using System.Collections.Generic;
using System.Runtime.ConstrainedExecution;
using Microsoft.EntityFrameworkCore;

namespace VehicleServiceManagement.Models
{
    public partial class VehicleServiceManagementContext : DbContext
    {
        public VehicleServiceManagementContext()
        {
        }

        public VehicleServiceManagementContext(DbContextOptions<VehicleServiceManagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<MaterialBill> MaterialBills { get; set; }
        //public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<ServiceRecord> ServiceRecords { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Vehicle> Vehicles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User()
            {
                Id = 1,
                FirstName = "Admin",
                LastName = "",
                Email = "admin@gmail.com",
                MobileNumber = "1234567890",
                AccountStatus = AccountStatus.ACTIVE,
                UserType = UserType.ADMIN,
                Password = "admin1999",
                CreatedOn = new DateTime(2023, 11, 01, 13, 28, 12)
            }, new User()
            {
                Id = 2,
                FirstName = "service adviser",
                LastName = "",
                Email = "sa@gmail.com",
                MobileNumber = "1234567892",
                AccountStatus = AccountStatus.ACTIVE,
                UserType = UserType.SERVICE_ADVISER,
                Password = "sa1999",
                CreatedOn = new DateTime(2023, 11, 01, 13, 28, 12)
            });

            // You can uncomment and adjust the following sections as needed:

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustomerId).HasName("PK__Customer__A4AE64D87E24C61B");
                entity.ToTable("Customer");
                entity.Property(e => e.Email).HasMaxLength(100);
                entity.Property(e => e.FirstName).HasMaxLength(50);
                entity.Property(e => e.LastName).HasMaxLength(50);
                entity.Property(e => e.PhoneNumber).HasMaxLength(15);
            });

            modelBuilder.Entity<MaterialBill>(entity =>
            {
                entity.HasKey(e => e.BillId).HasName("PK__Material__CF6E7DA32F8BFC6B");
                entity.ToTable("MaterialBill");
                entity.Property(e => e.BillId).HasColumnName("Bill_Id");
                entity.Property(e => e.Cost).HasColumnType("decimal(10, 2)");
                entity.Property(e => e.Item).HasMaxLength(100);
                entity.Property(e => e.SrId).HasColumnName("SR_ID");
                entity.HasOne(d => d.Sr).WithMany(p => p.MaterialBills)
                    .HasForeignKey(d => d.SrId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MaterialB__SR_ID__49C3F6B7");
            });

            // modelBuilder.Entity<Role>(entity =>
            // {
            //     entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE1A3095792C");
            //     entity.Property(e => e.RoleName).HasMaxLength(50);
            // });

            modelBuilder.Entity<ServiceRecord>(entity =>
            {
                entity.HasKey(e => e.SrId).HasName("PK__ServiceR__1D8D10010CEF26D7");
                entity.ToTable("ServiceRecord");
                entity.Property(e => e.SrId).HasColumnName("SR_ID");
                entity.Property(e => e.DateOfService).HasColumnType("date");
                entity.Property(e => e.ServiceCost).HasColumnType("decimal(10, 2)");
                entity.Property(e => e.ServiceDesc).HasMaxLength(255);
                entity.Property(e => e.Status).HasMaxLength(50);
                entity.Property(e => e.VehicleId).HasColumnName("VehicleID");
                entity.HasOne(d => d.User).WithMany(p => p.ServiceRecords)
                    .HasForeignKey(d => d.ID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ServiceRe__UserI__46E78A0C");
                entity.HasOne(d => d.Vehicle).WithMany(p => p.ServiceRecords)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ServiceRe__Vehic__45F365D3");
            });

            // modelBuilder.Entity<User>(entity =>
            // {
            //     entity.HasKey(e => e.UserId).HasName("PK__User__1788CC4CADC4F523");
            //     entity.ToTable("User");
            //     entity.HasIndex(e => e.UserName, "UQ__User__C9F28456DCBFEE7F").IsUnique();
            //     entity.Property(e => e.FirstName).HasMaxLength(50);
            //     entity.Property(e => e.LastName).HasMaxLength(50);
            //     entity.Property(e => e.Password).HasMaxLength(256);
            //     entity.Property(e => e.UserName).HasMaxLength(50);
            //     entity.HasOne(d => d.Role).WithMany(p => p.Users)
            //         .HasForeignKey(d => d.RoleId)
            //         .OnDelete(DeleteBehavior.ClientSetNull)
            //         .HasConstraintName("FK__User__RoleId__3D5E1FD2");
            // });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.HasKey(e => e.VehicleId).HasName("PK__Vehicle__476B5492E1BB7978");
                entity.ToTable("Vehicle");
                entity.HasIndex(e => e.Vin, "UQ__Vehicle__C5DF234CB1459B78").IsUnique();
                entity.Property(e => e.Make).HasMaxLength(50);
                entity.Property(e => e.Model).HasMaxLength(50);
                entity.Property(e => e.Vin)
                    .HasMaxLength(17)
                    .HasColumnName("VIN");
                entity.HasOne(d => d.Customer).WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Vehicle__Custome__4316F928");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<UserType>().HaveConversion<string>();
            configurationBuilder.Properties<AccountStatus>().HaveConversion<string>();
        }
    }
}
