using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Amazepack_Project.Model
{
    public partial class Amazepack_ProjectContext : DbContext
    {
        public Amazepack_ProjectContext()
        {
        }

        public Amazepack_ProjectContext(DbContextOptions<Amazepack_ProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CartModel> CartModels { get; set; }
        public virtual DbSet<LoginModel> LoginModels { get; set; }
        public virtual DbSet<OrderModel> OrderModels { get; set; }
        public virtual DbSet<ProductModel> ProductModels { get; set; }
        public virtual DbSet<ReviewModel> ReviewModels { get; set; }
        public virtual DbSet<UserModel> UserModels { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-0RJ5OF6;Database=Amazepack_Project;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<CartModel>(entity =>
            {
                entity.HasKey(e => e.CartItemId)
                    .HasName("PK__CartMode__283983B6EDB75CB1");

                entity.ToTable("CartModel");

                entity.Property(e => e.CartItemId)
                    .HasMaxLength(30)
                    .HasColumnName("cartItemId");

                entity.Property(e => e.Price)
                    .HasMaxLength(30)
                    .HasColumnName("price");

                entity.Property(e => e.ProductId)
                    .HasMaxLength(30)
                    .HasColumnName("productId");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(30)
                    .HasColumnName("productName");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.UserId)
                    .HasMaxLength(30)
                    .HasColumnName("userId");
            });

            modelBuilder.Entity<LoginModel>(entity =>
            {
                entity.HasKey(e => e.LoginId)
                    .HasName("PK__LoginMod__1F5EF4CF2EDA44C9");

                entity.ToTable("LoginModel");

                entity.Property(e => e.LoginId)
                    .HasMaxLength(30)
                    .HasColumnName("loginId");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<OrderModel>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PK__OrderMod__0809335DA02A02B3");

                entity.ToTable("OrderModel");

                entity.Property(e => e.OrderId)
                    .HasMaxLength(30)
                    .HasColumnName("orderId");

                entity.Property(e => e.Price)
                    .HasMaxLength(30)
                    .HasColumnName("price");

                entity.Property(e => e.ProductId)
                    .HasMaxLength(30)
                    .HasColumnName("productId");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(30)
                    .HasColumnName("productName");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .HasColumnName("status");

                entity.Property(e => e.TotalPrice)
                    .HasMaxLength(30)
                    .HasColumnName("totalPrice");

                entity.Property(e => e.UserId)
                    .HasMaxLength(30)
                    .HasColumnName("userId");
            });

            modelBuilder.Entity<ProductModel>(entity =>
            {
                entity.HasKey(e => e.ProductId)
                    .HasName("PK__ProductM__2D10D16A68E60A74");

                entity.ToTable("ProductModel");

                entity.Property(e => e.ProductId)
                    .HasMaxLength(30)
                    .HasColumnName("productId");

                entity.Property(e => e.Description)
                    .HasMaxLength(30)
                    .HasColumnName("description");

                entity.Property(e => e.ImageUrl)
                    .HasMaxLength(1000)
                    .HasColumnName("imageUrl");

                entity.Property(e => e.Price)
                    .HasMaxLength(30)
                    .HasColumnName("price");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(30)
                    .HasColumnName("productName");

                entity.Property(e => e.Quantity)
                    .HasMaxLength(30)
                    .HasColumnName("quantity");
            });

            modelBuilder.Entity<ReviewModel>(entity =>
            {
                entity.HasKey(e => e.ReviewId)
                    .HasName("PK__ReviewMo__2ECD6E04C545D863");

                entity.ToTable("ReviewModel");

                entity.Property(e => e.ReviewId)
                    .HasMaxLength(30)
                    .HasColumnName("reviewId");

                entity.Property(e => e.ProductId)
                    .HasMaxLength(30)
                    .HasColumnName("productId");

                entity.Property(e => e.ReviewText)
                    .HasMaxLength(1000)
                    .HasColumnName("reviewText");

                entity.Property(e => e.UserId)
                    .HasMaxLength(30)
                    .HasColumnName("userId");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .HasColumnName("userName");
            });

            modelBuilder.Entity<UserModel>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__UserMode__CB9A1CFF4CDCC669");

                entity.ToTable("UserModel");

                entity.Property(e => e.UserId)
                    .HasMaxLength(30)
                    .HasColumnName("userId");

                entity.Property(e => e.Active).HasColumnName("active");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(30)
                    .HasColumnName("mobileNumber");

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .HasColumnName("password");

                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .HasColumnName("role");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
