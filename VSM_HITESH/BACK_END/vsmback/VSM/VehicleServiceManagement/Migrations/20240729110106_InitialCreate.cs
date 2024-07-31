using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace VehicleServiceManagement.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    CustomerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Customer__A4AE64D87E24C61B", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AccountStatus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    VehicleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    Make = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Model = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    VIN = table.Column<string>(type: "nvarchar(17)", maxLength: 17, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Vehicle__476B5492E1BB7978", x => x.VehicleId);
                    table.ForeignKey(
                        name: "FK__Vehicle__Custome__4316F928",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "CustomerId");
                });

            migrationBuilder.CreateTable(
                name: "ServiceRecord",
                columns: table => new
                {
                    SR_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VehicleID = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    DateOfService = table.Column<DateTime>(type: "date", nullable: false),
                    ServiceDesc = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    ServiceCost = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__ServiceR__1D8D10010CEF26D7", x => x.SR_ID);
                    table.ForeignKey(
                        name: "FK__ServiceRe__UserI__46E78A0C",
                        column: x => x.Id,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__ServiceRe__Vehic__45F365D3",
                        column: x => x.VehicleID,
                        principalTable: "Vehicle",
                        principalColumn: "VehicleId");
                });

            migrationBuilder.CreateTable(
                name: "MaterialBill",
                columns: table => new
                {
                    Bill_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SR_ID = table.Column<int>(type: "int", nullable: false),
                    Item = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Cost = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    Units = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Material__CF6E7DA32F8BFC6B", x => x.Bill_Id);
                    table.ForeignKey(
                        name: "FK__MaterialB__SR_ID__49C3F6B7",
                        column: x => x.SR_ID,
                        principalTable: "ServiceRecord",
                        principalColumn: "SR_ID");
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AccountStatus", "CreatedOn", "Email", "FirstName", "LastName", "MobileNumber", "Password", "UserType" },
                values: new object[,]
                {
                    { 1, "ACTIVE", new DateTime(2023, 11, 1, 13, 28, 12, 0, DateTimeKind.Unspecified), "admin@gmail.com", "Admin", "", "1234567890", "admin1999", "ADMIN" },
                    { 2, "ACTIVE", new DateTime(2023, 11, 1, 13, 28, 12, 0, DateTimeKind.Unspecified), "sa@gmail.com", "service adviser", "", "1234567892", "sa1999", "SERVICE_ADVISER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_MaterialBill_SR_ID",
                table: "MaterialBill",
                column: "SR_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRecord_Id",
                table: "ServiceRecord",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRecord_VehicleID",
                table: "ServiceRecord",
                column: "VehicleID");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicle_CustomerId",
                table: "Vehicle",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "UQ__Vehicle__C5DF234CB1459B78",
                table: "Vehicle",
                column: "VIN",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MaterialBill");

            migrationBuilder.DropTable(
                name: "ServiceRecord");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Vehicle");

            migrationBuilder.DropTable(
                name: "Customer");
        }
    }
}
