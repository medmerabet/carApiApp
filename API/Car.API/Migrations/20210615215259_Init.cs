using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Car.API.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "api-formation");

            migrationBuilder.CreateTable(
                name: "Brands",
                schema: "api-formation",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false),
                    Image = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                schema: "api-formation",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Model = table.Column<string>(nullable: false),
                    Price = table.Column<decimal>(nullable: true),
                    DateOfCirculation = table.Column<DateTime>(nullable: true),
                    BrandID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Cars_Brands_BrandID",
                        column: x => x.BrandID,
                        principalSchema: "api-formation",
                        principalTable: "Brands",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_BrandID",
                schema: "api-formation",
                table: "Cars",
                column: "BrandID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars",
                schema: "api-formation");

            migrationBuilder.DropTable(
                name: "Brands",
                schema: "api-formation");
        }
    }
}
