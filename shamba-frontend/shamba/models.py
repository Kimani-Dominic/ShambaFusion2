from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    is_farmer = models.BooleanField(default=False)
    is_buyer = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='shamba_user_set',
        blank=True,
        help_text='The groups this user belongs to.'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='shamba_user_permissions_set',
        help_text='Specific permissions for this user.'
    )
    email = models.EmailField(unique=True)
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
   
    
class Product(models.Model):
    farmer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
   
class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products')
    description = models.TextField()    
    
    def __str__(self):
        return self.name
    
    
class Order(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='products')
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=[('pending', 'Pending'), ('completed', 'Completed'), ('canceled', 'Canceled')])
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
class Disease(models.Model):
    crop_type = models.CharField(max_length=30, choices=[('tomatoes', 'Tomatoes'), ('french beans', 'French beans')])
    symptoms = models.TextField()
    treatment = models.TextField()
    image = models.ImageField(upload_to='diseases')
    
    def __str__(self):
        return self.name
    
class FarmInsights(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    crop_type = models.CharField(max_length=30, choices=[('tomatoes', 'Tomatoes'), ('french beans', 'French beans')])
    insights = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Insights for {self.crop_type} - {self.user.username}'


